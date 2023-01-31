import * as Teoria from 'teoria';
import * as CONSTANTS from './constants';
import {
  TColorClassname,
  TColorCode,
  TColorName,
  TDuration,
  TDurationChar,
  TGuitarTuning,
  TInitialState,
  TIntervalChar,
  TNote,
  TScale,
  TSynth,
} from './types';
const {
  NOTES,
  SCALES,
  DURATION_CHARS,
  DURATIONS,
  INTERVAL_CHARS,
  TUNING_NAMES,
  GUITAR_TUNINGS,
  COLOR_NAMES,
  COLOR_CODES,
  COLOR_CLASSNAMES,
} = CONSTANTS;

const { random } = Math;

export const KEYS_INITIAL_STATE = Object.keys(CONSTANTS.INITIAL_STATE) as [keyof TInitialState];
export const KEYS_GUITAR_TUNINGS = Object.keys(CONSTANTS.GUITAR_TUNINGS) as [keyof TGuitarTuning];

export const VALUES_INITIAL_STATE = Object.values(CONSTANTS.INITIAL_STATE) as [TInitialState];
export const VALUES_GUITAR_TUNINGS = Object.values(CONSTANTS.GUITAR_TUNINGS) as [TGuitarTuning];

// ! =====> Utils <======
export const isInitialStateKey = (v?: any): v is keyof TInitialState => KEYS_INITIAL_STATE.includes(v);
export const isGuitarTuningsKey = (v?: any): v is keyof TGuitarTuning => KEYS_GUITAR_TUNINGS.includes(v);

export const isInitialStateValue = (v?: any): v is TInitialState => VALUES_INITIAL_STATE.includes(v);
export const isGuitarTuningsValue = (v?: any): v is TGuitarTuning => VALUES_GUITAR_TUNINGS.includes(v);

export const isNote = (v?: any): v is TNote => NOTES.includes(v);
export const isScale = (v?: any): v is TScale => SCALES.includes(v);
export const isColorClass = (v?: any): v is TColorClassname => COLOR_CLASSNAMES.includes(v);
export const isColorName = (v?: any): v is TColorName => COLOR_NAMES.includes(v);
export const isColorCode = (v?: any): v is TColorCode => COLOR_CODES.includes(v);
export const isSynth = (v?: any): v is TSynth => CONSTANTS.SYNTHS.includes(v);
export const isDurationChar = (v?: any): v is TDurationChar => DURATION_CHARS.includes(v);
export const isDuration = (v?: any): v is TDuration => DURATIONS.includes(v);
export const isIntervalChar = (v?: any): v is TIntervalChar => INTERVAL_CHARS.includes(v);

type Initial = { key: string; value: any };
type O = object;
type TypeDesc = string;
type TypeOf = string;

const { isArray } = Array;
const { now } = Date;

// ? Validate types helper utils
export class Is {
  static truthy = (v?: any) => !!v;
  static exist = (v?: any): v is NonNullable<typeof v> => v !== undefined && v !== null;
  static null = (v?: any): v is null => {
    return v != null;
  };
  static undef = (v?: any): v is undefined => {
    return v != undefined;
  };
  static string = (v?: any): v is string => typeof v === 'string';
  static number = (v?: any): v is number => {
    return typeof v === 'number';
  };
  static boolean = (v?: any): v is boolean => {
    return typeof v === 'boolean';
  };
  static function = (v?: any): v is Function => typeof v === 'function';
  static array = (v?: any): v is any[] => isArray(v);
  static object = (v?: any): v is object => {
    return typeof v === 'object' && v !== null && Object.keys(v).length > 0;
  };
  static typeOf = (v?: any): v is TypeOf => Constants.TYPE_OF_LIST.includes(v);
  static len = (v?: any): v is { length: number } => this.exist(v?.length) && v?.length > 0;
  static in = <T = any>(element: T, arr: any[]) => this.array(arr) && arr.includes(element);
  static not = <T = any>(v1: T, v2: any): v1 is Exclude<typeof v1, typeof v2> => v1 !== v2 && typeof v1 !== typeof v2;
  static objectProp = <T = any>(obj: T, k: any): k is keyof T => this.object(obj) && Object.keys(obj).includes(k);
  static objectValue = <T = any>(obj: T, v: any): v is T[keyof T] => this.object(obj) && Object.values(obj).includes(v);
  static hasProp = <T extends O, K extends keyof T>(
    obj: T,
    props: K[],
  ): obj is typeof obj & Required<{ [k in K]: T[K] }> => props.every(p => this.exist(obj?.[p]));
  static hasPropFrom = (v?: any): v is Required<Pick<typeof v, 'from'>> => this.exist(v?.from);
  static hasPropMessage = (v?: any): v is Required<Pick<typeof v, 'message'>> => this.exist(v?.message);
  static hasPropUpdateCbQuery = (v?: any): v is Required<Pick<typeof v, 'callback_query'>> =>
    this.exist(v?.update?.callback_query);
  static hasKeyAndUUID = (v?: any): v is Required<Pick<typeof v, 'key' | 'uuid'>> =>
    this.exist(v?.key) && this.string(v?.key);
  static hasIdAndUsername = (v?: any): v is Required<Pick<typeof v, 'id' | 'username'>> => v.id && v.username;
  static valueInfo(v?: any) {
    return {
      isTruthy: this.truthy(v),
      isDefined: this.exist(v),
      isString: this.string(v),
      isNumber: this.number(v),
      isBoolean: this.boolean(v),
      isNull: this.null(v),
      isArray: this.array(v),
      isObject: this.object(v),
      isFunction: this.function(v),
    };
  }
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
  // ? Return random boolean
  static bool = () => this.value() > 0.5;
  // ? Return random array with UUIDv4
  static ids = () => Array(10).fill(1).map(Random.uuid);
  // ? Return random integer between min and max
  static int = (min = 0, max = 100) => Math.floor(Math.random() * (max - min + 1)) + min;
  // ? Return string with random character
  static string = () => String.fromCharCode(Random.int(97, 122));
  // ? Return array with provided size
  static array = (size: number = 10) => Array(size).fill(1);
  // ? Return object with uuid as key, and integer as value
  static object = (size: number = 10) => this.array(size).reduce(acc => ({ ...acc, [this.uuid()]: this.int() }), {});
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
  static values = arr => this.array(10).map(v => this.arrayElement(arr));
  // static array = (size = 10, fill = this.boolean(20)) => Array(size).fill(fill);
  static arrays = (size = 10, maxDeep = 5) => this.array(size).map(v => this.array(this.number(2, maxDeep)));
  static arrayPart = (arr, chance = 20) => arr.filter((v, i) => this.boolean(chance));
  static arrayGrow = (arr, growSize = 10) => [...arr, ...this.array(growSize).map((v, i) => this.arrayElement(arr))];
  static arrayExamples = (size = 10) => this.array(size).map(v => this.example());
  static arraySequence = (start = 1, end = 100) => this.array(end).map((v, i) => start + i);
  static arrayChange = (size = 10, arr) => this.arrayElement(this.array(size).map(v => this.arrayShuffle(arr)));
  static arrayMerge = (arr, ...arrays) => this.arrayUnicals([...arr, ...arrays]);
  static arrayRepeats = (arr, repeats = 2) => this.array(repeats).reduce((acc, v) => [...acc, ...arr], arr);
  static arrayUnicals = arr => [...new Set([...arr])];
  static arrayShuffle = arr => arr.sort(() => this.range() - 0.5);
  static arrayShuffles = (arr, repeats = 2) => this.arrayShuffle(this.arrayRepeats(arr, repeats));
  static arrayShuffleUnicals = arr => this.arrayUnicals(this.array(arr.length * 2).map(v => this.arrayShuffle(arr)));
  static arrayIndex = arr => arr && this.number(0, arr.length);
  static arrayElement = arr => arr && arr[this.arrayIndex(arr)];
  static arrayDoubleSome = arr => this.arrayShuffles(arr).map(v => (this.boolean(20) ? [v, v] : v));
  // static objectKey = obj => this.arrayElement(Object.keys(obj));
  // static objectProp = obj => obj[this.objectKey(obj)];
  static noteChar = () => this.arrayElement(NOTES);
  static octave = (min = 2, max = 4) => this.number(min, max);
  static note = (octave = this.octave()) => `${this.noteChar()}${octave}`;
  static notes = (size = 10, octave) => Random.array(size, (v?: any) => Random.note(octave));
  static scale = () => this.arrayElement(SCALES);
  static durationChar = () => this.arrayElement(DURATION_CHARS);
  static duration = () => this.arrayElement(DURATIONS);
  static interval = () => this.arrayElement(INTERVAL_CHARS);
  static velocity = () => 0.75 + Random.range() / 3;
  static tuningName = () => Random.arrayElement(TUNING_NAMES);
  static tuning = () => GUITAR_TUNINGS[Random.tuningName()];
  static noteValues = note => ({ note, duration: Random.duration(), velocity: Random.velocity() });
  static noteParse = str => {
    let [note, char, octave = 1] = str.trim().match(/^([a-g#]+)(\d)$/i);
    return { note, char, octave };
  };
  static noteIndex = note => NOTES.indexOf(note.trim().match(/^([a-g#]+)/i)[1]);
  static noteStep = (noteChar, step = 1) => {
    let { char, octave } = Random.noteParse(noteChar);
    let noteIndex = Random.noteIndex(char);
    let newIndex = noteIndex + step;
    const l = NOTES.length;
    if (newIndex === l) {
      octave = ~~octave + 1;
      newIndex = 0;
    } else if (newIndex > l) {
      octave = ~~octave + ~~(newIndex / l);
      newIndex = newIndex % l;
    }
    return `${NOTES[newIndex]}${octave}`;
  };
  static getScale = (note, scale) =>
    Teoria.note(note)
      .scale(scale)
      .simple()
      .map(char => `${char}${Random.octave()}`);

  static melody = (root, scale, size) => {
    const scaleNotes = Random.getScale(root, scale);
    const melody = Array(size)
      .fill(root)
      .map(() => Random.arrayElement(scaleNotes));
    return this.arrayShuffles(melody);
  };
  static noteSteps = (note, size = 24) =>
    Array(size)
      .fill(note)
      .map((v, i) => this.noteStep(v, i));
  static rhythmValues = (size = 10, max = 4) => this.numbers(size, max);
  static rhythmValuesDeep = (size = 10, max = 4) => this.numbersDeep(size, max);
  static rhythmNotes = (size = 10) => this.numbers(size, 1, 4).map(v => (v > 1 ? this.notes(v) : this.note()));
  static rhythmNotesDeep = (size = 10, max = 4, notes = this.notes(size)) =>
    this.arrayDeepSome(this.rhythmNotes(size, notes), notes);
  static colorName = () => this.arrayElement(COLOR_NAMES);
  static colorHex = () => this.arrayElement(COLOR_CODES);
  static colorClassName = () => this.arrayElement(COLOR_CLASSNAMES);
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
