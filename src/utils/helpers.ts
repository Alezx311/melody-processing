import { Teoria } from 'teoria'
import { Constants } from './constants'
import {
  IGuitarTuning,
  IState,
  TColor,
  TColorClassname,
  TColorCode,
  TColorName,
  TDuration,
  TDurationChar,
  TGuitarFret,
  TGuitarString,
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
  TTypeof,
} from './interfaces'
const {
  TYPEOF,
  TYPEDESC,
  COLORS,
  SYNTH_NAMES,
  INSTRUMENT_NAMES,
  OCTAVES,
  GUITAR_STRINGS,
  GUITAR_FRETS,
  MELODY_SIZES,
  GUITAR_TUNINGS,
} = Constants
const NOTE_CHARS = [...Constants.NOTE_CHARS]
const NOTES = [...Constants.NOTES]
const SCALES = [...Constants.SCALES]
const DURATION_CHARS = [...Constants.DURATION_CHARS]
const DURATIONS = [...Constants.DURATIONS]
const INTERVAL_CHARS = [...Constants.INTERVAL_CHARS]
const TUNING_NAMES = [...Constants.TUNING_NAMES]
const COLOR_NAMES = [...Constants.COLOR_NAMES]
const COLOR_CODES = [...Constants.COLOR_CODES]
const COLOR_CLASSNAMES = [...Constants.COLOR_CLASSNAMES]

const { now } = Date
const { random } = Math
// ! =====> Default Values <======
export const DEFAULTS: { [k: string]: any } = {
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
}

export const KEYS_INITIAL_STATE = Object.keys(Constants.INITIAL_STATE) as (keyof IState)[]
export const KEYS_GUITAR_TUNINGS = Object.keys(Constants.GUITAR_TUNINGS) as (keyof IGuitarTuning)[]
export const VALUES_INITIAL_STATE = Object.values(Constants.INITIAL_STATE) as IState[keyof IState][]
export const VALUES_GUITAR_TUNINGS = Object.values(Constants.GUITAR_TUNINGS) as unknown as IGuitarTuning[TTuningName][]

// ? Validate types helper utils
export const isTruthy = (v?: any) => !!v
export const isExist = (v?: any): v is NonNullable<typeof v> => v !== undefined && v !== null
export const isNull = (v?: any): v is null => v != null
export const isUndef = (v?: any): v is undefined => v != undefined
export const isString = (v?: any): v is string => typeof v === 'string'
export const isNumber = (v?: any): v is number => typeof v === 'number'
export const isBoolean = (v?: any): v is boolean => typeof v === 'boolean'
export const isFunction = (v?: any): v is Function => typeof v === 'function'
export const isArray = (v?: any): v is Array<any> => Array.isArray(v)
export const isObject = (v?: any): v is object => typeof v === 'object' && v !== null && Object.keys(v).length > 0
export const isLen = (v?: any): v is { length: number } => isExist(v?.length) && v?.length > 0
export const isIn = <T = any>(element: T, arr: any[]) => isArray(arr) && arr.includes(element)
export const isNot = <T = any>(v1: T, v2: any): v1 is Exclude<typeof v1, typeof v2> =>
  v1 !== v2 && typeof v1 !== typeof v2
export const isObjectProp = <T = any>(obj: T, k: any): k is keyof T => isObject(obj) && Object.keys(obj).includes(k)
export const isObjectValue = <T = any>(obj: T, v: any): v is T[keyof T] =>
  isObject(obj) && Object.values(obj).includes(v)
export const isInitialStateKey = (v?: any): v is keyof IState => KEYS_INITIAL_STATE.includes(v)
export const isGuitarTuningsKey = (v?: any): v is keyof IGuitarTuning => KEYS_GUITAR_TUNINGS.includes(v)
export const isInitialStateValue = (v?: any): v is IState => VALUES_INITIAL_STATE.includes(v)
export const isGuitarTuningsValue = (v?: any): v is IGuitarTuning => VALUES_GUITAR_TUNINGS.includes(v)
export const isTypeOf = (v?: any): v is TTypeof => TYPEOF.includes(v)
export const isTypeDesc = (v?: any): v is TTypeDesc => TYPEDESC.includes(v)
export const isNoteChar = (v?: any): v is TNoteChar => NOTE_CHARS.includes(v)
export const isNote = (v?: any): v is TNote => NOTES.includes(v)
export const isScale = (v?: any): v is TScale => SCALES.includes(v)
export const isColor = (v?: any): v is TColor => COLORS.includes(v)
export const isSynthName = (v?: any): v is TSynthName => SYNTH_NAMES.includes(v)
export const isInstrumentName = (v?: any): v is TInstrumentName => INSTRUMENT_NAMES.includes(v)
export const isOctave = (v?: any): v is TOctave => OCTAVES.includes(v)
export const isGuitarString = (v?: any): v is TGuitarString => GUITAR_STRINGS.includes(v)
export const isGuitarFrets = (v?: any): v is TGuitarFret => GUITAR_FRETS.includes(v)
export const isMelodySize = (v?: any): v is TMelodySize => MELODY_SIZES.includes(v)
export const isTuningName = (v?: any): v is TTuningName => TUNING_NAMES.includes(v)
export const isColorClassname = (v?: any): v is TColorClassname => COLOR_CLASSNAMES.includes(v)
export const isColorName = (v?: any): v is TColorName => COLOR_NAMES.includes(v)
export const isColorCode = (v?: any): v is TColorCode => COLOR_CODES.includes(v)
export const isDurationChar = (v?: any): v is TDurationChar => DURATION_CHARS.includes(v)
export const isDuration = (v?: any): v is TDuration => DURATIONS.includes(v)
export const isIntervalChar = (v?: any): v is TIntervalChar => INTERVAL_CHARS.includes(v)

// ? Text helper utils
export class Text {
  public static toType = (data?: any) => typeof data
  public static toLength = (data?: any) => data?.length
  public static toJson = (data?: any) => JSON.stringify(data, null, 2)
  public static trim = (str: string) => (isString(str) ? str.trim() : '')
  public static join = (arr: any[], separator: string = ' ') => arr.join(separator)
  public static unical = <T>(arr: T[]): string[] => {
    const strs = arr.filter(String) as string[]
    const uniq = [...new Set(strs)]
    return uniq.map((el: string) => this.trim(el)) as string[]
  }
  public static between = (str: string, separator: string = '\t') => `${separator} ${str} ${separator}`
  public static replace = (str: string, search: string | string[] | RegExp = /\s{1,}/, replacer = ' ') => {
    if (isArray(search)) {
      search = new RegExp(Text.join(search, '|'), 'gim')
    }
    return str.replace(search, replacer)
  }
  public static split = (str: string, separator: string | string[] | RegExp = ' ') => {
    if (isArray(separator)) {
      separator = Text.join(separator, '|')
    }
    return [...new Set(str.split(separator).map(Text.trim))]
  }
  public static toWords = (str: string) => Text.split(str, ' ')
  public static toLines = (str: string) => Text.split(str, /\w{80,}\W/gim)
  public static toPhrases = (str: string) => Text.split(str, '.')
  public static toChars = (str: string) => Text.split(str, '')
  public static wrap = (str: string, maxWidth: number = 80) => {
    let res = ''
    while (str.length > maxWidth) {
      let found = false
      // ? Inserts new line at first whitespace of the line
      for (let i = maxWidth - 1; i >= 0; i--) {
        if (/^\s$/.test(str.charAt(i))) {
          res = res + [str.slice(0, i), '\n'].join('')
          str = str.slice(i + 1)
          found = true
          break
        }
      }
      // ? Inserts new line at maxWidth position, the word is too long to wrap
      if (!found) {
        res += [str.slice(0, maxWidth), '\n'].join('')
        str = str.slice(maxWidth)
      }
    }
    return res + str
  }
}
// ? Random value helper utils

export class Random {
  public static uuid(l: number = 10) {
    let result = ''
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    const charactersLength = characters.length
    for (let i = 0; i < l; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength))
    }
    return result
  }
  // ? Return random float value between 0 and 1
  public static value = () => Math.random()
  public static get _value() {
    return this.value()
  }
  // ? Return random boolean
  public static bool = () => this.value() > 0.5
  public static get _bool() {
    return this.bool()
  }
  // ? Return random array with UUIDv4
  public static ids = () => Array(10).fill(1).map(Random.uuid)
  public static get _ids() {
    return this.ids()
  }
  // ? Return random integer between min and max
  public static int = (min = 0, max = 100) => Math.floor(Math.random() * (max - min + 1)) + min
  public static get _int() {
    return this.int()
  }
  // ? Return string with random character
  public static string = () => String.fromCharCode(Random.int(97, 122))
  public static get _string() {
    return this.string()
  }
  // ? Return array with provided size
  public static array = (size: number = 10) => Array(size).fill(1)
  public static get _array() {
    return this.array()
  }
  // ? Return object with uuid as key, and integer as value
  public static object = (size: number = 10) =>
    this.array(size).reduce(acc => ({ ...acc, [this.uuid()]: this.int() }), {})
  public static get _object() {
    return this.object()
  }
  // ? Return random array element
  public static element = <T extends any[]>(arr: T): T[number] => arr[this.int(0, arr.length - 1)]
  // ? Return random array with array elements
  public static elements = <T extends any[]>(arr: T, size: number = this.int(1, 10)): T[number][] =>
    this.array(size).map(() => this.element(arr))
  // ? Return random array part
  public static part = <T extends any[] | string>(str: T) => {
    const start = this.int(0, str.length - 1)
    const end = this.int(start, str.length - 1)
    return str.slice(start, end)
  }
  // ? Return random word from provided string
  public static word = <T extends string>(str: T) => this.element(str.split(' '))
  // ? Return random line from provided string
  public static line = <T extends string>(str: T) => this.element(str.split('\n'))
  // ? Return random phrase from provided string
  public static phrase = <T extends string>(str: T) => this.element(str.split('.'))
  // ? Return random char from provided string
  public static char = <T extends string>(str: T) => this.element(str.split(''))
  // ? Return random key from provided object
  public static objectKey = <T extends object>(obj: T): keyof T => this.element(Object.keys(obj)) as keyof T
  // ? Return random value from provided object
  public static objectValue = <T extends object>(obj: T): T[keyof T] => this.element(Object.values(obj))
  // ? Return random entry from provided object
  public static objectEntry = <T extends object>(obj: T): [keyof T, T[keyof T]] => {
    const k = this.objectKey(obj)
    return [k, obj[k]]
  }
  public static arrayDouble = (arr: any[]) => [...arr, ...arr] //* <- Genius!
  public static range = () => random().toFixed(2)
  public static float = (min = 0.01, max = 0.99) => (random() * (max - min) + min).toFixed(2)
  public static number = (min = 1, max = 100) => ~~(random() * (max - min)) + min
  public static boolean = (chance = 50) => this.number(1, 100) > chance
  public static numbers = (size = 10, max = 100) => this.array(size).map(() => this.number(0, max))
  public static powerOfTwo = (max = 10) => 2 ** this.number(1, max)
  public static numbersDeep = (len = 10, max = 4) => this.numbers(len, max).map(v => (v > 1 ? this.numbers(v, max) : v))
  public static values = (arr: any[]) => this.array(10).map(v => this.arrayElement(arr))
  public static arrays = (size = 10, maxDeep = 5) => this.array(size).map(v => this.array(this.number(2, maxDeep)))
  public static arrayPart = (arr: any[], chance = 20) => arr.filter((v, i) => this.boolean(chance))
  public static arrayGrow = (arr: any[], growSize = 10) => [
    ...arr,
    ...this.array(growSize).map((v, i) => this.arrayElement(arr)),
  ]
  public static arraySequence = (start = 1, end = 100) => this.array(end).map((v, i) => start + i)
  public static arrayChange = (size = 10, arr: any[]) =>
    this.arrayElement(this.array(size).map(v => this.arrayShuffle(arr)))
  public static arrayMerge = (arr: any[], ...arrays: any[][]) => this.arrayUnicals([...arr, ...arrays])
  public static arrayRepeats = (arr: any[], repeats = 2) =>
    this.array(repeats).reduce((acc, v) => [...acc, ...arr], arr)
  public static arrayUnicals = (arr: any[]) => [...new Set([...arr])]
  public static arrayShuffle = (arr: any[]) => arr.sort(() => this.value() - 0.5)
  public static arrayShuffles = (arr: any[], repeats = 2) => this.arrayShuffle(this.arrayRepeats(arr, repeats))
  public static arrayShuffleUnicals = (arr: any[]) =>
    this.arrayUnicals(this.array(arr.length * 2).map(v => this.arrayShuffle(arr)))
  public static arrayIndex = (arr: any[]) => arr && this.number(0, arr.length)
  public static arrayElement = (arr: any[]) => arr && arr[this.arrayIndex(arr)]
  public static arrayDoubleSome = (arr: any[]) => this.arrayShuffles(arr).map(v => (this.boolean(20) ? [v, v] : v))
  // NOTES
  public static noteChar = (): TNoteChar => this.arrayElement(NOTE_CHARS)
  public static noteElement = (): TNote => this.arrayElement(NOTES)
  public static octave = (min = 2, max = 8): TOctave => this.number(min, max) as TOctave
  public static note = (octave: TOctave = this.octave()): TNote => `${this.noteChar()}${octave}`
  public static notes = (size = 10, octave?: TOctave): TNote[] =>
    Random.array(size).map((v?: any) => Random.note(octave))
  public static scale = (): TScale => this.arrayElement(SCALES)
  public static durationChar = (): TDurationChar => this.arrayElement(DURATION_CHARS)
  public static duration = (): TDuration => this.arrayElement(DURATIONS)
  public static intervalChar = (): TIntervalChar => this.arrayElement(INTERVAL_CHARS)
  public static velocity = () => 0.75 + Random._value / 3
  public static tuningName = (): TTuningName => Random.arrayElement(TUNING_NAMES) as TTuningName
  public static tuning = (): IGuitarTuning[TTuningName] => GUITAR_TUNINGS[Random.tuningName()]
  // IGuitarTuning[TTuningName]
  public static noteValues = (note: TNote) => ({ note, duration: Random.duration(), velocity: Random.velocity() })
  public static noteParse = (str: string) => {
    const matched = str.trim().match(/^([a-g#]+)(\d)$/i) || [DEFAULTS.Note, DEFAULTS.NoteChar, DEFAULTS.Octave]
    return { note: matched[0], char: matched[1], octave: matched?.[2] ?? 1 } as {
      note: TNote
      char: TNoteChar
      octave: TOctave
    }
  }
  public static toMaxOctave = (octave: number | TOctave, def: TOctave = DEFAULTS.Octave): TOctave =>
    isOctave(octave) ? octave : def
  public static noteToChar = (note: TNote | TNoteChar) => note.match(/^[a-g#]{1,2}/im)?.[0]
  public static noteIndex = (note: TNote | TNoteChar) => NOTES.indexOf(note)
  public static noteStep = (noteOrChar: TNote | TNoteChar, step = 1) => {
    let { char, octave } = Random.noteParse(noteOrChar)
    let noteIndex = Random.noteIndex(char)
    let newIndex = noteIndex + step
    const l = NOTES.length
    if (newIndex === l) {
      octave = this.toMaxOctave(octave + 1, octave)
      newIndex = 0
    } else if (newIndex > l) {
      octave = this.toMaxOctave(octave + Math.floor(newIndex / l), octave)
      newIndex = newIndex % l
    }
    return `${NOTES[newIndex]}${octave}`
  }
  public static getScale = (note: TNote, scale: TScale) =>
    Teoria.note(note)
      .scale(scale)
      .simple()
      .map((char: TNoteChar) => `${char}${Random.octave()}`)
  public static melody = (root: TNote, scale: TScale, size: TMelodySize) => {
    const scaleNotes = Random.getScale(root, scale)
    const melody = Array(size)
      .fill(root)
      .map(() => Random.arrayElement(scaleNotes))
    return this.arrayShuffles(melody)
  }
  public static noteSteps = (note: TNote, size: TGuitarFret = 24) =>
    Array(size)
      .fill(note)
      .map((v, i) => this.noteStep(v, i))
  public static rhythmValues = (size = 10, max = 4) => this.numbers(size, max)
  public static rhythmValuesDeep = (size = 10, max = 4) => this.numbersDeep(size, max)
  public static rhythmNotes = (size = 10) => this.numbers(size, 4).map(v => (v > 1 ? this.notes(v) : this.note()))
  public static colorName = (): TColorName => this.arrayElement(COLOR_NAMES)
  public static colorHex = (): TColorCode => this.arrayElement(COLOR_CODES)
  public static colorClassName = (): TColorClassname => this.arrayElement(COLOR_CLASSNAMES)
  public static styleColorGradient = () => `${this.colorHex()} ${this.number(0, 100)}.00%`
  public static styleBackgroundGradient = () =>
    `linear-gradient(${this.number(0, 120)}.00deg, ${this.styleColorGradient()}, ${this.styleColorGradient()})`
}
