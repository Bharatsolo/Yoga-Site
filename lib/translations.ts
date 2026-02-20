import { navTranslations } from './translations/nav';
import { homeTranslations } from './translations/home';
import { aboutTranslations } from './translations/about';
import { exploreTranslations } from './translations/explore';
import { plansTranslations } from './translations/plans';
import { collabTranslations } from './translations/collab';
import { contactTranslations } from './translations/contact';

const allModules = [
    navTranslations,
    homeTranslations,
    aboutTranslations,
    exploreTranslations,
    plansTranslations,
    collabTranslations,
    contactTranslations,
];

// Merge all modules into a single Record<lang, Record<key, value>>
const merged: Record<string, Record<string, string>> = {};
for (const mod of allModules) {
    for (const lang of Object.keys(mod)) {
        if (!merged[lang]) merged[lang] = {};
        Object.assign(merged[lang], mod[lang]);
    }
}

export const translations = merged;

export function t(key: string, lang: string): string {
    return translations[lang]?.[key] || translations['en']?.[key] || key;
}

export const supportedLanguages = [
    { code: 'en', label: 'English', flag: '🇬🇧' },
    { code: 'hi', label: 'हिन्दी', flag: '🇮🇳' },
    { code: 'te', label: 'తెలుగు', flag: '🇮🇳' },
    { code: 'ta', label: 'தமிழ்', flag: '🇮🇳' },
    { code: 'kn', label: 'ಕನ್ನಡ', flag: '🇮🇳' },
    { code: 'ml', label: 'മലയാളം', flag: '🇮🇳' },
    { code: 'bn', label: 'বাংলা', flag: '🇮🇳' },
    { code: 'mr', label: 'मराठी', flag: '🇮🇳' },
    { code: 'gu', label: 'ગુજરાતી', flag: '🇮🇳' },
    { code: 'pa', label: 'ਪੰਜਾਬੀ', flag: '🇮🇳' },
    { code: 'od', label: 'ଓଡ଼ିଆ', flag: '🇮🇳' },
    { code: 'sa', label: 'संस्कृतम्', flag: '🇮🇳' },
];
