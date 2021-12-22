import { SVG_FILES } from './svg_files'
import { ValueColor } from './color.constants'
import { Value } from './music.constants'

//^ Aliases for defaults.
export type Any = any
export type Arr = Any[]
export type Obj = Record<S, U>
export type One = S | N | B

//^ Aliases for primitives.
export type U = unknown
export type V = void
export type B = boolean
export type S = string
export type N = number
export type A<T1 = Any> = T1 extends Arr ? [...T1] : T1[]
export type O<T1 = U, K1 = Any> = T1 extends Arr ? { [key in keyof K1]: ValueOf<T1> } : Obj
export type F<T1 = Any, T2 = T1, T3 = T2> = (...v: [T1, T2]) => T3
export type P<T1 = Any> = Promise<T1>

//^ Generic simple functions
export type ToArrayNonDist<T1> = [T1] extends [any] ? T1[] : never
export type If<T1, T2, T3, T4> = T1 extends T2 ? T3 : T4
export type StrValue<T1> = T1 extends S ? T1 : T1 extends N ? `${T1}` : never
export type StrLike<T1> = T1 | StrValue<T1> | StrCase<StrValue<T1>>
export type StrCase<T1 extends S> = T1 | Lowercase<T1> | Uppercase<T1> | Capitalize<T1> | Uncapitalize<T1>

//^ Aliases for useful.
export type Empty = null | undefined
export type OrMany<T1 = Any> = T1 | A<T1>
export type Valid<T1 = Any> = NonNullable<T1>
export type ResultNo = never | void | Empty
export type ValueOf<T1 = Any> = T1 extends Arr ? T1[N] : T1 extends One ? T1 : T1[keyof T1]
export type Flatten<T1> = T1 extends A<infer Item> ? Item : T1
export type ArrConst<T1 = U> = readonly T1[]
export type ArrayEl<T1> = T1 extends readonly (infer Item)[] ? Item : T1 extends Arr ? T1[N] : never

export type tOctave = '' | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8
export type tSvgFile = typeof Value.SVG_FILES[N]
export type tNoteB = typeof Value.NOTES_BASIC[N]
export type tNotePrimary = typeof Value.NOTES_PRIMARY[N]
export type tNoteSecondary = typeof Value.NOTES_ALT[N]
export type tNoteChar = typeof Value.NOTES[N]
export type tScale = typeof Value.SCALES[N]
export type tTuning = typeof Value.GUITAR_TUNINGS[keyof typeof Value.GUITAR_TUNINGS]
export type tSynth = `${typeof Value.SYNTHS[N]}`
export type tTuningName = typeof Value.TUNING_NAMES[N]
export type tDurationChar = typeof Value.DURATION_CHARS[N]
export type tDuration = typeof Value.DURATIONS[N]
export type tInterval = typeof Value.INTERVAL_CHARS[N]
export type tNote = StrLike<tNoteChar | `${tNoteChar}${tOctave}`>

export type tColorClassName = typeof ValueColor.style[N]
export type tColorName = typeof ValueColor.names[N]

export type tColorCode = typeof ValueColor.codes[N]
