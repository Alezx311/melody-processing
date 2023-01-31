
import { EInstrumentName } from './interfaces'

export const NOTE_FILENAMES: string[] = [
  'As2',
  'As3',
  'As4',
  'As5',
  'Cs2',
  'Cs3',
  'Cs4',
  'Cs5',
  'E2',
  'E3',
  'E4',
  'E5',
  'G2',
  'G3',
  'G4',
  'G5',
  'A3',
  'C2',
  'C3',
  'C4',
  'G1',
  'A1',
  'A2',
  'F2',
  'F3',
  'F4',
  'Fs3',
  'Fs4',
  'Gs2',
  'Gs3',
  'Gs4',
  'A4',
  'B2',
  'B3',
  'B4',
  'C5',
  'D2',
  'D3',
  'D4',
  'Ds2',
  'Ds3',
  'Ds4',
  'D5',
  'Fs5',
  'C1',
  'D1',
  'E1',
  'Fs0',
  'Fs1',
  'G0',
  'Gs1',
  'As0',
  'A5',
  'C6',
  'Ds1',
  'A0',
  'Fs2',
  'As1',
  'B1',
  'F1',
  'Gs5',
  'D6',
  'D7',
  'F6',
  'F7',
  'A6',
  'B5',
  'B6',
  'Ds5',
  'As6',
  'B0',
  'C0',
  'C7',
  'Cs0',
  'Cs1',
  'Cs6',
  'D0',
  'Ds0',
  'Ds6',
  'E0',
  'E6',
  'F0',
  'F5',
  'Fs6',
  'G6',
  'Gs0',
  'Gs6',
]

const toInitialObject = (keys: string[], value: any = null) => keys.reduce((acc, p) => ({ ...acc, [p]: value }), {})
const optionsObject: { description: string, default: any, hidden: string[] } = { description: 'Unknown description', default: null, hidden: [] }


class TypeOf {
  static values = Object.values(ETypeOf)
  static is(v?: any): v is ETypeOf {
    return this.values.includes(v)
  }
}
class TypeDesc {
  static values = Object.values(ETypeDesc)
  static is(v?: any): v is ETypeDesc {
    return this.values.includes(v)
  }
}

const isPrimitiveTypeDesc = (tp?: any): tp is ETypeDesc => Object.values({...ETypeDesc}).includes(tp)
const toPrimitiveTypeDesc = (tp?: any): ETypeDesc => isPrimitiveTypeDesc(tp) ? tp : ETypeDesc.default


const toTypeKey = v => {
  switch(true) {
    case Object.values({...ETypeDesc}).includes(v): return v
    case Object.keys({...ETypeDesc}).includes(v): return ETypeDesc?.[v] ?? ETypeDesc.DEFAULT
    case Array.isArray(v): return ETypeDesc.ARRAY;
    case typeof v === 'object': return ETypeDesc.OBJECT;
    case typeof v === 'string': return ETypeDesc.STRING;
    case typeof v === 'number': return ETypeDesc.NUMBER;
    case typeof v === 'undefined': return ETypeDesc.UNDEFINED;
    case typeof v === 'boolean': return ETypeDesc.BOOLEAN;
    case typeof v === null: return ETypeDesc.NULL;
    default: return ETypeDesc.DEFAULT;
  }
}

const Primitives = {
  [ETypeDesc.STRING]: { key: ETypeDesc.STRING, default: '' },
  [ETypeDesc.NUMBER]: { key: ETypeDesc.NUMBER, default: 0 },
  [ETypeDesc.OBJECT]: { key: ETypeDesc.OBJECT, default: {} },
  [ETypeDesc.ARRAY]: { key: ETypeDesc.ARRAY, default: [] },
  [ETypeDesc.UNDEFINED]: { key: ETypeDesc.UNDEFINED, default: undefined },
  [ETypeDesc.BOOLEAN]: { key: ETypeDesc.BOOLEAN, default: false },
  [ETypeDesc.NULL]: { key: ETypeDesc.NULL, default: null },
  [ETypeDesc.DEFAULT]: { key: ETypeDesc.DEFAULT, default: null },
} as const
type TTypeKey<T> = TTypeDesc<T> extends ETypeDesc ? typeof Primitives[TTypeDesc<T>]['key'] : typeof Primitives[ETypeDesc.DEFAULT]['key']
type TTypeDefault<T> = TTypeDesc<T> extends ETypeDesc ? typeof Primitives[TTypeDesc<T>]['key'] : typeof Primitives[ETypeDesc.DEFAULT]['key']

const DictPrimitiveEmpty = {
  [ETypeDesc.STRING]: '' as Readonly<''>,
  [ETypeDesc.NUMBER]: 0 as Readonly<0>,
  [ETypeDesc.OBJECT]: {} as Readonly<{}>,
  [ETypeDesc.ARRAY]: [] as Readonly<[]>,
  [ETypeDesc.UNDEFINED]: undefined as Readonly<undefined>,
  [ETypeDesc.NULL]: null as Readonly<null>,
  [ETypeDesc.DEFAULT]: null as Readonly<null>,
} as const

type Type<T = any> = T extends string | number | boolean | any[] | {[k: string]: unknown} ? T : any
type TValueOrDefault<T, Default = null> = T extends string | number | boolean | any[] | {[k: string]: unknown} ? T : Default
type TAnyReadonly =  Readonly<any> | ReadonlyArray<any>
type TAnyReadonlyArray = ReadonlyArray<any>
type ObjKeys<T extends object> = T extends Readonly<{[k: string]: unknown}> ? keyof T :keyof (Readonly<T>)
type TAnyEmpty = typeof DictPrimitiveEmpty[keyof typeof DictPrimitiveEmpty]
type TAnySimple = null|string|number|boolean
type TAnyArray = [any]|any[]|Array<any>
type TAnyObject = object | Record<string, unknown> | { [key: string]: unknown}
type TAnyData = TAnySimple|TAnyArray|TAnyObject
type TAnyFalsy = Extract<TAnyData, TAnyEmpty>
type TAnyTruthy = Exclude<TAnyData, TAnyFalsy> | NonNullable<TAnyData>

type TObjectKey<T> = T extends string|keyof any ? T : T extends string[] ? T[number] : string
type TObjectValue<T> = T extends TAnyTruthy ? T : T | unknown
type TEmpty<T = any> = T extends TAnyEmpty ? T : T extends string ? '' : T extends number ? 0 : T extends any[] ? [] : T extends object ? typeof {} : TAnyEmpty
type TSimple<T = any> = T extends TAnySimple ? T : TAnySimple
type TArray<T = any> = T extends TAnyArray ? [...T] : T[]
type TObject<T = any> = T extends TAnyObject ? T : {[k: TObjectKey<T>]: unknown | T }
type TFalsy<T = any> = T extends TAnyFalsy ? T : Extract<T, TAnyFalsy>
type TTruthy<T = any> = T extends TAnyTruthy ? T : Exclude<T, TAnyTruthy>
type TAnyArray<T = any> = (T extends any[] ? [...T] : [T]) | T[]|Array<T>
type TAnyObject<K = string, V = unknown> = K extends string ? {} | object | Record<K, V> : Record<TAnyObjectKey<K>, TAnyObjectValue<V>> | { [key: TAnyObjectKey<K>]:TAnyObjectValue<V>}
type TValueSimple = string | number | boolean | null
type TValue = TValueSimple | any[] | object
type TFalsy = TAnyEmpty | false | { length?: TAnyEmpty } | { [k: TAnyEmpty]: TAnyEmpty }
type N<T = any> = T extends TFalsy ? 0 : T extends number ? T : number
type S<T = any> = T extends TFalsy ? '' : T extends string ? T : T extends number | boolean ? `${T}` : string
type A<T = any> = T extends any[] ? [...T] | T[] : T[] | Array<T>
type Key<K = string> = K extends string[] ? K[number] : K extends string ? K : keyof K
// type O<K = string, V = unknown> = K extends string[]|keyof any ? K extends string[] ? {[k: K[number]]: V} : K extends keyof any ? { [k in K]: V } : {[k: string]: V} | object | Record<string, unknown> | { [key: string]: unknown }
type O<K = string, V = unknown> = K extends string[]|keyof any & V extends TValueSimple object | Record<Key<K>, V> | { [key in Key<K>]: V }

type TValueArray<T extends TValueSimple> = TValueSimple[]
type TValueObject<
  K extends string | string[] | keyof any = string,
  V extends TValueSimple | unknown = unknown,
> = K extends string[] ? { [k in K[number]]: V } : K extends keyof any ? { [k in K]: V } : { [k: string]: V }
type TTypeDesc<T> = T extends number
  ? 'number'
  : T extends string
  ? 'string'
  : T extends boolean
  ? 'boolean'
  : T extends null
  ? 'null'
  : T extends undefined
  ? 'undefined'
  : T extends any[]
  ? 'array'
  : T extends object
  ? 'object'
  : 'unknown'
type TStringable<T> = T extends number | boolean | null ? `${T}` : T extends string ? T : string
type TArrayable<T extends TValueSimple> = T | T[]
type TStringCase<T extends string> = T | Lowercase<T> | Uppercase<T> | Capitalize<T> | Uncapitalize<T>
type NoteOctave = TStringable<'1' | '2' | '3' | '4' | '5' | '6' | '7' | '8'>
type NoteChars = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'b' | '#' | 's'
type NoteFileName = `${TNote}[mp3|ogg|wav]`
export const notesToFiles = (noteNames: string[]) =>
  noteNames.filter((n) => NOTE_FILENAMES.includes(n)).map((n) => `${n}[mp3|ogg|wav]`)

export const intrumentNotesByName = (instrument: EInstrumentName) => {
  switch (instrument) {
    case EInstrumentName.BASS_ELECTRIC:
      return notesToFiles([
        'As2',
        'As3',
        'As4',
        'As5',
        'Cs2',
        'Cs3',
        'Cs4',
        'Cs5',
        'E2',
        'E3',
        'E4',
        'E5',
        'G2',
        'G3',
        'G4',
        'G5',
      ])
    case EInstrumentName.BASSOON:
      return notesToFiles(['A3', 'C2', 'C3', 'C4', 'E3', 'G1', 'G2', 'G3', 'A1', 'A2'])
    case EInstrumentName.CELLO:
      return notesToFiles([
        'E3',
        'E4',
        'F2',
        'F3',
        'F4',
        'Fs3',
        'Fs4',
        'G2',
        'G3',
        'G4',
        'Gs2',
        'Gs3',
        'Gs4',
        'A2',
        'A3',
        'A4',
        'As2',
        'As3',
        'As4',
        'B2',
        'B3',
        'B4',
        'C2',
        'C3',
        'C4',
        'C5',
        'Cs3',
        'Cs4',
        'D2',
        'D3',
        'D4',
        'Ds2',
        'Ds3',
        'Ds4',
        'E2',
      ])
    case EInstrumentName.CLARINET:
      return notesToFiles(['D3', 'D4', 'D5', 'F2', 'F3', 'F4', 'Fs5', 'As2', 'As3', 'As4', 'D2'])
    case EInstrumentName.CONTRABASS:
      return notesToFiles(['C1', 'Cs2', 'D1', 'E1', 'E2', 'Fs0', 'Fs1', 'G0', 'Gs1', 'Gs2', 'A1', 'As0', 'B2'])
    case EInstrumentName.FLUTE:
      return notesToFiles(['A5', 'C3', 'C4', 'C5', 'C6', 'E3', 'E4', 'E5', 'A3', 'A4'])
    case EInstrumentName.FRENCH_HORN:
      return notesToFiles(['D2', 'D4', 'Ds1', 'F2', 'F4', 'G1', 'A0', 'A2', 'C1', 'C3'])
    case EInstrumentName.GUITAR_ACOUSTIC:
      return notesToFiles([
        'F3',
        'Fs1',
        'Fs2',
        'Fs3',
        'G1',
        'G2',
        'G3',
        'Gs1',
        'Gs2',
        'Gs3',
        'A1',
        'A2',
        'A3',
        'As1',
        'As2',
        'As3',
        'B1',
        'B2',
        'B3',
        'C2',
        'C3',
        'C4',
        'Cs2',
        'Cs3',
        'Cs4',
        'D1',
        'D2',
        'D3',
        'D4',
        'Ds1',
        'Ds2',
        'Ds3',
        'E1',
        'E2',
        'E3',
        'F1',
        'F2',
      ])
    case EInstrumentName.GUITAR_ELECTRIC:
      return notesToFiles([
        'Ds3',
        'Ds4',
        'Ds5',
        'E2',
        'Fs2',
        'Fs3',
        'Fs4',
        'Fs5',
        'A2',
        'A3',
        'A4',
        'A5',
        'C3',
        'C4',
        'C5',
        'C6',
        'Cs2',
      ])
    case EInstrumentName.GUITAR_NYLON:
      return notesToFiles([
        'Fs2',
        'Fs3',
        'Fs4',
        'Fs5',
        'G3',
        'G3',
        'Gs2',
        'Gs4',
        'Gs5',
        'A2',
        'A3',
        'A4',
        'A5',
        'As5',
        'B1',
        'B2',
        'B3',
        'B4',
        'Cs3',
        'Cs4',
        'Cs5',
        'D2',
        'D3',
        'D5',
        'Ds4',
        'E2',
        'E3',
        'E4',
        'E5',
      ])
    case EInstrumentName.HARMONIUM:
      return notesToFiles([
        'C2',
        'C3',
        'C4',
        'C5',
        'Cs2',
        'Cs3',
        'Cs4',
        'Cs5',
        'D2',
        'D3',
        'D4',
        'D5',
        'Ds2',
        'Ds3',
        'Ds4',
        'E2',
        'E3',
        'E4',
        'F2',
        'F3',
        'F4',
        'Fs2',
        'Fs3',
        'G2',
        'G3',
        'G4',
        'Gs2',
        'Gs3',
        'Gs4',
        'A2',
        'A3',
        'A4',
        'As2',
        'As3',
        'As4',
      ])
    case EInstrumentName.HARP:
      return notesToFiles([
        'C5',
        'D2',
        'D4',
        'D6',
        'D7',
        'E1',
        'E3',
        'E5',
        'F2',
        'F4',
        'F6',
        'F7',
        'G1',
        'G3',
        'G5',
        'A2',
        'A4',
        'A6',
        'B1',
        'B3',
        'B5',
        'B6',
        'C3',
      ])
    case EInstrumentName.ORGAN:
      return notesToFiles([
        'C3',
        'C4',
        'C5',
        'C6',
        'Ds1',
        'Ds2',
        'Ds3',
        'Ds4',
        'Ds5',
        'Fs1',
        'Fs2',
        'Fs3',
        'Fs4',
        'Fs5',
        'A1',
        'A2',
        'A3',
        'A4',
        'A5',
        'C1',
        'C2',
      ])
    case EInstrumentName.PIANO:
      return notesToFiles([
        'A0',
        'A1',
        'A2',
        'A3',
        'A4',
        'A5',
        'A6',
        'As0',
        'As1',
        'As2',
        'As3',
        'As4',
        'As5',
        'As6',
        'B0',
        'B1',
        'B2',
        'B3',
        'B4',
        'B5',
        'B6',
        'C0',
        'C1',
        'C2',
        'C3',
        'C4',
        'C5',
        'C6',
        'C7',
        'Cs0',
        'Cs1',
        'Cs2',
        'Cs3',
        'Cs4',
        'Cs5',
        'Cs6',
        'D0',
        'D1',
        'D2',
        'D3',
        'D4',
        'D5',
        'D6',
        'Ds0',
        'Ds1',
        'Ds2',
        'Ds3',
        'Ds4',
        'Ds5',
        'Ds6',
        'E0',
        'E1',
        'E2',
        'E3',
        'E4',
        'E5',
        'E6',
        'F0',
        'F1',
        'F2',
        'F3',
        'F4',
        'F5',
        'F6',
        'Fs0',
        'Fs1',
        'Fs2',
        'Fs3',
        'Fs4',
        'Fs5',
        'Fs6',
        'G0',
        'G1',
        'G2',
        'G3',
        'G4',
        'G5',
        'G6',
        'Gs0',
        'Gs1',
        'Gs2',
        'Gs3',
        'Gs4',
        'Gs5',
        'Gs6',
      ])
    case EInstrumentName.SAXOPHONE:
      return notesToFiles([
        'Ds4',
        'E2',
        'E3',
        'E4',
        'F2',
        'F3',
        'F4',
        'Fs2',
        'Fs3',
        'Fs4',
        'G2',
        'G3',
        'G4',
        'Gs2',
        'Gs3',
        'Gs4',
        'A3',
        'A4',
        'As2',
        'As3',
        'B2',
        'B3',
        'C3',
        'C4',
        'Cs2',
        'Cs3',
        'Cs4',
        'D2',
        'D3',
        'D4',
        'Ds2',
        'Ds3',
      ])
    case EInstrumentName.TROMBONE:
      return notesToFiles([
        'As2',
        'C2',
        'C3',
        'Cs1',
        'Cs3',
        'D2',
        'D3',
        'Ds1',
        'Ds2',
        'Ds3',
        'F1',
        'F2',
        'F3',
        'Gs1',
        'Gs2',
        'As0',
        'As1',
      ])
    case EInstrumentName.TRUMPET:
      return notesToFiles(['C5', 'D4', 'Ds3', 'F2', 'F3', 'F4', 'G3', 'A2', 'A4', 'As3', 'C3'])
    case EInstrumentName.TUBA:
      return notesToFiles(['As1', 'As2', 'D2', 'D3', 'Ds1', 'F0', 'F1', 'F2', 'As0'])
    case EInstrumentName.VIOLIN:
      return notesToFiles(['A3', 'A4', 'A5', 'A6', 'C4', 'C5', 'C6', 'C7', 'E4', 'E5', 'E6', 'G4', 'G5', 'G6'])
    case EInstrumentName.XYLOPHONE:
      return notesToFiles(['C7', 'G3', 'G4', 'G5', 'G6', 'C4', 'C5', 'C6'])
    default:
      return []
  }
}
