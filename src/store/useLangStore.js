import { create } from 'zustand';
import enTranslations from '../locales/en.json';
import faTranslations from '../locales/fa.json';

export const useLangStore = create((set) => ({
  // ۱. زبان پیش‌فرض سایت (انگلیسی)
  currentLang: 'en',
  
  // ۲. متون ترجمه شده بر اساس زبان فعال
  translations: enTranslations,
  
  // ۳. تابع اصلی برای تغییر زبان بین انگلیسی و دری
  switchLanguage: (lang) => set(() => {
    const isFa = lang === 'fa';
    
    // تغییر جهت تگ HTML به صورت خودکار (RTL برای دری و LTR برای انگلیسی)
    document.documentElement.dir = isFa ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
    
    return {
      currentLang: lang,
      translations: isFa ? faTranslations : enTranslations
    };
  }),
}));