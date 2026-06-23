"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";
import "@/lib/i18n";
import { getRouteMetaByPath, pickRouteMetaSource } from "@/lib/pageMetadata";

const SKIP_TAGS = new Set(["SCRIPT", "STYLE", "NOSCRIPT", "IFRAME", "SVG", "PATH"]);
const ATTRS = ["placeholder", "title", "aria-label"];
const cache = new Map();

function isInsideNoTranslate(el) {
  return Boolean(
    el?.closest?.("[data-i18n-skip='true'], [data-i18n-skip], [translate='no']")
  );
}

function shouldSkip(text) {
  if (!text) return true;
  const value = text.trim();
  if (!value) return true;
  if (value.startsWith("/")) return true;
  if (value.includes("@")) return true;
  if (/https?:\/\//i.test(value)) return true;
  if (/^\+?[0-9\s().,:%-]+$/.test(value)) return true;
  /* Common UI language codes */
  if (/^[A-Z]{2}$/.test(value)) return true;
  /* Unresolved react-i18next keys (e.g. navbar.home, homeHero.title) */
  if (/^[a-z][a-zA-Z0-9]*(\.[a-zA-Z][a-zA-Z0-9]*)+$/.test(value)) return true;
  return false;
}

async function translateOne(text, lang) {
  const key = `${lang}:${text}`;
  if (cache.has(key)) return cache.get(key);

  try {
    const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=${lang}&dt=t&q=${encodeURIComponent(text)}`;
    const res = await fetch(url);
    if (!res.ok) return text;
    const data = await res.json();
    const translated = Array.isArray(data?.[0])
      ? data[0].map((part) => (Array.isArray(part) ? part[0] : "")).join("")
      : text;
    const output = translated || text;
    cache.set(key, output);
    return output;
  } catch {
    return text;
  }
}

export default function I18nDomTranslator() {
  const pathname = usePathname();
  const { i18n } = useTranslation();
  const textOriginalsRef = useRef(new WeakMap());
  const attrOriginalsRef = useRef(new WeakMap());
  const runIdRef = useRef(0);

  useEffect(() => {
    if (typeof document === "undefined") return;

    const runId = ++runIdRef.current;
    const lang = (i18n.resolvedLanguage || i18n.language || "en").slice(0, 2);

    const textNodes = [];
    const attrTargets = [];

    const walk = (node) => {
      if (node.nodeType === Node.TEXT_NODE) {
        const parent = node.parentElement;
        if (!parent || SKIP_TAGS.has(parent.tagName)) return;
        if (isInsideNoTranslate(parent)) return;

        const current = node.textContent || "";
        if (shouldSkip(current)) return;

        textNodes.push(node);
        /* Always refresh so language switches do not restore stale English over React/i18n output. */
        textOriginalsRef.current.set(node, current);
        return;
      }

      if (node.nodeType !== Node.ELEMENT_NODE) return;
      const el = node;
      if (SKIP_TAGS.has(el.tagName)) return;
      if (isInsideNoTranslate(el)) {
        for (const child of el.childNodes) walk(child);
        return;
      }

      let attrMap = attrOriginalsRef.current.get(el);
      if (!attrMap) {
        attrMap = new Map();
        attrOriginalsRef.current.set(el, attrMap);
      }

      for (const attr of ATTRS) {
        if (!el.hasAttribute(attr)) continue;
        const current = el.getAttribute(attr) || "";
        if (shouldSkip(current)) continue;

        attrMap.set(attr, current);
        attrTargets.push({ el, attr });
      }

      for (const child of el.childNodes) walk(child);
    };

    walk(document.body);
    document.documentElement.lang = lang;

    // Always restore originals first before applying a new language
    for (const node of textNodes) {
      const original = textOriginalsRef.current.get(node);
      if (typeof original === "string" && node.isConnected) {
        node.textContent = original;
      }
    }
    for (const { el, attr } of attrTargets) {
      const attrMap = attrOriginalsRef.current.get(el);
      const original = attrMap?.get(attr);
      if (typeof original === "string" && el.isConnected) {
        el.setAttribute(attr, original);
      }
    }

    if (lang === "en") return;

    (async () => {
      const originals = [];
      const seen = new Set();

      for (const node of textNodes) {
        const original = textOriginalsRef.current.get(node);
        if (typeof original === "string" && !seen.has(original)) {
          seen.add(original);
          originals.push(original);
        }
      }

      for (const { el, attr } of attrTargets) {
        const attrMap = attrOriginalsRef.current.get(el);
        const original = attrMap?.get(attr);
        if (typeof original === "string" && !seen.has(original)) {
          seen.add(original);
          originals.push(original);
        }
      }

      const translatedValues = await Promise.all(originals.map((value) => translateOne(value, lang)));
      if (runIdRef.current !== runId) return;

      const translatedMap = new Map();
      originals.forEach((value, idx) => translatedMap.set(value, translatedValues[idx]));

      for (const node of textNodes) {
        const original = textOriginalsRef.current.get(node);
        if (node.isConnected && translatedMap.has(original)) {
          node.textContent = translatedMap.get(original);
        }
      }

      for (const { el, attr } of attrTargets) {
        const attrMap = attrOriginalsRef.current.get(el);
        const original = attrMap?.get(attr);
        if (el.isConnected && translatedMap.has(original)) {
          el.setAttribute(attr, translatedMap.get(original));
        }
      }
    })();
  }, [pathname, i18n.language, i18n.resolvedLanguage]);

  useEffect(() => {
    const lang = (i18n.resolvedLanguage || i18n.language || "en").slice(0, 2);
    const routeMeta = getRouteMetaByPath(pathname);
    const source = pickRouteMetaSource(routeMeta);
    if (!source) return;

    const applyMeta = (title, description) => {
      if (title) {
        document.title = title;
      }
      if (description) {
        let descriptionTag = document.querySelector('meta[name="description"]');
        if (!descriptionTag) {
          descriptionTag = document.createElement("meta");
          descriptionTag.setAttribute("name", "description");
          document.head.appendChild(descriptionTag);
        }
        descriptionTag.setAttribute("content", description);
      }
    };

    if (lang === source.sourceLang) {
      applyMeta(source.title, source.description);
      return;
    }

    let cancelled = false;
    (async () => {
      const [translatedTitle, translatedDescription] = await Promise.all([
        source.title ? translateOne(source.title, lang) : Promise.resolve(""),
        source.description ? translateOne(source.description, lang) : Promise.resolve(""),
      ]);
      if (cancelled) return;
      applyMeta(translatedTitle || source.title, translatedDescription || source.description);
    })();

    return () => {
      cancelled = true;
    };
  }, [pathname, i18n.language, i18n.resolvedLanguage]);

  return null;
}
