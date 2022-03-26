import get from 'lodash.get';
import { read } from '../../hooks/usePersistedState';
import english from './languages/english';
import luganda from './languages/luganda';
import ateso from './languages/ateso';
import acholi from './languages/acholi';
import lugbara from './languages/lugbara';
import type { UIText } from './languages/english';
import { LANGUAGE } from '../constants';
import { Language } from '../../types';

type KeyPathOf<ObjectType extends object> = {
  [Key in keyof ObjectType & (string | number)]: ObjectType[Key] extends object
    ? `${Key}` | `${Key}.${KeyPathOf<ObjectType[Key]>}`
    : `${Key}`;
}[keyof ObjectType & (string | number)];

type FieldType<Obj, Path> = Path extends `${infer Left}.${infer Right}`
  ? Left extends keyof Obj
    ? FieldType<Obj[Left], Right>
    : undefined
  : Path extends keyof Obj
  ? Obj[Path]
  : undefined;

export type TranslationFunction = <P extends KeyPathOf<UIText>>(
  path: P
) => FieldType<UIText, P>;

const LANGUAGE_TRANSLATIONS: Record<Language, UIText> = {
  english,
  luganda,
  ateso,
  acholi,
  lugbara,
};

const translation: TranslationFunction = (path) => {
  const appLanguage = read<Language>({
    key: LANGUAGE.APP_LANGUAGE_STORAGE_KEY,
    fallback: LANGUAGE.DEFAULT_LANGUAGE,
  });
  const translations = LANGUAGE_TRANSLATIONS[appLanguage];
  return get(translations, path, path);
};

export {
  translation,
  translation as t, // export this for convenience to use t instead of translation
};
