import { Defaults } from './constants'
import { INSTRUMENT_SAMPLES } from './samples'

import Tone, { PolySynthOptions } from 'tone'
const {
	state,
	BLISS_FILES,
	COLOR_CLASS,
	COLOR_NAMES,
	COLOR_CODES,
	MUSIC_NOTES_BASIC,
	MUSIC_NOTES_PRIMARY,
	MUSIC_NOTES_ALT,
	MUSIC_GUITAR_TUNINGS,
	MUSIC_DURATIONS,
	MUSIC_INTERVAL_CHARS,
	MUSIC_NOTES,
	MUSIC_SCALES,
	MUSIC_DURATION_CHARS,
} = Defaults

//^ Aliases for
export type Obj = Record<S, U>
export type One = S | N | B

//^ Aliases for primitives.
export type UND = undefined
export type tNo = null | undefined
export type tA = Array<any>
export type tP = Promise<any>
export type E = Error
export type U = unknown
export type V = void
export type B = boolean
export type S = string
export type N = number
export type A<T1 = any> = T1 extends Array<any> ? [T1] : Array<T1>
export type O<T1 = U, K1 = any> = { [key in keyof K1]: T1 }
export type F<T1 = tNo, T2 = any> = T1 extends tNo ? (v?: any) => any : (...v: T1 extends tA ? T1 : T1[]) => T2
export type P<T1 = any> = Promise<T1>
export type tValue = B | S | N | A | O

export type tSym = typeof Symbol
export type tBig = typeof BigInt
export type tErr = typeof Error
export type tReg = typeof RegExp
export type tFun = typeof Function
export type tStr = typeof String
export type tNum = typeof Number
export type tObj = typeof Object
export type tArr = typeof Array
export type tPro = typeof Promise
export type tType = tSym | tBig | tErr | tReg | tFun | tStr | tNum | tObj | tArr | tPro

// export type F<T1 = UND, T2 = any> = T1 extends A ? FArgMany<T1, T2> : FArgOne<T1, T2>

//^ Generic simple functions
export type ToArrayNonDist<T1> = [T1] extends [any] ? T1[] : never
export type If<T1, T2, T3, T4> = T1 extends T2 ? T3 : T4
export type StrValue<T1> = T1 extends S ? T1 : T1 extends N ? `${T1}` : never
export type StrLike<T1> = T1 | StrValue<T1> | StrCase<StrValue<T1>>
export type StrCase<T1 extends S> = T1 | Lowercase<T1> | Uppercase<T1> | Capitalize<T1> | Uncapitalize<T1>

//^ Aliases for useful.
export type Empty = null | undefined
export type Args<T1 = any> = T1 extends tA ? [...T1] : [T1]
export type ArgRequired<T1 = any> = NonNullable<T1>
export type ArgOptional<T1 = any> = T1 | undefined
export type OrMany<T1 = any> = T1 | A<T1>
export type Valid<T1 = any> = NonNullable<T1>
export type ResultNo = never | void | Empty
export type ValueOf<T1 = any> = T1 extends A ? T1[N] : T1 extends One ? T1 : T1[keyof T1]
export type Flatten<T1> = T1 extends A<infer Item> ? Item : T1
export type ArrConst<T1 = U> = readonly T1[]
export type ArrayEl<T1> = T1 extends readonly (infer Item)[] ? Item : T1 extends A ? T1[N] : never

export type tMelodyPartSize = 3 | 4 | 5 | 6 | 7 | 8 | 12
export type tMelodySize = N | 20 | 40 | 50 | 80 | 100 | 200
export type tGuitarStrings = 4 | 6 | 7 | 8
export type tGuitarFrets = 21 | 24 | 27
export type tOctave = '' | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8

export type tState = typeof state

export type tTone = typeof Tone
export type tToneKeys = keyof tTone
// export type tSynth<T1 extends tSynthName = 'Synth'> = tTone[T1]
export type tSynthPlayer<T1 extends tToneKeys & tSynthName> = tTone[T1]
export type tInstrument = Pick<tTone, 'Sampler'>

export type tInstrumentSource = typeof INSTRUMENT_SAMPLES
export type tInstrumentKey = keyof tInstrumentSource
export type tInstrumentValue = tInstrumentSource[tInstrumentKey][N]
export type tInstrumentName = tInstrumentKey

export type tBlissFile = typeof BLISS_FILES[N]
export type tBlissWord = StrLike<tBlissFile>
export type tBlissPath = StrLike<tBlissFile>
export type tBlissIcon = StrLike<tBlissFile>
export type tColorClass = typeof COLOR_CLASS[N]
export type tColorNames = typeof COLOR_NAMES[N]
export type tColorCodes = typeof COLOR_CODES[N]
export type tColor = tColorNames | tColorCodes

export type tNoteB = typeof MUSIC_NOTES_BASIC[N]
export type tNotePrimary = typeof MUSIC_NOTES_PRIMARY[N]
export type tNoteSecondary = typeof MUSIC_NOTES_ALT[N]
export type tTuning = typeof MUSIC_GUITAR_TUNINGS[tTuningName]

export type tDurationValue = 2 | 4 | 8 | 16 | 32 | 64
export type tDuration = typeof MUSIC_DURATIONS[N] | StrLike<`${'' | tDurationValue}${tDurationChar}`>
export type tInterval = typeof MUSIC_INTERVAL_CHARS[N]
export type tNoteValues = {
	note: tNote
	char: tNoteChar
	octave: tOctave
	velocity?: N
	duration?: tDuration
}

export type tNoteChar = typeof MUSIC_NOTES[N]
export type tNote = StrLike<tNoteChar | `${tNoteChar}${tOctave}`>
export type tScaleName = typeof MUSIC_SCALES[N]
export type tTuningName = 'E Standart' | 'Drop D' | 'Drop C' | 'Drop B'
export type tDurationChar = typeof MUSIC_DURATION_CHARS[N]
export type tSynthName =
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

export type tSynth = Tone.Synth | Tone.Sampler
