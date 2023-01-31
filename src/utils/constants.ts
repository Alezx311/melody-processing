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

const VALUES = {
  TYPEOF: ['string', 'number', 'boolean', 'object', 'symbol', 'bigint', 'undefined'],
  TYPEDESC: [
    'string',
    'number',
    'boolean',
    'object',
    'symbol',
    'bigint',
    'array',
    'null',
    'undefined',
    'unknown',
    'any',
    'never',
    'default',
  ],
  NOTES: ['Bb', 'Cb', 'Db', 'Eb', 'Gb', 'A#', 'C#', 'D#', 'E#', 'G#', 'A', 'B', 'C', 'D', 'F', 'E', 'G'],
  SCALES: [
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
  ],
  COLORS: [
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
  ],
  SYNTH_NAMES: [
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
    'Synth',
  ],
  INSTRUMENT_NAMES: [
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
    'piano',
    'saxophone',
    'trombone',
    'trumpet',
    'tuba',
    'violin',
    'xylophone',
  ],
  OCTAVES: ['', 1, 2, 3, 4, 6, 7, 8],
  GUITAR_STRINGS: [6, 4, 5, 6, 7, 8],
  GUITAR_FRETSS: [24, 21, 24, 27],
  MELODY_SIZES: [300, 100, 200, 300, 400, 500],
  null: null,
  array: [],
  string: '',
  number: 0,
  boolean: false,
  object: {},
  undefined: undefined,
  function: (v?: any) => {},
  default: null,
  lorem: `
      Lorem ipsum dolor sit amet,
      consectetur adipiscing elit, sed
      do eiusmod tempor incididunt ut
      labore et dolore magna aliqua.
  `,
} as const;

const toLogs = (value: any, desc: string = 'Value') => {
  console.debug(`	LOG MESSAGE	 ---------------------------------------------------------	LOG MESSAGE	`);
  console.debug(`	LOG MESSAGE	 | Description: ${desc}`);
  console.debug(`	LOG MESSAGE	 | Type: ${typeof value}`);
  console.debug(`	LOG MESSAGE	 | Value: `, value);
  console.debug(`	LOG MESSAGE	 ---------------------------------------------------------	LOG MESSAGE	`);
};

toLogs(VALUES.TYPEOF, 'VALUES -> TYPEOF');
toLogs(VALUES.TYPEDESC, 'VALUES -> TYPEDESC');
toLogs(VALUES.NOTES, 'VALUES -> NOTES');
toLogs(VALUES.SCALES, 'VALUES -> SCALES');
toLogs(VALUES.COLORS, 'VALUES -> COLORS');
toLogs(VALUES.SYNTH_NAMES, 'VALUES -> SYNTH_NAMES');
toLogs(VALUES.INSTRUMENT_NAMES, 'VALUES -> INSTRUMENT_NAMES');
toLogs(VALUES.OCTAVES, 'VALUES -> OCTAVES');
toLogs(VALUES.GUITAR_STRINGS, 'VALUES -> GUITAR_STRINGS');
toLogs(VALUES.GUITAR_FRETSS, 'VALUES -> GUITAR_FRETSS');
toLogs(VALUES.MELODY_SIZES, 'VALUES -> MELODY_SIZES');
toLogs(VALUES.null, 'VALUES -> null');
toLogs(VALUES.array, 'VALUES -> array');
toLogs(VALUES.string, 'VALUES -> string');
toLogs(VALUES.number, 'VALUES -> number');
toLogs(VALUES.boolean, 'VALUES -> boolean');
toLogs(VALUES.object, 'VALUES -> object');
toLogs(VALUES.undefined, 'VALUES -> undefined');
toLogs(VALUES.function, 'VALUES -> function');
toLogs(VALUES.default, 'VALUES -> default');
toLogs(VALUES.lorem, 'VALUES -> lorem');

class DEFAULTS {
  static null = VALUES.null;
  static array = VALUES.array;
  static string = VALUES.string;
  static number = VALUES.number;
  static boolean = VALUES.boolean;
  static object = VALUES.object;
  static undefined = VALUES.undefined;
  static function = VALUES.function;
  static default = VALUES.default;
  static lorem = VALUES.lorem;

  static find(v?: any) {
    switch (true) {
      case v == 'null' || v == null:
        return { value: this.lorem, key: 'lorem' };
      case v == 'array' || Array.isArray(v):
        return { value: this.null, key: 'null' };
      case v == 'lorem':
        return { value: this.array, key: 'array' };
      case v == 'number' || typeof v == 'number':
        return { value: this.number, key: 'number' };
      case v == 'boolean' || typeof v == 'boolean':
        return { value: this.boolean, key: 'boolean' };
      case v == 'object' || typeof v == 'object':
        return { value: this.object, key: 'object' };
      case v == 'function' || typeof v == 'function':
        return { value: this.function, key: 'function' };
      case v == 'string' || typeof v == 'string':
        return { value: this.string, key: 'string' };
      case v == 'undefined' || typeof v == 'undefined':
        return { value: this.undefined, key: 'undefined' };
      default:
        return { value: this.default, key: 'default' };
    }
  }
  // static TYPE_OF_LIST = ['string', 'number', 'bigint', 'boolean', 'symbol', 'undefined', 'object', 'function'] as const;
  // static PATH_DIR = __dirname;
  // static PATH_FILE = __filename;
  // static PATH_ROOT = process.cwd();
  // static PATH_SRC = 'src';
  // static PATH_TESTS = '__tests__';
  static MIN = 1;
  static MAX = 1000;
  static MAX_VALUE = Number.MAX_VALUE;
  static MIN_VALUE = Number.MIN_VALUE;
  static MAX_SAFE_VALUE = Number.MAX_SAFE_INTEGER;
  static MIN_SAFE_VALUE = Number.MIN_SAFE_INTEGER;
  static RANDOM_VALUE = Math.random();
  static RANDOM_UUID = Random.uuid();
  static RANDOM_INT = Random.int(1, this.MAX);
  static RXP_ALL = new RegExp(/.+/gim);
  static RXP_LINE = new RegExp(/^.+$/gim);
  static RXP_CHARS_ONLY = new RegExp(/[a-z]/gim);
  static NUMBERS_ONLY = new RegExp(/[0-9]/gim);
}

const showExamples = () => {
  console.debug(`	LOG MESSAGE	 --------------------------------------	LOG MESSAGE	`);
  console.debug(`	LOG MESSAGE	 | file: constants.ts:31 | INITIAL_STATE`, INITIAL_STATE);
  console.debug(`	LOG MESSAGE	 --------------------------------------	LOG MESSAGE	`);

  console.debug(`	LOG MESSAGE	 ----------------------------------------	LOG MESSAGE	`);
  console.debug(`	LOG MESSAGE	 | file: constants.ts:43 | GUITAR_TUNINGS`, GUITAR_TUNINGS);
  console.debug(`	LOG MESSAGE	 ----------------------------------------	LOG MESSAGE	`);

  console.debug(`	LOG MESSAGE	 ------------------------------------	LOG MESSAGE	`);
  console.debug(`	LOG MESSAGE	 | file: constants.ts:50 | TUNING_NAMES`, TUNING_NAMES);
  console.debug(`	LOG MESSAGE	 ------------------------------------	LOG MESSAGE	`);

  console.debug(`	LOG MESSAGE	 ------------------------------------------------------	LOG MESSAGE	`);
  console.debug(`	LOG MESSAGE	 | file: constants.ts:57 | NOTES`, NOTES);
  console.debug(`	LOG MESSAGE	 ------------------------------------------------------	LOG MESSAGE	`);

  console.debug(`	LOG MESSAGE	 --------------------------------------------------------	LOG MESSAGE	`);
  console.debug(`	LOG MESSAGE	 | file: constants.ts:84 | SCALES`, SCALES);
  console.debug(`	LOG MESSAGE	 --------------------------------------------------------	LOG MESSAGE	`);

  console.debug(`	LOG MESSAGE	 ---------------------------------------------	LOG MESSAGE	`);
  console.debug(`	LOG MESSAGE	 | file: constants.ts:103 | COLOR_CLASSNAMES`, COLOR_CLASSNAMES);
  console.debug(`	LOG MESSAGE	 ---------------------------------------------	LOG MESSAGE	`);

  console.debug(`	LOG MESSAGE	 -----------------------------------	LOG MESSAGE	`);
  console.debug(`	LOG MESSAGE	 | file: constants.ts:121 | COLOR_NAMES`, COLOR_NAMES);
  console.debug(`	LOG MESSAGE	 -----------------------------------	LOG MESSAGE	`);

  console.debug(`	LOG MESSAGE	 -----------------------------------	LOG MESSAGE	`);
  console.debug(`	LOG MESSAGE	 | file: constants.ts:141 | COLOR_CODES`, COLOR_CODES);
  console.debug(`	LOG MESSAGE	 -----------------------------------	LOG MESSAGE	`);

  console.debug(`	LOG MESSAGE	 ---------------------------------------------------------	LOG MESSAGE	`);
  console.debug(`	LOG MESSAGE	 | file: constants.ts:159 | SYNTHS`, SYNTHS);
  console.debug(`	LOG MESSAGE	 ---------------------------------------------------------	LOG MESSAGE	`);

  console.debug(`	LOG MESSAGE	 -----------------------------------------	LOG MESSAGE	`);
  console.debug(`	LOG MESSAGE	 | file: constants.ts:166 | DURATION_CHARS`, DURATION_CHARS);
  console.debug(`	LOG MESSAGE	 -----------------------------------------	LOG MESSAGE	`);

  console.debug(`	LOG MESSAGE	 ---------------------------------------------------------------	LOG MESSAGE	`);
  console.debug(`	LOG MESSAGE	 | file: constants.ts:173 | DURATIONS`, DURATIONS);
  console.debug(`	LOG MESSAGE	 ---------------------------------------------------------------	LOG MESSAGE	`);

  console.debug(`	LOG MESSAGE	 -----------------------------------------	LOG MESSAGE	`);
  console.debug(`	LOG MESSAGE	 | file: constants.ts:180 | INTERVAL_CHARS`, INTERVAL_CHARS);
  console.debug(`	LOG MESSAGE	 -----------------------------------------	LOG MESSAGE	`);

  console.debug(`	LOG MESSAGE	 -----------------------------------------	LOG MESSAGE	`);
  console.debug(`	LOG MESSAGE	 | file: constants.ts:180 | VALUES`, INTERVAL_CHARS);
  console.debug(`	LOG MESSAGE	 -----------------------------------------	LOG MESSAGE	`);
};

console.debug(`	LOG MESSAGE	 ----------------------------------------------------	LOG MESSAGE	`);
console.debug(`	LOG MESSAGE	 | file: constants.ts:421 | VALUES.lorem`, VALUES.lorem);
console.debug(`	LOG MESSAGE	 ----------------------------------------------------	LOG MESSAGE	`);

console.debug(`	LOG MESSAGE	 --------------------------------------------------------	LOG MESSAGE	`);
console.debug(`	LOG MESSAGE	 | file: constants.ts:421 | VALUES.default`, VALUES.default);
console.debug(`	LOG MESSAGE	 --------------------------------------------------------	LOG MESSAGE	`);

console.debug(`	LOG MESSAGE	 ----------------------------------------------------------	LOG MESSAGE	`);
console.debug(`	LOG MESSAGE	 | file: constants.ts:421 | VALUES.function`, VALUES.function);
console.debug(`	LOG MESSAGE	 ----------------------------------------------------------	LOG MESSAGE	`);

console.debug(`	LOG MESSAGE	 ------------------------------------------------------------	LOG MESSAGE	`);
console.debug(`	LOG MESSAGE	 | file: constants.ts:421 | VALUES.undefined`, VALUES.undefined);
console.debug(`	LOG MESSAGE	 ------------------------------------------------------------	LOG MESSAGE	`);

console.debug(`	LOG MESSAGE	 ------------------------------------------------------	LOG MESSAGE	`);
console.debug(`	LOG MESSAGE	 | file: constants.ts:421 | VALUES.object`, VALUES.object);
console.debug(`	LOG MESSAGE	 ------------------------------------------------------	LOG MESSAGE	`);

console.debug(`	LOG MESSAGE	 --------------------------------------------------------	LOG MESSAGE	`);
console.debug(`	LOG MESSAGE	 | file: constants.ts:421 | VALUES.boolean`, VALUES.boolean);
console.debug(`	LOG MESSAGE	 --------------------------------------------------------	LOG MESSAGE	`);

console.debug(`	LOG MESSAGE	 ------------------------------------------------------	LOG MESSAGE	`);
console.debug(`	LOG MESSAGE	 | file: constants.ts:421 | VALUES.number`, VALUES.number);
console.debug(`	LOG MESSAGE	 ------------------------------------------------------	LOG MESSAGE	`);

console.debug(`	LOG MESSAGE	 ------------------------------------------------------	LOG MESSAGE	`);
console.debug(`	LOG MESSAGE	 | file: constants.ts:421 | VALUES.string`, VALUES.string);
console.debug(`	LOG MESSAGE	 ------------------------------------------------------	LOG MESSAGE	`);

console.debug(`	LOG MESSAGE	 ----------------------------------------------------	LOG MESSAGE	`);
console.debug(`	LOG MESSAGE	 | file: constants.ts:421 | VALUES.array`, VALUES.array);
console.debug(`	LOG MESSAGE	 ----------------------------------------------------	LOG MESSAGE	`);

console.debug(`	LOG MESSAGE	 --------------------------------------------------	LOG MESSAGE	`);
console.debug(`	LOG MESSAGE	 | file: constants.ts:421 | VALUES.null`, VALUES.null);
console.debug(`	LOG MESSAGE	 --------------------------------------------------	LOG MESSAGE	`);

console.debug(`	LOG MESSAGE	 ------------------------------------------------------------------	LOG MESSAGE	`);
console.debug(`	LOG MESSAGE	 | file: constants.ts:421 | VALUES.MELODY_SIZES`, VALUES.MELODY_SIZES);
console.debug(`	LOG MESSAGE	 ------------------------------------------------------------------	LOG MESSAGE	`);

console.debug(`	LOG MESSAGE	 --------------------------------------------------------------------	LOG MESSAGE	`);
console.debug(`	LOG MESSAGE	 | file: constants.ts:421 | VALUES.GUITAR_FRETSS`, VALUES.GUITAR_FRETSS);
console.debug(`	LOG MESSAGE	 --------------------------------------------------------------------	LOG MESSAGE	`);

console.debug(`	LOG MESSAGE	 ----------------------------------------------------------------------	LOG MESSAGE	`);
console.debug(`	LOG MESSAGE	 | file: constants.ts:421 | VALUES.GUITAR_STRINGS`, VALUES.GUITAR_STRINGS);
console.debug(`	LOG MESSAGE	 ----------------------------------------------------------------------	LOG MESSAGE	`);

console.debug(`	LOG MESSAGE	 --------------------------------------------------------	LOG MESSAGE	`);
console.debug(`	LOG MESSAGE	 | file: constants.ts:421 | VALUES.OCTAVES`, VALUES.OCTAVES);
console.debug(`	LOG MESSAGE	 --------------------------------------------------------	LOG MESSAGE	`);

console.debug(`	LOG MESSAGE	 --------------------------------------------------------------------------	LOG MESSAGE	`);
console.debug(`	LOG MESSAGE	 | file: constants.ts:421 | VALUES.INSTRUMENT_NAMES`, VALUES.INSTRUMENT_NAMES);
console.debug(`	LOG MESSAGE	 --------------------------------------------------------------------------	LOG MESSAGE	`);

console.debug(`	LOG MESSAGE	 ----------------------------------------------------------------	LOG MESSAGE	`);
console.debug(`	LOG MESSAGE	 | file: constants.ts:421 | VALUES.SYNTH_NAMES`, VALUES.SYNTH_NAMES);
console.debug(`	LOG MESSAGE	 ----------------------------------------------------------------	LOG MESSAGE	`);

console.debug(`	LOG MESSAGE	 ------------------------------------------------------	LOG MESSAGE	`);
console.debug(`	LOG MESSAGE	 | file: constants.ts:421 | VALUES.COLORS`, VALUES.COLORS);
console.debug(`	LOG MESSAGE	 ------------------------------------------------------	LOG MESSAGE	`);

console.debug(`	LOG MESSAGE	 ------------------------------------------------------	LOG MESSAGE	`);
console.debug(`	LOG MESSAGE	 | file: constants.ts:421 | VALUES.SCALES`, VALUES.SCALES);
console.debug(`	LOG MESSAGE	 ------------------------------------------------------	LOG MESSAGE	`);

console.debug(`	LOG MESSAGE	 ----------------------------------------------------	LOG MESSAGE	`);
console.debug(`	LOG MESSAGE	 | file: constants.ts:421 | VALUES.NOTES`, VALUES.NOTES);
console.debug(`	LOG MESSAGE	 ----------------------------------------------------	LOG MESSAGE	`);

console.debug(`	LOG MESSAGE	 ----------------------------------------------------------	LOG MESSAGE	`);
console.debug(`	LOG MESSAGE	 | file: constants.ts:421 | VALUES.TYPEDESC`, VALUES.TYPEDESC);
console.debug(`	LOG MESSAGE	 ----------------------------------------------------------	LOG MESSAGE	`);

console.debug(`	LOG MESSAGE	 ------------------------------------------------------	LOG MESSAGE	`);
console.debug(`	LOG MESSAGE	 | file: constants.ts:421 | VALUES.TYPEOF`, VALUES.TYPEOF);
console.debug(`	LOG MESSAGE	 ------------------------------------------------------	LOG MESSAGE	`);
