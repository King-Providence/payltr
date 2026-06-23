// src/hooks/useTranslatedContent.js

import { useTranslation } from "react-i18next";
import { useMemo } from "react";
import { translateUtilContent } from "@/lib/translateUtilContent"; 
// (adjust path if needed)

export const useTranslatedContent = (data) => {
  const { t } = useTranslation();

  const translatedData = useMemo(() => {
    return translateUtilContent(data, t);
  }, [data, t]);

  return translatedData;
};