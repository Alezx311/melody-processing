// ! =====> Value Types <=====

export type TProperty<T> = T extends Record<infer P, any>
  ? P
  : T extends { [p in infer P]: any }
  ? P
  : keyof T | string | number | symbol;

export type TValue<T> = T extends Array<infer Item>
  ? Item
  : T extends Record<string | number | symbol, infer Item>
  ? Item
  : T extends { [P in keyof T]: infer Item }
  ? Item
  : T;

export type TEntry<T> = T extends {
  [k in infer K]: infer V;
}
  ? [K, V]
  : T extends Record<infer K, infer V>
  ? [K, V]
  : [keyof T, T[keyof T]];
