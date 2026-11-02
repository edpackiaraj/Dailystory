import fs from 'node:fs';
import path from 'node:path';
import brandConfig from '../../config/brand.json';

import en from '../locales/en.json';
import ta from '../locales/ta.json';
import hi from '../locales/hi.json';
import es from '../locales/es.json';
import zh from '../locales/zh.json';
import pt from '../locales/pt.json';
import ml from '../locales/ml.json';
import te from '../locales/te.json';
import kn from '../locales/kn.json';
import mr from '../locales/mr.json';

export type TranslationDict = typeof en;

const locales: Record<string, TranslationDict> = {
  en,
  ta,
  hi,
  es,
  zh,
  pt,
  ml,
  te,
  kn,
  mr
};

export function getT(lang: string): TranslationDict {
  if (locales[lang]) {
    return locales[lang];
  }
  // Try loading dynamically from src/locales/<lang>.json if added
  try {
    const localePath = path.resolve(process.cwd(), 'src', 'locales', `${lang}.json`);
    if (fs.existsSync(localePath)) {
      const data = JSON.parse(fs.readFileSync(localePath, 'utf8'));
      locales[lang] = { ...en, ...data };
      return locales[lang];
    }
  } catch {}

  return en;
}

export function getLanguageMeta(code: string) {
  return brandConfig.supportedLanguages.find(l => l.code === code) || brandConfig.supportedLanguages[0];
}

export function getAllLanguages() {
  return brandConfig.supportedLanguages;
}
