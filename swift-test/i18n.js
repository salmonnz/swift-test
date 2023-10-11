import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      "hello world": "Welcome to React and react-i18next",
      Test: "Test",
      "Layout & Styles": "Layout & Styles",
      "move position": "move position",
      "move shape": "move shape",
      "Form and Table": "Form and Table",
      Connect: "Connect",
      Main: "Main",
      en: "EN",
      th: "TH",
    },
  },
  th: {
    translation: {
      "hello world": "Bienvenue à React et react-i18next",
      Test: "แบบทดสอบที่",
      "Layout & Styles": "การจัดการหน้าเว็บ",
      "move shape": "เลื่อนรูปแบบ",
      "move position": "เปลี่ยนตำแหน่ง",
      "Form and Table": "การจัดการหน้าฟอร์ม",
      Connect: "การเชื่อมต่อ",
      Main: "หน้าหลัก",
      en: "อังกฤษ",
      th: "ไทย",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
