import en from './en'
import ua from './ua'
import coreUA from 'core/texts/ua'
import coreEN from 'core/texts/en'

export const defaultLang = process.env.NEXT_PUBLIC_DEFAULT_LANG as Lang

export const byLang = {
  ua: {...ua, ...coreUA},
  en: {...en, ...coreEN},
} as const

export const flagsMap: Record<Lang, string> = {
  ua: '🇺🇦',
  en: '🇬🇧',
}

export type Lang = keyof typeof byLang

export const langs = Object.keys(byLang) as Lang[]

const defaultLangTexts = byLang[defaultLang]

export type Texts = typeof defaultLangTexts

export type TextKeys = keyof Texts

export default {
  ...byLang,
  default: defaultLangTexts,
}
