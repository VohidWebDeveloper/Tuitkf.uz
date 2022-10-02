import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import i18n from "i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
import { useTranslation, initReactI18next } from "react-i18next";
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next'
import axios from 'axios';



i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .use(LanguageDetector)
    .use(HttpApi)
    .init({
        supportedLngs: ['uz', 'en', 'ru'],
        fallbackLng: "en",
        detection: {
            order: ['path', 'cookie', 'htmlTag', 'localStorage', 'subdomain'],
            caches: ['cookie']
        },
        backend: {
            loadPath: '/assets/locales/{{lng}}/translation.json',
        }

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
