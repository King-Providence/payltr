// src/hooks/useTranslatedContent.js

import { useTranslation } from "react-i18next";
import { useMemo } from "react";
import { translateUtilContent } from "@/lib/translateUtilContent";

export const useTranslatedContent = (data) => {
  const { t, i18n } = useTranslation();

  const translatedData = useMemo(() => {
    return translateUtilContent(data, t);
  }, [data, t, i18n.language, i18n.resolvedLanguage]);

  return translatedData;
};
