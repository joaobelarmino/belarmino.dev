import { DEFAULT_LANGUAGE, LANGUAGES } from '../constants';
import type { Lang } from '../types';

export function useTranslations(lang: Lang) {
    return function t(key: keyof (typeof LANGUAGES)[typeof DEFAULT_LANGUAGE]) {
        return LANGUAGES[lang][key] || LANGUAGES[DEFAULT_LANGUAGE][key];
    };
}
