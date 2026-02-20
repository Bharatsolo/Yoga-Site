'use client';

import { useState, useRef, useEffect } from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import { supportedLanguages as languages } from '@/lib/translations';

export default function LanguageSelector() {
    const { lang, setLang } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    const current = languages.find(l => l.code === lang) || languages[0];

    useEffect(() => {
        const handleClick = (e: MouseEvent) => {
            if (ref.current && !ref.current.contains(e.target as Node)) setIsOpen(false);
        };
        document.addEventListener('mousedown', handleClick);
        return () => document.removeEventListener('mousedown', handleClick);
    }, []);

    return (
        <div ref={ref} className="relative">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-sm hover:bg-white/20 transition-all duration-300"
                aria-label="Change language"
                aria-expanded={isOpen}
            >
                <span className="text-base">{current.flag}</span>
                <span className="hidden sm:inline">{current.label}</span>
                <svg className={`w-3 h-3 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </button>

            {isOpen && (
                <div className="absolute right-0 top-full mt-2 w-48 bg-dark-bg/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl overflow-hidden z-[100] animate-fade-in-up" style={{ animationDuration: '0.2s' }}>
                    <div className="max-h-72 overflow-y-auto custom-scrollbar">
                        {languages.map((l) => (
                            <button
                                key={l.code}
                                onClick={() => { setLang(l.code); setIsOpen(false); }}
                                className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm transition-colors ${lang === l.code
                                    ? 'bg-gold/20 text-gold'
                                    : 'text-white/70 hover:bg-white/10 hover:text-white'
                                    }`}
                            >
                                <span>{l.flag}</span>
                                <span>{l.label}</span>
                                {lang === l.code && <span className="ml-auto text-gold">✓</span>}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
