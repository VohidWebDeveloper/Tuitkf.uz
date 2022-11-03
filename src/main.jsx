import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next'
import i18n from "i18next";
import {  initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
import common_uz from '../public/assets/locales/uz/translation.json'
import common_ru from '../public/assets/locales/ru/translation.json'
import common_en from '../public/assets/locales/en/translation.json'


i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .use(LanguageDetector)
    .use(HttpApi)
    .init({
        interpolation: { escapeValue: false },
        supportedLngs: ['uz', 'ru', 'en'],
        lng: window.localStorage.getItem("language") || "uz",
        fallbackLng: "en",
        resources: {
            en: {
              common: common_en, // 'common' is our custom namespace
            },
            ru: {
              common: common_ru,
            },
            uz: {
              common: common_uz,
            },
          },
        detection: {
            order: ['cookie', 'htmlTag', 'localStorage', 'path', 'subdomain'],
            caches: ['cookie']
        },
        // backend: {
        //     loadPath: '/assets/locales/{{lng}}/translation.json'
        // },
        react: { useSuspense: false }
    });





const loadingMarkup = (
    <div className="text-center py-4">
        <h2>Loading...</h2>
    </div>
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <Suspense  fallback={loadingMarkup}>
    <React.StrictMode>
        <I18nextProvider i18n={i18next}>
            <App  />
        </I18nextProvider>
    
  </React.StrictMode>
  </Suspense>
)
