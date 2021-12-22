import { NOTES, SCALES, COLOR_CLASSNAMES, COLOR_NAMES, COLOR_CODES, GUITAR_TUNINGS } from './constants'
//^ Aliases for defaults.
export type Any = any
export type Arr = any[]
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

//^ Aliases for useful.
export type Empty = null | undefined
export type OrMany<T1 = Any> = T1 | A<T1>
export type Valid<T1 = Any> = NonNullable<T1>
export type ResultNo = never | void | Empty
export type ValueOf<T1 = Any> = T1 extends Arr ? T1[N] : T1 extends One ? T1 : T1[keyof T1]
export type ArrConst<T1 = U> = readonly T1[]
export type ArrFlat<T1> = T1 extends (infer V1)[] ? V1 : T1
export type ArrayEl<T1 extends ArrConst> = T1 extends readonly (infer V1)[] ? V1 : never

//^ Generic simple functions
export type If<T1, T2, T3, T4> = T1 extends T2 ? T3 : T4
export type StrValue<T1> = T1 extends S ? T1 : T1 extends N ? `${T1}` : never
export type StrLike<T1> = T1 | StrValue<T1> | StrCase<StrValue<T1>>
export type StrCase<T1 extends S> = T1 | Lowercase<T1> | Uppercase<T1> | Capitalize<T1> | Uncapitalize<T1>

export type tOctaveNum = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8
export type tOctave = '' | StrCase<`${tOctaveNum}`>
export type tNoteBasic = StrCase<'A' | 'B' | 'C' | 'D' | 'F' | 'E' | 'G'>
export type tNoteA = StrCase<'A#' | 'C#' | 'E#' | 'F#' | 'G#'>
export type tNoteB = StrCase<'Bb' | 'Db' | 'Eb' | 'Fb' | 'Ab'>
export type tNoteOnly = `${tNoteBasic | tNoteA | tNoteB}`
export type tNote = `${tNoteOnly}${tOctave}`
export type tTuning = 'E Standart' | 'Drop D' | 'Drop C' | 'Drop B'
export type tInterval = StrCase<'P1' | 'M2' | 'M3' | 'P4' | 'P5' | 'M6' | 'M7'>
export type tDurationChar = '' | ',' | '.' | '@' | '+'
export type tDurationSize = '' | '2' | '4' | '8' | '16' | '32' | '64'
export type tDurationFormat = StrCase<'n' | 't' | 's' | 'm'>
export type tDuration = `${tDurationChar}${tDurationSize}${tDurationFormat}`
export type tSynth =
	| 'AMSynth'
	| 'FMSynth'
	| 'DuoSynth'
	| 'MembraneSynth'
	| 'MetalSynth'
	| 'MonoSynth'
	| 'NoiseSynth'
	| 'PluckSynth'
	| 'PolySynth'
	| 'Synth'

export type tScale =
	| 'major'
	| 'minor'
	| 'ionian'
	| 'dorian'
	| 'phrygian'
	| 'lydian'
	| 'mixolydian'
	| 'aeolian'
	| 'locrian'
	| 'majorpentatonic'
	| 'minorpentatonic'
	| 'chromatic'
	| 'harmonicchromatic'
	| 'blues'
	| 'doubleharmonic'
	| 'flamenco'
	| 'harmonicminor'
	| 'melodicminor'
	| 'wholetone'
