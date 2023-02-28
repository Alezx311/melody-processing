// type KeyValueObject<T> = T extends A ? {[i in number]: T[i]} : T extends R ? {[p in string]: T[p]} : {[k in keyof T]: T[k] }
// type KeyType<T> = T extends A ? {[i in number]: T[i]} : T extends Record<infer P extends string, any> ? {[p in P]: T[p]} : {[k in keyof T]: T[k]}
// type KeyOf<T> = T extends { key: infer K } ? K : T extends {[k:infer K extends Key]: any} ? K : keyof T
// type ValueOf<T> = T extends { value: infer V } ? V : T extends {[k in Key]: infer V } ? V : Array<infer V> ? V : T extends Record<Key, infer V> ? V : T
// type FilterKeys<T, Q extends Key> = T extends Record<infer K extends Q, any> ? K : never
// type FilterValues<T, Q> = T extends Record<Key, infer V extends Q> ? V : never
// type FilterObject<T extends R, Q extends Key> = Extract<keyof T, keyof Q> extends Record<infer K, infer V> Record<infer QK, infer QV> ? T extends Record<infer K extends QK, infer V extends QV> ? Record<K, V> : never
// type ToIndex<T> = Extract<T extends Record<infer P extends number, any> ? P : T, Key>
// type ToProps<T> = Extract<T extends Record<infer P extends string, any> ? P : T, Key>
// type ToIndexOrProps<T> = T extends Record<infer I extends number, any> ? I : T extends Record<infer K extends string, any> ? K : Extract<keyof T, Key>
// type ToProperty<T> = T extends Record<infer K extends string, any> ? K : keyof T
// type ToIndexes<T extends  { length: number }> = T extends { [i: infer I extends number]: T[number] infer I extends number]: T[I], [k: infer K extends string]: any} ? Extract<I|K, Key>,  infer I]: any} ? i : Key  never T[number] infer I extends number]: T[I] } ? T[infer I extends number] [ i: infer I extends number]: any } ? I : Key infer I extends number]: T[I]} ? Record<infer I extends number, any> ? I : number
// type ToObjectKeys<T> =  T extends Record<infer K extends string, any> ? K : string
// type ToKeys<T> =  T extends A ? ToArrayKeys<T> : ToObjectKeys<T>
// type ToValues<T> = T extends { value: infer V } ? V : T extends Record<infer K extends ToKeys<T>, infer V> ? V : T
// type ToRecord<T> = T extends Key ? Record<T, any> : T extends A<infer V> ? Record<number, V> : T extends Record<infer K extends string, infer V> ? Record<K, V> : Record<string, T>
// type ToSource<T> = T extends A ? { key: number, value: T[number], desc: 'Array' } : T extends Record<infer K extends string, any> ? { key: K, value: T[K], desc: 'Record' } :  { key: T extends Key ? T : Key, value: T, desc: T extends Key ? 'Key' : 'Any'  }
// type ToObject<T> = T extends A<infer Item> ? {[index: number]: Item} : T extends Record<infer K extends string, infer V> ? {[key:K]: V} : {[k in keyof T]: T[k]}

// type FindKey<T = any> = T extends Key ? T : T extends AnyRecord<infer K, any> extends number, any> ? K : T extends Record<infer K extends string, any> ? K : T
// type FindValue<T = any> = T extends Array<infer V> ? V : T extends Record<string, infer V> ? V : T
// type Not<T, Q> = Extract<T, Exclude<T, Q>>
// type FindValue<T = any, Q = unknown> = Extract<<T>, Q>
// type FindKeyLike<T = any, Q> = Extract<FindKey<T>, FindKey<Q>>
// type FindKeyNotLike<T = any, Q> = Extract<FindKey<T>, Exclude<FindKey<T>, FindKey<Q>>
// type FindKey<T = any> = T extends Key ? T : T extends Array<infer K extends Key> ? K : T extends Record<infer K extends Key, any> ? K : Key
// type FindNotLike<T = any, Q = unknown> = Exclude<T, Extract<T, Q>>
// type FindNotLike<T = any, Q = unknown> = Exclude<Find<T, Q>, Q>
// type FindNotLike<T, Q = any> = Extract<FindValue<T>, Like>
// T extends Record<infer K extends Key, any> ? K : T extends { key: infer K extends Key } ? K : 
// type FindValue<T> = T extends {key: infer K extends Key } ? K : T extends [infer K extends Key, any] ? K :  T extends Key ? T : Key
// type RecordKeys<Props = Key> = Extract<Props extends Array<infer Item> ?  |number : Props extends Record<infer K extends Key, any> ? K|string : Props|string, Key> Props Item extends [infer K extends Key, any] ? K : Item extends Key ? Item : number, Key> :   RecordKeys< ? K infer Item extends > ? Item : Props Extract<Props|Key, Key>
// type TRecord<Props = Key, Data = any> = Props extends Record<infer K extends Key, infer V> ? Record<K, V|Data> : Record<RecordKeys<Props>, Data>
// type TKeys<T = Key> = TRecord<T> extends Record<infer K extends Key, any> ? K : Key
// type TValues<T = Key> = TRecord<T> extends Record<Key, infer V> ? V : T
// type SourceObject<T = unknown> = T extends R<infer K extends Key, infer V> ? { desc: 'Record', key: K, value: V } : { desc: T extends Key ? 'Key' : T extends never ? 'Never' : T extends unknown ? 'Unknown' : 'Any', value: T}
// type SourceEntry<T = unknown> = T extends Record<infer K extends Key, infer V> ? [K, V] : [SourceDesc<T>, T]
// type Sources<T = unknown> = T extends Record<infer K extends Key, infer V> ? Record<K,V> : never { key: K, value: V } : T
// type Key = string|number
// type Plain<T = unknown> = T extends Array<infer V> ? V : T extends Record<infer K extends Key, infer V> ? K | V : T
// type Source<T = unknown> = T extends Array<infer V> ? { key: number, value: V, desc: 'Array'} : T extends Record<infer K extends Key, infer V> ? {key: K, value: V, desc: 'Record'} : {key: Key, value: T, desc: 'Value'}
// type Plain<T = unknown> = T extends Array<infer V> ? [number, V] : T extends Record<infer K extends Key, infer V> ? [K, V] : [Key, T]
// type R<K extends Key = string> = Record<K, any>
// type R<K extends Key = string> = Record<K, any>
// type O<K extends Key = string> = {[k:K]: any}
// type F<P = never, R = any> = P extends never ? () => R : P extends any[] ? (...p:P) => R : (p: P) => R
// type Entry<T = unknown> = T extends  Key ? {[k:T]: any} : T extends Record<infer K extends Key, any> ? {[k in K]: T[k]} : {[k: Key]: any}
// type KeyValue<T = any> =  (Record<Key, any> | {[k: Key]: any} | [Key, any])
// type TKey<T = any> = T extends KeyValue<infer K> ? K :  extends Key Record<infer K extends Key, any> ? K : string|number
// type Entry = [Key, any]
// type Source = { key?: Key, value: any, desc?: string }
// type Items = A<[any] | Source[] | Entry[]>
// type Keys<T, Q extends Key> = T extends Record<infer K extends Q, any> ? K : Extract<T extends Q ? T : keyof T, Q>
// type ExtractValue<T, Q = any> =  T extends Array<infer V> ? V : T extends Record<Key, infer V> ? V : T extends Q ? T : never

// type ExtractValue<T> = T extends Array<infer V> ? V : T extends Record<Key, infer V> ? V : T
// type ExtractValue<T> =  T extends Array<infer V> ? V : T extends Record<string, infer V> ? V : T
// type ExtractKeys<T, Q = Key> =  Extract<T extends Array<any> ? number : T extends Record<infer K extends string, any> ? K : keyof T, Q>
// type ExtractValues<T, Q = any> = Extract<T extends Array<infer V> ? V : T extends Record<string, infer V> ? V : T, Q>
// type FindKeys<T, Q = any> = T extends Record<infer Finded extends , any> ? Finded : never
// type FindValues<T, Q = any> = T extends Record<string, infer Finded extends Extract<Q extends Record<string, infer V> ? V : Q extends Array<infer V> ? V : Q>> ? Finded : never
// type FindValue<T, Q> = T extends Array<infer V extends Q> ? V : T extends Record<infer K extends Extract< , keyof T>|string, string>, infer V extends Q> ? V : T Extract<T, Q>
// type FindValue<T, Q> = T extends Array<infer V extends Q> ? [number,V] : T extends Record<infer K, Q> ? [K, T[K]]  : never
// type KeyAndValue<T> = T extends Array<infer V> ? V : T extends Record<infer K extends string, infer V> ? K|V : T
// type FindKeys<T, Q extends Key> =  Extract<T extends A<infer V> ? V : T extends Record<infer K extends string, any> ? K : T | keyof T, Q extends A ? T[number] : T extends Record<infer K, infer V> ? V : Q>
// type FindEntry<T, Q extends Key> = Extract<T[Q], Q> T, Q> T extends Array<infer V> ? V : T extends Record<infer K extends Q, any> |  Extract<Q, T[K], Q>  Q extends keyof T ? Q : string, infer K extends string, K extends Q ? any : Q> ? [K, V], infer V> ? [K, ] [Extract<K, Q>, V] , |V, Q>, V] : V : K : T, Q>
// type FindConstantKeys<T> =   T extends Record<infer K extends Uppercase< Extract<keyof T, string>>, any> ? K : never
// type FindKeys<T = any, TK extends string = string, TV = any> = T extends Record<infer K extends TK, TV> ? K : never
// type Find<T = any, Q = any> =   Extract<> T  K|V : T Record<Q, T[Q]> ? Record<string, Q>) string> | Record<infer K extends Q, infer V extends Q ? K : keyof T  | T|keyof T|T[keyof T], Q>
// type FindMethodKeys<T> =   T extends Record<infer K extends KeyLike, ValueLike> ? K : never
// type FindConstantKeys<T, Find extends string> = T extends Record<infer K extends Find, any> ? K : never
// type Tuple<T = any, D = any> = T extends any[] ? [...T] : T extends Record<string, unknown> ? [T] : T extends unknown ? T[] : D
// type FindKeys<T extends Record<string, any>, Like = Uppercase<string>> =   Like, any> ? Uppercase<K> : Uppercase<string>> = T extends Record<infer K extends Uppercase<string>, any> ? K : never
// type ObjectKeyFunction<T> = T extends Record<infer K extends string> ? K extends Uppercase<K> ? K : never
// type FNoArgs<Result = any> = () => Result
// type FWithManyParam<Result = any, P> = (...p: [...P]) => Result
// type FOptionalArgs<Result = any, P = never> = (...p: P extends any[] ? [...P] : P[]) => Result
// type FRequiredArgs<Result = any, P1 = any, P = never> = P extends never ? (p: P1) => Result : (...p: P extends any[] ? [P1, ...P] : [P1, P | P extends any[] ? P : P[] [P1, ...P] : [P1, ...P[]] ] : [P1, P[]]) => Result
// type FRequiredArgs<Result = any, P1 = any, P2 = any> = (...p: P2 extends never ? [P1, P2 extends any[] ? [...P2] : P2[]]) => Result
// type FManyArgs<Result = any, Params = any[]> = (...p: [...Params]) => Result
// type FHasEmptyArgs = () => any
// type FunctionWithArgs = (...p: any[]) => any
// type F<P = any,R = any> = P extends never ? () => Result : (param: P) => Result : (p: P) => Result
// type FunctionSource<T extends () => any> = () => any
// type A<T = any> = Array<T>
// type R<T = any> =  T extends Key ? Record<T, any> :  Record<string, any>
// type O<T = any> =  {[k: T extends Key ? T : string]: any}
// type R<T=string> = Record<T extends Array<infer K extends string> ? K : T extends Record<infer K, any> ? K : T extends Key ? T : string, any>
// type RHas<K extends string|number=string, V= unknown> = Record<K, V>
// type AnyObj = Record<string, any> | Record<number, any> | {[k: string]: any} | {[k: number]: any}
// type Obj = Record<string, unknown>
// type RV<T=any> = Record<string, T>
// type RK<K=any> = Record<K, any>
// type KeyOrIndex = string|number|keyof any
// type ValueOrArray<T> = T|T[]
// type ValueOrKeys<T> = T|T[]
// type ValueOrItems<T> = T | ValueOrArray<T extends Array<infer V> ? number|T[number] : T extends Record<string, any> ? keyof T|T[keyof T] : never>
// type ValueOrKey<T> = T | T extends Array<any> ? { key: number, value: T[number]}: T extends Record<string, any> ? {key: keyof T, value: T[keyof T] } : { key?: KeyOrIndex, value: T}
// type ValueOrEntry<T> = T | [KeyOrIndex, T]
// type ValueOrSource<T> = T | T extends Array<any> ? { key: number, value: T[number]} : T extends Record<string, any> ? {key: keyof T, value: T[keyof T]} : { key?: KeyOrIndex, value: T }
// type ValueOrSourceOrEntry<T> = T | [KeyOrIndex, T] | { value: T, key?: KeyOrIndex, desc?: string }
// type ValueOrKeyof<T> = T | keyof T 
// Record<string, T> | Array<T> | ((...p: any) => T)
// type Keys<T> = T extends Record<infer K, any> ? keyof T : T extends Array<any> ? number : Extract<T, string|number> 
// type Values<T> = T extends Record<string, infer V> ? V : T extends Array<infer V> ? V : T extends any ? T : any 
// type Entries<T> = T extends Array<any> ? [number, T[number]] : T extends Record<infer K, any> ? [K, T[K]] : [keyof T, T[keyof T] | T]
// type Any<T = unknown> = T extends unknown ? T : unknown
// type Key<T = string, Defaults extends string|number|keyof any = string> = T extends string|number ? T : T extends Array<infer Item> ? Key<Item, Defaults> : T extends Record<string, any> ? keyof T : T extends string|number|keyof any ? T : Defaults
// type Values<T = unknown> =  Unknown<T extends Array<infer V> ? V : T extends Record<string, infer V> ? V : T>
// type FlatArray<T> = T extends Array<infer Item> ? Item : T
// type FlatObject<T> = T extends Record<infer K extends Key, any> ? K : T
// type FlatObject<T> = T extends Record<string, infer V> ? V : T
// type FlatEntries<T> = T extends Record<infer K extends Key, any> ? { key: K, value: V } : [number, T[number]] : T extends AnyObject ? [keyof T, T[keyof T]] : { value: T}
// type FlatObjectValues<T> = T extends Record<infer K extends string, infer V> ? V extends AnyObject ?  FlatArray<V> : T
// type FlatObjectKeys<T> = T extends Record<infer K, infer V> ? T[K] extends] : T
// type FlatObjectEntries<T> = T extends Record<infer K, infer V> ? [K, V] : T
// type TEntry<T> = T extends Record<infer K extends string | number, any> ? [K, T[K]] : T
// type PropertyOrIndex = string | number
// type AnyArray = Array<any>
// type AnyObjectEmpty = { [key: Key]: never }
// type TSourceObject<T> = T extends Array<infer V> ?  { desc: 'Array', key: number, value: V } : T extends Record<infer K, infer V> ? { type: 'Record', key: K, value: V } : { desc: T extends never ? "Never" : T extends unknown ? 'Unknown' : "Any", key: keyof T, value: T }
// type TSourceEntry<T> = T extends Array<any> ? [number, T[number]] : T extends Record<string, unknown> ? [keyof T, T[keyof T]] : [keyof T, T]
// type TSourceRecord<T> = T extends Record<infer K, infer V> ? Record<K, V> : T extends Array<infer V> ? Record<number, V> : Record<T extends string |number|symbol ? T : string, any>
// type AnyObjectPlain = { [key: string]: unknown }
// type KeyValuePlain<T = any> = Record<string, T> | { [property: string]: T }
// type KeyOrIndex<T = any> = Record<string, T> | { [property: string]: T }
// type KeyValue<T = any> = Record<string|number, any> | { [key: string|number]: any }
// type AnyArray<T = any> = Array<T> | Record<number, T> | { [index: number]: T }
// type KeyValueSource = { value: any, key: string|number, desc?: string }
// type KeyValueEntry = [string|number, any]
// type AnyEntry = [string|number, any]
// type AnyObject<T = string> = T extends Array<any> ? { [index: number]: T[number] } : T extends Record<string, any> ? {[k in keyof T]: T[k] } : {[k:T extends string | number ? T : string] : any}
// type AnyRecord<T = string> = T extends Array<any> ? Record<number, T[number]> : T extends Record<string, any> ? Record<keyof T, T[keyof T]> :  Record<T extends string | number ? T : string, any>
// type AnyObject = {[k: string]:any}
// type AnySource = { key?: string|number, value: any, desc?: string }
// type AnyRecord<K extends string | number = string | number> = { [key: string]: unknown }
// type THas<K extends Key> = { [key in K]: unknown }
// type Entry<K extends string = string, V extends any = any> = [K, V]
// type EntriesArray = Array<Entry>
// type TFromEntries<T extends Entry> = T extends [infer K extends string, infer V] ? Record<K, V> : Record<never, never>

// type AnyRecord = Record<string | number, unknown>
// type Rec<K extends string | number | symbol = string, V = unknown> = Record<K, V>
// type Obj<K extends string | number | symbol = string, V = unknown> = K extends string | number | symbol
//   ? Record<K, V>
//   : K extends Record<string, unknown>
//   ? { [k in keyof K]: K[k] }
//   : { [k: string]: unknown }
