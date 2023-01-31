import {
  EColor,
  EGuitarFrets,
  EGuitarString,
  EGuitarTuningName,
  EInstrumentName,
  EMelodySize,
  EScale,
  ESynthName,
} from './enums';

export const INITIAL_STATE = {
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
} as const;

export const GUITAR_TUNINGS = {
  [EGuitarTuningName.E_STANDART]: ['E2', 'A2', 'D3', 'G3', 'B4', 'E4'],
  [EGuitarTuningName.DROP_D]: ['D2', 'A2', 'D3', 'G3', 'B4', 'E4'],
  [EGuitarTuningName.DROP_C]: ['C2', 'G2', 'C3', 'F3', 'A4', 'D4'],
  [EGuitarTuningName.DROP_B]: ['B2', 'F#2', 'B3', 'E3', 'G#3', 'C#4'],
} as const;

export const TUNING_NAMES = [...Object.keys(GUITAR_TUNINGS)] as const;

export const NOTES = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'F', 'E', 'E#', 'G', 'G#'] as const;

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
] as const;

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
] as const;

export const COLOR_NAMES = [
  'blue',
  'indigo',
  'purple',
  'pink',
  'red',
  'orange',
  'yellow',
  'green',
  'teal',
  'cyan',
] as const;

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
] as const;

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
] as const;

export const DURATION_CHARS = ['n'] as const;

export const DURATIONS = ['4n', '@4n', '.4n', '8n'] as const;

export const INTERVAL_CHARS = ['P1', 'M2', 'M3', 'P4', 'P5', 'M6', 'M7'] as const;
