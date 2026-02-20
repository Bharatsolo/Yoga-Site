'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

type LanguageContextType = {
    lang: string;
    setLang: (lang: string) => void;
};

const LanguageContext = createContext<LanguageContextType>({ lang: 'en', setLang: () => { } });

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [lang, setLang] = useState('en');
    return (
        <LanguageContext.Provider value={{ lang, setLang }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    return useContext(LanguageContext);
}
