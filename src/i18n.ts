/** LIBRARIES */
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

/** TRANSLATION FILES */
import en from "@src/assets/locales/en.json";
import sk from "@src/assets/locales/sk.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: en,
      },
      sk: {
        translation: sk,
      },
    },
    lng: "sk",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

const setPageMetadata = () => {
  document.documentElement.lang = i18n.t("head.lang", {
    defaultValue: i18n.language,
  });

  document
    .querySelector('meta[name="description"]')!
    .setAttribute("content", i18n.t("head.meta.description"));

  document.title = i18n.t("head.title");
};

i18n.on("languageChanged", () => {
  setPageMetadata();
});

setPageMetadata();

export default i18n;
