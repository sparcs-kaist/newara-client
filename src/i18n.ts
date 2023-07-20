import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import enCommon from "@/locales/en/common.json";
import enSystem from "@/locales/en/system.json";
import koCommon from "@/locales/ko/common.json";
import koSystem from "@/locales/ko/system.json";

await i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    ns: ["common", "system"],
    resources: {
      en: { common: enCommon, system: enSystem },
      ko: { common: koCommon, system: koSystem },
    },
    fallbackLng: "en",
    debug: import.meta.env.DEV,
  });

export default i18n;
