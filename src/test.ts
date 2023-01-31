
const defaults = {
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
} as const;
class DEFAULTS {
  static null: Readonly<null> = null as Readonly<null>;
  static array: Readonly<any[]> = [] as Readonly<any[]>;
  static string: Readonly<''> = '' as Readonly<''>;
  static number: Readonly<0> = 0 as Readonly<0>;
  static boolean: Readonly<false> = false as Readonly<false>;
  static object: Readonly<{}> = {} as Readonly<{}>;
  static undefined: Readonly<undefined> = undefined as Readonly<undefined>;
  static function: Readonly<(v?: any) => {}> = ((v?: any) => {}) as Readonly<(v?: any) => {}>;
  static default: Readonly<null> = null as Readonly<null>;
  static lorem: Readonly<string> = `
      Lorem ipsum dolor sit amet,
      consectetur adipiscing elit, sed
      do eiusmod tempor incididunt ut
      labore et dolore magna aliqua.
  ` as Readonly<string>;
  static find(v?: any) {
    switch (true) {
      case v == 'null' || v == null:
        return { value: this.lorem, key: 'lorem' };
      case v == 'array' || isArray(v):
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
  static TYPE_OF_LIST = ['string', 'number', 'bigint', 'boolean', 'symbol', 'undefined', 'object', 'function'] as const;
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
  console.debug(`	LOG MESSAGE	 ----------------------------------------------------------------------	LOG MESSAGE	`);
  console.debug(`	LOG MESSAGE	 | file: constants.ts:31 | INITIAL_STATE`, INITIAL_STATE);
  console.debug(`	LOG MESSAGE	 ----------------------------------------------------------------------	LOG MESSAGE	`);

  console.debug(`	LOG MESSAGE	 ------------------------------------------------------------------------	LOG MESSAGE	`);
  console.debug(`	LOG MESSAGE	 | file: constants.ts:43 | GUITAR_TUNINGS`, GUITAR_TUNINGS);
  console.debug(`	LOG MESSAGE	 ------------------------------------------------------------------------	LOG MESSAGE	`);

  console.debug(`	LOG MESSAGE	 --------------------------------------------------------------------	LOG MESSAGE	`);
  console.debug(`	LOG MESSAGE	 | file: constants.ts:50 | TUNING_NAMES`, TUNING_NAMES);
  console.debug(`	LOG MESSAGE	 --------------------------------------------------------------------	LOG MESSAGE	`);

  console.debug(`	LOG MESSAGE	 ------------------------------------------------------	LOG MESSAGE	`);
  console.debug(`	LOG MESSAGE	 | file: constants.ts:57 | NOTES`, NOTES);
  console.debug(`	LOG MESSAGE	 ------------------------------------------------------	LOG MESSAGE	`);

  console.debug(`	LOG MESSAGE	 --------------------------------------------------------	LOG MESSAGE	`);
  console.debug(`	LOG MESSAGE	 | file: constants.ts:84 | SCALES`, SCALES);
  console.debug(`	LOG MESSAGE	 --------------------------------------------------------	LOG MESSAGE	`);

  console.debug(`	LOG MESSAGE	 -----------------------------------------------------------------------------	LOG MESSAGE	`);
  console.debug(`	LOG MESSAGE	 | file: constants.ts:103 | COLOR_CLASSNAMES`, COLOR_CLASSNAMES);
  console.debug(`	LOG MESSAGE	 -----------------------------------------------------------------------------	LOG MESSAGE	`);

  console.debug(`	LOG MESSAGE	 -------------------------------------------------------------------	LOG MESSAGE	`);
  console.debug(`	LOG MESSAGE	 | file: constants.ts:121 | COLOR_NAMES`, COLOR_NAMES);
  console.debug(`	LOG MESSAGE	 -------------------------------------------------------------------	LOG MESSAGE	`);

  console.debug(`	LOG MESSAGE	 -------------------------------------------------------------------	LOG MESSAGE	`);
  console.debug(`	LOG MESSAGE	 | file: constants.ts:141 | COLOR_CODES`, COLOR_CODES);
  console.debug(`	LOG MESSAGE	 -------------------------------------------------------------------	LOG MESSAGE	`);

  console.debug(`	LOG MESSAGE	 ---------------------------------------------------------	LOG MESSAGE	`);
  console.debug(`	LOG MESSAGE	 | file: constants.ts:159 | SYNTHS`, SYNTHS);
  console.debug(`	LOG MESSAGE	 ---------------------------------------------------------	LOG MESSAGE	`);

  console.debug(`	LOG MESSAGE	 -------------------------------------------------------------------------	LOG MESSAGE	`);
  console.debug(`	LOG MESSAGE	 | file: constants.ts:166 | DURATION_CHARS`, DURATION_CHARS);
  console.debug(`	LOG MESSAGE	 -------------------------------------------------------------------------	LOG MESSAGE	`);

  console.debug(`	LOG MESSAGE	 ---------------------------------------------------------------	LOG MESSAGE	`);
  console.debug(`	LOG MESSAGE	 | file: constants.ts:173 | DURATIONS`, DURATIONS);
  console.debug(`	LOG MESSAGE	 ---------------------------------------------------------------	LOG MESSAGE	`);

  console.debug(`	LOG MESSAGE	 -------------------------------------------------------------------------	LOG MESSAGE	`);
  console.debug(`	LOG MESSAGE	 | file: constants.ts:180 | INTERVAL_CHARS`, INTERVAL_CHARS);
  console.debug(`	LOG MESSAGE	 -------------------------------------------------------------------------	LOG MESSAGE	`);
};
