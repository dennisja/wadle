import { read } from '../../hooks/usePersistedState';
import english from './languages/english';
import luganda from './languages/luganda';
import ateso from './languages/ateso';
import acholi from './languages/acholi';
import lugbara from './languages/lugbara';
import runyankore from './languages/runyankore';
import { LANGUAGE } from '../constants';
import type { Language } from '../../types';
import type { UIText } from './languages/english';

/**
 * Gets the key paths of an object
 * For example given { a: { c: string }, b: number }
 * It will return the possible paths as `a`,`a.c`,`b`.
 * Its what powers the paths autocomplete in the translation function below
 * If the value is an array though, we include the array methods as a valid path
 * ie given { a: number[] } we return the possible paths as `a`, `a.map` & all js methods.
 * Currently I don't need to cater for this
 */
type KeyPathsOf<ObjectType extends object> = {
  [Key in keyof ObjectType & (string | number)]: ObjectType[Key] extends object
    ? `${Key}` | `${Key}.${KeyPathsOf<ObjectType[Key]>}`
    : `${Key}`;
}[keyof ObjectType & (string | number)];

/**
 * gets the type of a value given an object path i,e
 * given { a : { b: string, c: { d: number } }} as the object and 'a.c' as the path.
 * It will return { d: number } as the type
 */
type FieldType<Obj, Path> = Path extends `${infer Left}.${infer Right}`
  ? Left extends keyof Obj
    ? FieldType<Obj[Left], Right>
    : undefined
  : Path extends keyof Obj
  ? Obj[Path]
  : undefined;

type TranslationFunction = <P extends KeyPathsOf<UIText>>(
  path: P
) => FieldType<UIText, P>;

const LANGUAGE_TRANSLATIONS: Record<Language, UIText> = {
  english,
  luganda,
  ateso,
  acholi,
  lugbara,
  runyankore,
};

const get = <
  ObjectType extends Record<string, any>,
  PathType extends KeyPathsOf<ObjectType>
>(
  obj: ObjectType,
  path: PathType,
  fallback: FieldType<ObjectType, PathType>
): FieldType<ObjectType, PathType> => {
  const paths = path.split('.').filter(Boolean);

  const value = paths.reduce<FieldType<ObjectType, PathType>>(
    (currentValue, key) => currentValue && currentValue[key],
    obj as FieldType<ObjectType, PathType>
  );

  return value || fallback;
};

const translation: TranslationFunction = (path) => {
  const appLanguage = read<Language>({
    key: LANGUAGE.APP_LANGUAGE_STORAGE_KEY,
    fallback: LANGUAGE.DEFAULT_LANGUAGE,
  });
  const translations = LANGUAGE_TRANSLATIONS[appLanguage];
  // we just want the path to the translation to be the fallback value so we cast it to silence the ts error
  // because the get function expects the fallback value to be the same type as the value at a given object path
  return get(
    translations,
    path,
    path as unknown as FieldType<typeof translations, typeof path>
  );
};

export {
  translation,
  translation as t, // export this for convenience to use t instead of translation
};
