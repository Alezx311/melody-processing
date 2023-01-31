// ! =====> Value Types <=====

export type VType<T> = T extends any[] | ReadonlyArray<any> ? T[number] : T[keyof T] | T;
