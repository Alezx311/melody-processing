import * as Teoria from 'teoria';
import {
  COLORS,
  COLOR_CLASSNAMES,
  COLOR_CODES,
  COLOR_NAMES,
  DURATIONS,
  DURATION_CHARS,
  GUITAR_FRETS,
  GUITAR_STRINGS,
  GUITAR_TUNINGS,
  INITIAL_STATE,
  INSTRUMENT_NAMES,
  INTERVAL_CHARS,
  KGuitarTuning,
  MELODY_SIZES,
  NOTES,
  NOTE_CHARS,
  OCTAVES,
  SCALES,
  SYNTH_NAMES,
  TColor,
  TColorClassname,
  TColorCode,
  TColorName,
  TDuration,
  TDurationChar,
  TGuitarFrets,
  TGuitarString,
  TGuitarTuning,
  TInstrumentName,
  TIntervalChar,
  TMelodySize,
  TNote,
  TNoteChar,
  TOctave,
  TScale,
  TSynthName,
  TTuningName,
  TTypeDesc,
  TTypeOf,
  TUNING_NAMES,
  TYPEDESC,
  TYPEOF,
  VGuitarTuning,
} from './constants';
import { IState } from './interfaces';

const { isArray } = Array;
const { now } = Date;
const { random } = Math;

// ! =====> Default Values <======
export const DEFAULTS = {
  TypeOf: TYPEOF[0],
  TypeDesc: TYPEDESC[0],
  NoteChar: NOTE_CHARS[0],
  Note: NOTES[0],
  Scale: SCALES[0],
  Color: COLORS[0],
  SynthName: SYNTH_NAMES[0],
  InstrumentName: INSTRUMENT_NAMES[0],
  Octave: OCTAVES[0],
  GuitarString: GUITAR_STRINGS[0],
  GuitarFrets: GUITAR_FRETS[0],
  MelodySize: MELODY_SIZES[0],
  TuningName: TUNING_NAMES[0],
  ColorClassname: COLOR_CLASSNAMES[0],
  ColorName: COLOR_NAMES[0],
  ColorCode: COLOR_CODES[0],
  DurationChar: DURATION_CHARS[0],
  Duration: DURATIONS[0],
  IntervalChar: INTERVAL_CHARS[0],

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

export const KEYS_INITIAL_STATE = Object.keys(INITIAL_STATE) as [keyof IState];
export const KEYS_GUITAR_TUNINGS = Object.keys(GUITAR_TUNINGS) as [KGuitarTuning];

export const VALUES_INITIAL_STATE = Object.values(INITIAL_STATE) as [IState];
export const VALUES_GUITAR_TUNINGS = Object.values(GUITAR_TUNINGS) as [VGuitarTuning];

// ? Validate types helper utils
export class Is {
  static truthy = (v?: any) => !!v;
  static exist = (v?: any): v is NonNullable<typeof v> => v !== undefined && v !== null;
  static null = (v?: any): v is null => v != null;
  static undef = (v?: any): v is undefined => v != undefined;
  static string = (v?: any): v is string => typeof v === 'string';
  static number = (v?: any): v is number => typeof v === 'number';
  static boolean = (v?: any): v is boolean => typeof v === 'boolean';
  static function = (v?: any): v is Function => typeof v === 'function';
  static array = (v?: any): v is any[] => isArray(v);
  static object = (v?: any): v is object => typeof v === 'object' && v !== null && Object.keys(v).length > 0;
  static len = (v?: any): v is { length: number } => this.exist(v?.length) && v?.length > 0;
  static in = <T = any>(element: T, arr: any[]) => this.array(arr) && arr.includes(element);
  static not = <T = any>(v1: T, v2: any): v1 is Exclude<typeof v1, typeof v2> => v1 !== v2 && typeof v1 !== typeof v2;
  static objectProp = <T = any>(obj: T, k: any): k is keyof T => this.object(obj) && Object.keys(obj).includes(k);
  static objectValue = <T = any>(obj: T, v: any): v is T[keyof T] => this.object(obj) && Object.values(obj).includes(v);

  static isInitialStateKey = (v?: any): v is keyof IState => KEYS_INITIAL_STATE.includes(v);
  static isGuitarTuningsKey = (v?: any): v is keyof TGuitarTuning => KEYS_GUITAR_TUNINGS.includes(v);

  static isInitialStateValue = (v?: any): v is IState => VALUES_INITIAL_STATE.includes(v);
  static isGuitarTuningsValue = (v?: any): v is TGuitarTuning => VALUES_GUITAR_TUNINGS.includes(v);

  static isTypeOf = (v?: any): v is TTypeOf => TYPEOF.includes(v);
  static isTypeDesc = (v?: any): v is TTypeDesc => TYPEDESC.includes(v);
  static isNoteChar = (v?: any): v is TNoteChar => NOTE_CHARS.includes(v);
  static isNote = (v?: any): v is TNote => NOTES.includes(v);
  static isScale = (v?: any): v is TScale => SCALES.includes(v);
  static isColor = (v?: any): v is TColor => COLORS.includes(v);
  static isSynthName = (v?: any): v is TSynthName => SYNTH_NAMES.includes(v);
  static isInstrumentName = (v?: any): v is TInstrumentName => INSTRUMENT_NAMES.includes(v);
  static isOctave = (v?: any): v is TOctave => OCTAVES.includes(v);
  static isGuitarString = (v?: any): v is TGuitarString => GUITAR_STRINGS.includes(v);
  static isGuitarFrets = (v?: any): v is TGuitarFrets => GUITAR_FRETS.includes(v);
  static isMelodySize = (v?: any): v is TMelodySize => MELODY_SIZES.includes(v);
  static isTuningName = (v?: any): v is TTuningName => TUNING_NAMES.includes(v);
  static isColorClassname = (v?: any): v is TColorClassname => COLOR_CLASSNAMES.includes(v);
  static isColorName = (v?: any): v is TColorName => COLOR_NAMES.includes(v);
  static isColorCode = (v?: any): v is TColorCode => COLOR_CODES.includes(v);
  static isDurationChar = (v?: any): v is TDurationChar => DURATION_CHARS.includes(v);
  static isDuration = (v?: any): v is TDuration => DURATIONS.includes(v);
  static isIntervalChar = (v?: any): v is TIntervalChar => INTERVAL_CHARS.includes(v);
}

// ? Text helper utils
export class Text {
  static toType = (data?: any) => typeof data;
  static toLength = (data?: any) => data?.length;
  static toJson = (data?: any) => JSON.stringify(data, null, 2);
  static trim = (str: string) => (Is.string(str) ? str.trim() : '');
  static join = (arr: any[], separator: string = ' ') => arr.join(separator);
  static unical = (arr: any[]): string[] => [...new Set(arr.filter(String))].map(this.trim);
  static between = (str: string, separator: string = '\t') => `${separator} ${str} ${separator}`;
  static replace = (str: string, search: string | string[] | RegExp = /\s{1,}/, replacer = ' ') => {
    if (Is.array(search)) {
      search = new RegExp(Text.join(search, '|'), 'gim');
    }
    return str.replace(search, replacer);
  };
  static split = (str: string, separator: string | string[] | RegExp = ' ') => {
    if (Is.array(separator)) {
      separator = Text.join(separator, '|');
    }
    return [...new Set(str.split(separator).map(Text.trim))];
  };
  static toWords = (str: string) => Text.split(str, ' ');
  static toLines = (str: string) => Text.split(str, /\w{80,}\W/gim);
  static toPhrases = (str: string) => Text.split(str, '.');
  static toChars = (str: string) => Text.split(str, '');
  static wrap = (str: string, maxWidth: number = 80) => {
    let res = '';
    while (str.length > maxWidth) {
      let found = false;
      // ? Inserts new line at first whitespace of the line
      for (let i = maxWidth - 1; i >= 0; i--) {
        if (/^\s$/.test(str.charAt(i))) {
          res = res + [str.slice(0, i), '\n'].join('');
          str = str.slice(i + 1);
          found = true;
          break;
        }
      }
      // ? Inserts new line at maxWidth position, the word is too long to wrap
      if (!found) {
        res += [str.slice(0, maxWidth), '\n'].join('');
        str = str.slice(maxWidth);
      }
    }
    return res + str;
  };
}

// ? Random value helper utils
export class Random {
  static uuid(l: number = 10) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < l; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  // ? Return random float value between 0 and 1
  static value = () => Math.random();
  static get _value() {
    return this.value();
  }

  // ? Return random boolean
  static bool = () => this.value() > 0.5;
  static get _bool() {
    return this.bool();
  }

  // ? Return random array with UUIDv4
  static ids = () => Array(10).fill(1).map(Random.uuid);
  static get _ids() {
    return this.ids();
  }

  // ? Return random integer between min and max
  static int = (min = 0, max = 100) => Math.floor(Math.random() * (max - min + 1)) + min;
  static get _int() {
    return this.int();
  }

  // ? Return string with random character
  static string = () => String.fromCharCode(Random.int(97, 122));
  static get _string() {
    return this.string();
  }

  // ? Return array with provided size
  static array = (size: number = 10) => Array(size).fill(1);
  static get _array() {
    return this.array();
  }

  // ? Return object with uuid as key, and integer as value
  static object = (size: number = 10) => this.array(size).reduce(acc => ({ ...acc, [this.uuid()]: this.int() }), {});
  static get _object() {
    return this.object();
  }

  // ? Return random array element
  static element = <T extends any[]>(arr: T): T[number] => arr[this.int(0, arr.length - 1)];
  // ? Return random array with array elements
  static elements = <T extends any[]>(arr: T, size: number = this.int(1, 10)): T[number][] =>
    this.array(size).map(() => this.element(arr));
  // ? Return random array part
  static part = <T extends any[] | string>(str: T) => {
    const start = this.int(0, str.length - 1);
    const end = this.int(start, str.length - 1);
    return str.slice(start, end);
  };
  // ? Return random word from provided string
  static word = <T extends string>(str: T) => this.element(str.split(' '));
  // ? Return random line from provided string
  static line = <T extends string>(str: T) => this.element(str.split('\n'));
  // ? Return random phrase from provided string
  static phrase = <T extends string>(str: T) => this.element(str.split('.'));
  // ? Return random char from provided string
  static char = <T extends string>(str: T) => this.element(str.split(''));
  // ? Return random key from provided object
  static objectKey = <T extends object>(obj: T): keyof T => this.element(Object.keys(obj)) as keyof T;
  // ? Return random value from provided object
  static objectValue = <T extends object>(obj: T): T[keyof T] => this.element(Object.values(obj));
  // ? Return random entry from provided object
  static objectEntry = <T extends object>(obj: T): [keyof T, T[keyof T]] => {
    const k = this.objectKey(obj);
    return [k, obj[k]];
  };

  static arrayDouble = (arr: any[]) => [...arr, ...arr]; //* <- Genius!
  static range = () => random().toFixed(2);
  static float = (min = 0.01, max = 0.99) => (random() * (max - min) + min).toFixed(2);
  static number = (min = 1, max = 100) => ~~(random() * (max - min)) + min;
  static boolean = (chance = 50) => this.number(1, 100) > chance;
  static numbers = (size = 10, max = 100) => this.array(size).map(() => this.number(0, max));
  static powerOfTwo = (max = 10) => 2 ** this.number(1, max);
  static numbersDeep = (len = 10, max = 4) => this.numbers(len, max).map(v => (v > 1 ? this.numbers(v, max) : v));
  static values = (arr: any[]) => this.array(10).map(v => this.arrayElement(arr));
  static arrays = (size = 10, maxDeep = 5) => this.array(size).map(v => this.array(this.number(2, maxDeep)));
  static arrayPart = (arr: any[], chance = 20) => arr.filter((v, i) => this.boolean(chance));
  static arrayGrow = (arr: any[], growSize = 10) => [
    ...arr,
    ...this.array(growSize).map((v, i) => this.arrayElement(arr)),
  ];
  static arraySequence = (start = 1, end = 100) => this.array(end).map((v, i) => start + i);
  static arrayChange = (size = 10, arr: any[]) => this.arrayElement(this.array(size).map(v => this.arrayShuffle(arr)));
  static arrayMerge = (arr: any[], ...arrays: any[][]) => this.arrayUnicals([...arr, ...arrays]);
  static arrayRepeats = (arr: any[], repeats = 2) => this.array(repeats).reduce((acc, v) => [...acc, ...arr], arr);
  static arrayUnicals = (arr: any[]) => [...new Set([...arr])];
  static arrayShuffle = (arr: any[]) => arr.sort(() => this._value - 0.5);
  static arrayShuffles = (arr: any[], repeats = 2) => this.arrayShuffle(this.arrayRepeats(arr, repeats));
  static arrayShuffleUnicals = (arr: any[]) =>
    this.arrayUnicals(this.array(arr.length * 2).map(v => this.arrayShuffle(arr)));
  static arrayIndex = (arr: any[]) => arr && this.number(0, arr.length);
  static arrayElement = (arr: any[]) => arr && arr[this.arrayIndex(arr)];
  static arrayDoubleSome = (arr: any[]) => this.arrayShuffles(arr).map(v => (this.boolean(20) ? [v, v] : v));
  // NOTES
  static noteChar = (): TNoteChar => this.arrayElement(NOTE_CHARS);
  static noteElement = (): TNote => this.arrayElement(NOTES);
  static octave = (min = 2, max = 8): TOctave => this.number(min, max) as TOctave;
  static note = (octave: TOctave = this.octave()): TNote => `${this.noteChar()}${octave}`;
  static notes = (size = 10, octave?: TOctave): TNote[] => Random.array(size).map((v?: any) => Random.note(octave));
  static scale = (): TScale => this.arrayElement(SCALES);
  static durationChar = (): TDurationChar => this.arrayElement(DURATION_CHARS);
  static duration = (): TDuration => this.arrayElement(DURATIONS);
  static intervalChar = (): TIntervalChar => this.arrayElement(INTERVAL_CHARS);
  static velocity = () => 0.75 + Random._value / 3;
  static tuningName = (): TTuningName => Random.arrayElement(TUNING_NAMES);
  static tuning = () => GUITAR_TUNINGS[Random.tuningName()];
  static noteValues = (note: TNote) => ({ note, duration: Random.duration(), velocity: Random.velocity() });
  static noteParse = (str: string) => {
    const matched = str.trim().match(/^([a-g#]+)(\d)$/i) || [DEFAULTS.Note, DEFAULTS.NoteChar, DEFAULTS.Octave];
    return { note: matched[0], char: matched[1], octave: matched?.[2] ?? 1 } as {
      note: TNote;
      char: TNoteChar;
      octave: TOctave;
    };
  };
  static toMaxOctave = (octave: number | TOctave, def: TOctave = DEFAULTS.Octave): TOctave =>
    Is.isOctave(octave) ? octave : def;
  static noteToChar = (note: TNote | TNoteChar) => note.match(/^[a-g#]{1,2}/im)?.[0];
  static noteIndex = (note: TNote | TNoteChar) => NOTES.indexOf(note);
  static noteStep = (noteOrChar: TNote | TNoteChar, step = 1) => {
    let { char, octave } = Random.noteParse(noteOrChar);
    let noteIndex = Random.noteIndex(char);
    let newIndex = noteIndex + step;
    const l = NOTES.length;
    if (newIndex === l) {
      octave = this.toMaxOctave(octave + 1, octave);
      newIndex = 0;
    } else if (newIndex > l) {
      octave = this.toMaxOctave(octave + Math.floor(newIndex / l), octave);
      newIndex = newIndex % l;
    }
    return `${NOTES[newIndex]}${octave}`;
  };
  static getScale = (note: TNote, scale: TScale) =>
    Teoria.note(note)
      .scale(scale)
      .simple()
      .map((char: TNoteChar) => `${char}${Random.octave()}`);

  static melody = (root: TNote, scale: TScale, size: TMelodySize) => {
    const scaleNotes = Random.getScale(root, scale);
    const melody = Array(size)
      .fill(root)
      .map(() => Random.arrayElement(scaleNotes));
    return this.arrayShuffles(melody);
  };
  static noteSteps = (note: TNote, size: TGuitarFrets = 24) =>
    Array(size)
      .fill(note)
      .map((v, i) => this.noteStep(v, i));
  static rhythmValues = (size = 10, max = 4) => this.numbers(size, max);
  static rhythmValuesDeep = (size = 10, max = 4) => this.numbersDeep(size, max);
  static rhythmNotes = (size = 10) => this.numbers(size, 4).map(v => (v > 1 ? this.notes(v) : this.note()));
  static colorName = (): TColorName => this.arrayElement(COLOR_NAMES);
  static colorHex = (): TColorCode => this.arrayElement(COLOR_CODES);
  static colorClassName = (): TColorClassname => this.arrayElement(COLOR_CLASSNAMES);
  static styleColorGradient = () => `${this.colorHex()} ${this.number(0, 100)}.00%`;
  static styleBackgroundGradient = () =>
    `linear-gradient(${this.number(0, 120)}.00deg, ${this.styleColorGradient()}, ${this.styleColorGradient()})`;
}

export class Source {
  private key: string;
  private value: any;
  private props: object;
  private get obj() {
    return { key: this.key, value: this.value, initial: this.initial, props: this.props };
  }
  private get toTypeOf() {
    return typeof this.value;
  }
  private get toTypeDesc() {
    return `${typeof this.value}`.toUpperCase() as TypeDesc;
  }
  private get json() {
    return JSON.stringify(this.obj, null, 2);
  }
  private get toValues() {
    return Object.values(this.obj);
  }
  private get toKeys() {
    return Object.keys(this.obj);
  }
  private get generateIds() {
    return { uuid: Random.uuid(), timestamp: now() };
  }
  private updateProps(value: any = this.value, state: any = {}) {
    return Object.assign(
      {},
      { ...Is.valueInfo(value), typeOf: this.toTypeOf, typeDesc: this.toTypeDesc },
      state,
      this.generateIds,
    );
  }
  constructor(readonly initial: Initial) {
    this.key = this.initial.key;
    this.value = this.initial.value;
    this.props = this.updateProps(this.initial.value, {});
  }
}
