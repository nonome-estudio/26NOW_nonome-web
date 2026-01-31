export type Lang = 'es' | 'en';

export const LANGS: Lang[] = ['es', 'en'];
export const DEFAULT_LANG: Lang = 'es';

export function fallbackText(v: { es: string; en?: string }, lang: Lang): string {
  return lang === 'en' ? v.en ?? v.es : v.es;
}
