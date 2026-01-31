import type { Lang } from '../lib/i18n/i18n';

export interface LocalizedText {
  es: string;
  en?: string;
}

export interface ImageRef {
  src: string;
  alt: LocalizedText;
}

export interface BaseItem {
  id: string;
  title: LocalizedText;
  description?: LocalizedText;
  code?: string; // internal (display TBD)
  image?: ImageRef;
}

export type Project = BaseItem;
export type Service = BaseItem;
export type CaseStudy = BaseItem;

export type CardKind = 'project' | 'service' | 'case';

export interface CardItem {
  kind: CardKind;
  item: BaseItem;
}

export function textForLang(text: LocalizedText, lang: Lang): string {
  return lang === 'en' ? text.en ?? text.es : text.es;
}
