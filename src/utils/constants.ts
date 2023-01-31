import { IState } from './interfaces';

// ! =====> Readonly Arrays of values, for generate element types <=====
const A_TYPEOF = ['string', 'number', 'boolean', 'object', 'symbol', 'bigint', 'undefined'] as const;
const A_TYPEDESC = [
  'null',
  'string',
  'number',
  'boolean',
  'object',
  'symbol',
  'bigint',
  'array',
  'undefined',
  'unknown',
  'any',
  'never',
] as const;
const A_OCTAVES = [1, 2, 3, 4, 6, 7, 8] as const;
const A_GUITAR_STRINGS = [6, 4, 5, 6, 7, 8] as const;
const A_GUITAR_FRETS = [24, 21, 24, 27] as const;
const A_MELODY_SIZES = [100, 200, 300, 400, 500] as const;
const A_NOTE_CHARS = [
  'A',
  'B',
  'C',
  'D',
  'F',
  'E',
  'G',
  'Bb',
  'Cb',
  'Db',
  'Eb',
  'Gb',
  'A#',
  'C#',
  'D#',
  'E#',
  'G#',
] as const;

const A_NOTES = [
  ...A_NOTE_CHARS.map((n: TNoteChar) => OCTAVES.map((o: TOctave) => `${n}${o}` as TNote)).flat(),
] as const;
const A_SCALES = [
  'minorpentatonic',
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
  'chromatic',
  'harmonicchromatic',
  'blues',
  'doubleharmonic',
  'flamenco',
  'harmonicminor',
  'melodicminor',
  'wholetone',
] as const;
const A_COLORS = [
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
  // ? Name
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
  // ? HEX
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
const A_SYNTH_NAMES = [
  'PolySynth',
  'AMSynth',
  'FMSynth',
  'DuoSynth',
  'MembraneSynth',
  'MetalSynth',
  'MonoSynth',
  'NoiseSynth',
  'PluckSynth',
  'Synth',
  'Synth',
] as const;
const A_INSTRUMENT_NAMES = [
  'piano',
  'bass-electric',
  'bassoon',
  'cello',
  'clarinet',
  'contrabass',
  'flute',
  'french-horn',
  'guitar-acoustic',
  'guitar-electric',
  'guitar-nylon',
  'harmonium',
  'harp',
  'organ',
  'saxophone',
  'trombone',
  'trumpet',
  'tuba',
  'violin',
  'xylophone',
] as const;
const A_TUNING_NAMES = ['E Standart', 'Drop B', 'Drop C', 'Drop D'] as const;
const A_COLOR_CLASSNAMES = [
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
const A_COLOR_NAMES = ['blue', 'indigo', 'purple', 'pink', 'red', 'orange', 'yellow', 'green', 'teal', 'cyan'] as const;
const A_COLOR_CODES = [
  '#81d700',
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
const A_DURATION_CHARS = ['n', '+', '.', '@'] as const;
const A_DURATIONS = ['4n', '@4n', '.4n', '8n'] as const;
const A_INTERVAL_CHARS = ['P1', 'M2', 'M3', 'P4', 'P5', 'M6', 'M7'] as const;

// ! =====> Types and generics <=====

export type TTypeOf = (typeof A_TYPEOF)[number];
export type TTypeDesc = (typeof A_TYPEDESC)[number];
export type TNoteChar = (typeof A_NOTE_CHARS)[number];
export type TNote = `${TNoteChar}${TOctave}`;
export type TScale = (typeof A_SCALES)[number];
export type TColor = (typeof A_COLORS)[number];
export type TSynthName = (typeof A_SYNTH_NAMES)[number];
export type TInstrumentName = (typeof A_INSTRUMENT_NAMES)[number];
export type TOctave = (typeof A_OCTAVES)[number];
export type TGuitarString = (typeof A_GUITAR_STRINGS)[number];
export type TGuitarFrets = (typeof A_GUITAR_FRETS)[number];
export type TMelodySize = (typeof A_MELODY_SIZES)[number];
export type TTuningName = (typeof A_TUNING_NAMES)[number];
export type TColorClassname = (typeof A_COLOR_CLASSNAMES)[number];
export type TColorName = (typeof A_COLOR_NAMES)[number];
export type TColorCode = (typeof A_COLOR_CODES)[number];
export type TDurationChar = (typeof A_DURATION_CHARS)[number];
export type TDuration = (typeof A_DURATIONS)[number];
export type TIntervalChar = (typeof A_INTERVAL_CHARS)[number];

export type TGuitarTuning = typeof GUITAR_TUNINGS;

export type KInitialState = keyof IState;
export type KGuitarTuning = keyof TGuitarTuning;

export type VInitialState<K extends KInitialState = KInitialState> = IState[K];
export type VGuitarTuning<K extends KGuitarTuning = KGuitarTuning> = TGuitarTuning[K];

export type TDefaults = typeof DEFAULTS;
export type KDefault = keyof TDefaults;
export type VDefault<K extends KDefault = KDefault> = TDefaults[K];

// ! =====> Exports as normal arrays, not readonly <=====
export const TYPEOF: TTypeOf[] = [...A_TYPEOF];
export const TYPEDESC: TTypeDesc[] = [...A_TYPEDESC];
export const NOTE_CHARS: TNoteChar[] = [...A_NOTE_CHARS];
export const NOTES: TNote[] = [...A_NOTES];
export const SCALES: TScale[] = [...A_SCALES];
export const COLORS: TColor[] = [...A_COLORS];
export const SYNTH_NAMES: TSynthName[] = [...A_SYNTH_NAMES];
export const INSTRUMENT_NAMES: TInstrumentName[] = [...A_INSTRUMENT_NAMES];
export const OCTAVES: TOctave[] = [...A_OCTAVES];
export const GUITAR_STRINGS: TGuitarString[] = [...A_GUITAR_STRINGS];
export const GUITAR_FRETS: TGuitarFrets[] = [...A_GUITAR_FRETS];
export const MELODY_SIZES: TMelodySize[] = [...A_MELODY_SIZES];
export const TUNING_NAMES: TTuningName[] = [...A_TUNING_NAMES];
export const COLOR_CLASSNAMES: TColorClassname[] = [...A_COLOR_CLASSNAMES];
export const COLOR_NAMES: TColorName[] = [...A_COLOR_NAMES];
export const COLOR_CODES: TColorCode[] = [...A_COLOR_CODES];
export const DURATION_CHARS: TDurationChar[] = [...A_DURATION_CHARS];
export const DURATIONS: TDuration[] = [...A_DURATIONS];
export const INTERVAL_CHARS: TIntervalChar[] = [...A_INTERVAL_CHARS];

// ! =====> Object values <======
export const GUITAR_TUNINGS = {
  'E Standart': ['E2', 'A2', 'D3', 'G3', 'B4', 'E4'],
  'Drop B': ['B2', 'F#2', 'B3', 'E3', 'G#3', 'C#4'],
  'Drop C': ['C2', 'G2', 'C3', 'F3', 'A4', 'D4'],
  'Drop D': ['D2', 'A2', 'D3', 'G3', 'B4', 'E4'],
} as const;

export const INITIAL_STATE: IState = {
  word: '',
  words: [],
  color: COLORS[0],
  content: [],
  strings: GUITAR_STRINGS[0],
  frets: GUITAR_FRETS[0],
  tuning: TUNING_NAMES[0],
  rootNote: NOTES[0],
  scale: SCALES[0],
  size: MELODY_SIZES[0],
  riff: [],
  synth: false,
  synthName: SYNTH_NAMES[0],
  instrumentName: INSTRUMENT_NAMES[0],
  isPlaying: false,
  valueOnPlay: {},
};
