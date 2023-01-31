// ! =====> Constant Types <======

import {
  EColor,
  EGuitarFrets,
  EGuitarString,
  EGuitarTuningName,
  EInstrumentName,
  EMelodySize,
  EScale,
  ESynthName,
} from './enums'
import { IState } from './interfaces'

type Src = typeof CONSTANTS
type Key = keyof Src
type Data<K> = K extends Key ? Src[K] : Src[Key]
type Keys<K> = keyof Data<K>
type Values<K> = Data<K> extends any[] ? Data<K>[number] : Data<K>[keyof Data<K>]

// ! =====> Constant Values <======

export const INITIAL_STATE: IState = {
  word: '',
  words: [],
  color: EColor.HEX_LIME,
  content: [],
  strings: EGuitarString.DEFAULT,
  frets: EGuitarFrets.DEFAULT,
  tuning: EGuitarTuningName.DEFAULT,
  rootNote: 'C3',
  scale: EScale.MINORPENTATONIC,
  size: EMelodySize.DEFAULT,
  riff: [],
  synth: false,
  synthName: ESynthName.POLY,
  instrumentName: EInstrumentName.PIANO,
  isPlaying: false,
  valueOnPlay: {},
}

export const GUITAR_TUNINGS = {
  [EGuitarTuningName.E_STANDART]: ['E2', 'A2', 'D3', 'G3', 'B4', 'E4'],
  [EGuitarTuningName.DROP_D]: ['D2', 'A2', 'D3', 'G3', 'B4', 'E4'],
  [EGuitarTuningName.DROP_C]: ['C2', 'G2', 'C3', 'F3', 'A4', 'D4'],
  [EGuitarTuningName.DROP_B]: ['B2', 'F#2', 'B3', 'E3', 'G#3', 'C#4'],
}

//! Constant Values for using in generate values, validate, etc...
export const NOTES = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'F', 'E', 'E#', 'G', 'G#']
export const SCALES = [
  'major',
  'minor',
  'ionian',
  'dorian',
  'phrygian',
  'lydian',
  'mixolydian',
  'aeolian',
  'locrian',
  'majorpentatonic',
  'minorpentatonic',
  'chromatic',
  'harmonicchromatic',
  'blues',
  'doubleharmonic',
  'flamenco',
  'harmonicminor',
  'melodicminor',
  'wholetone',
]
export const COLOR_CLASSNAMES = [
  'primary',
  'secondary',
  'success',
  'danger',
  'warning',
  'info',
  'light',
  'dark',
  'body',
  'white',
  'transparent',
]
export const COLOR_NAMES = ['blue', 'indigo', 'purple', 'pink', 'red', 'orange', 'yellow', 'green', 'teal', 'cyan']
export const COLOR_CODES = [
  '#ff0000',
  '#ff4e00',
  '#db7b00',
  '#ffcc00',
  '#e4ed00',
  '#81d700',
  '#00ffb4',
  '#00ffea',
  '#00baff',
  '#3c00ff',
  '#a800ff',
  '#ff00fd',
]
export const SYNTHS = [
  'AMSynth',
  'FMSynth',
  'DuoSynth',
  'MembraneSynth',
  'MetalSynth',
  'MonoSynth',
  'NoiseSynth',
  'PluckSynth',
  'PolySynth',
  'Synth',
]
export const DURATION_CHARS = ['n']
export const DURATIONS = ['4n', '@4n', '.4n', '8n']
export const INTERVAL_CHARS = ['P1', 'M2', 'M3', 'P4', 'P5', 'M6', 'M7']

// ! =====> Dictionaries for types <======
const CONSTANTS = {
  INITIAL_STATE,
  GUITAR_TUNINGS,
  NOTES,
  SCALES,
  COLOR_CLASSNAMES,
  COLOR_NAMES,
  COLOR_CODES,
  SYNTHS,
  DURATION_CHARS,
  DURATIONS,
  INTERVAL_CHARS,
} as const

// ! =====> Keys and Values <======
export const KEYS_INITIAL_STATE = Object.keys(INITIAL_STATE) as [Keys<'INITIAL_STATE'>]
export const KEYS_GUITAR_TUNINGS = Object.keys(GUITAR_TUNINGS) as [Keys<'GUITAR_TUNINGS'>]

export const VALUES_INITIAL_STATE = Object.values(INITIAL_STATE) as [Values<'INITIAL_STATE'>]
export const VALUES_GUITAR_TUNINGS = Object.values(GUITAR_TUNINGS) as [Values<'GUITAR_TUNINGS'>]

// ! =====> Utils <======
export const isInitialStateKey = (v?: any): v is Keys<'INITIAL_STATE'> => KEYS_INITIAL_STATE.includes(v)
export const isGuitarTuningsKey = (v?: any): v is Keys<'GUITAR_TUNINGS'> => KEYS_GUITAR_TUNINGS.includes(v)

export const isInitialStateValue = (v?: any): v is Values<'INITIAL_STATE'> => VALUES_INITIAL_STATE.includes(v)
export const isGuitarTuningsValue = (v?: any): v is Values<'GUITAR_TUNINGS'> => VALUES_GUITAR_TUNINGS.includes(v)

export const isNote = (v?: any): v is Values<'NOTES'> => NOTES.includes(v)
export const isScale = (v?: any): v is Values<'SCALES'> => SCALES.includes(v)
export const isColorClass = (v?: any): v is Values<'COLOR_CLASSNAMES'> => COLOR_CLASSNAMES.includes(v)
export const isColorName = (v?: any): v is Values<'COLOR_NAMES'> => COLOR_NAMES.includes(v)
export const isColorCode = (v?: any): v is Values<'COLOR_CODES'> => COLOR_CODES.includes(v)
export const isSynth = (v?: any): v is Values<'SYNTHS'> => SYNTHS.includes(v)
export const isDurationChar = (v?: any): v is Values<'DURATION_CHARS'> => DURATION_CHARS.includes(v)
export const isDuration = (v?: any): v is Values<'DURATIONS'> => DURATIONS.includes(v)
export const isIntervalChar = (v?: any): v is Values<'INTERVAL_CHARS'> => INTERVAL_CHARS.includes(v)
