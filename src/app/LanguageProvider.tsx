// LanguageContext.js
import React, { createContext, useContext, useState } from 'react';
const languageData =
{
  "en": {
    "greeting": "Hello",
    "farewell": "Goodbye"
  },
  "es": {
    "greeting": "Hola",
    "farewell": "Adiós"
  },
  "fr": {
    "greeting": "Bonjour",
    "farewell": "Au revoir"
  }
}

// Create Context
const LanguageContext = createContext();

// LanguageProvider component
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en'); // Default language is English

  const translate = (key) => {
    // Get the translation for the current language based on the key
    return languageData[language] && languageData[language][key] 
      ? languageData[language][key] 
      : key; // Default to the key if translation is not found
  };

  const changeLanguage = (newLanguage) => {
    setLanguage(newLanguage); // Change the current language
  };

  return (
    <LanguageContext.Provider value={{ language, translate, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook to use language context
export const useLanguage = () => {
  return useContext(LanguageContext);
};
