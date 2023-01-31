import * as CONSTANTS from './constants'
import { EOctave } from './enums'

export type TNoteChar =
  | 'A'
  | 'A#'
  | 'Ab'
  | 'B'
  | 'C'
  | 'C#'
  | 'Cb'
  | 'D'
  | 'D#'
  | 'Db'
  | 'F'
  | 'E'
  | 'E#'
  | 'Eb'
  | 'G'
  | 'G#'
  | 'Gb'

// export type TNote = `${TNoteChar}${string | number | ''}`
export type TNoteHalfTone = '#' | 'b'
export type TNoteWithOctave = `${TNote}${EOctave}`

export type TConstantsSource = typeof CONSTANTS
export type KConstantsSource = keyof TConstantsSource
export type TConstantsData<K extends KConstantsSource = KConstantsSource> = K extends KConstantsSource
  ? TConstantsSource[K]
  : TConstantsSource[KConstantsSource]
export type KConstantsData<K extends KConstantsSource = KConstantsSource> = keyof TConstantsData<K>
export type VConstantsData<K extends KConstantsSource = KConstantsSource> = TConstantsData<K> extends ReadonlyArray<any>
  ? TConstantsData<K>[number]
  : TConstantsData<K>[keyof TConstantsData<K>]

export type TInitialState = VConstantsData<'INITIAL_STATE'>
export type TGuitarTuning = VConstantsData<'GUITAR_TUNINGS'>
export type TNote = (VConstantsData<'NOTES'> & EOctave) | ''
export type TScale = VConstantsData<'SCALES'>
export type TColorClassname = VConstantsData<'COLOR_CLASSNAMES'>
export type TColorName = VConstantsData<'COLOR_NAMES'>
export type TColorCode = VConstantsData<'COLOR_CODES'>
export type TSynth = VConstantsData<'SYNTHS'>
export type TDurationChar = VConstantsData<'DURATION_CHARS'>
export type TDuration = VConstantsData<'DURATIONS'>
export type TIntervalChar = VConstantsData<'INTERVAL_CHARS'>
