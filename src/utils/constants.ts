// import { writeFileSync } from 'fs'
import { SAMPLES, SVG } from './files'
import { IState, TNote, TOctave, TTuningName } from './interfaces'

export type Key = string | number
export type R = Record<string, any>

const isObject = (v: any): v is R => typeof v === 'object' && v !== null

type ToDesc<T> = T extends { desc: infer Desc }
  ? Desc
  : T extends { value: infer V }
  ? 'Source'
  : T extends (...p: any) => any
  ? 'Function'
  : T extends [string, any]
  ? 'Entry'
  : T extends any[]
  ? 'Array'
  : T extends Record<string, any>
  ? 'Record'
  : T extends { [k: Key]: any }
  ? 'Object'
  : T extends Promise<any>
  ? 'Promise'
  : T extends string
  ? 'String'
  : T extends number
  ? 'Number'
  : T extends boolean
  ? 'Boolean'
  : T extends null
  ? 'Null'
  : T extends undefined
  ? 'Undefined'
  : T extends unknown
  ? 'Unknown'
  : T extends any
  ? 'Any'
  : T extends never
  ? 'Never'
  : 'Any'

export class Constants {
  static readonly TYPEOF = ['string', 'number', 'boolean', 'object', 'symbol', 'bigint', 'undefined'] as const

  static readonly TYPEDESC = [
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
  ] as const

  static readonly OCTAVES = [1, 2, 3, 4, 6, 7, 8] as const

  static readonly GUITAR_STRINGS = [6, 4, 5, 6, 7, 8] as const

  static readonly GUITAR_FRETS = [24, 21, 24, 27] as const

  static readonly MELODY_SIZES = [100, 200, 300, 400, 500] as const

  static readonly NOTE_CHARS = [
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
  ] as const

  public static readonly NOTES = Constants.NOTE_CHARS.reduce((acc: string[], noteChar: string) => {
    const mixed = Constants.OCTAVES.reduce((acc2: string[], octave: TOctave) => [...acc2, `${noteChar}${octave}`], [])
    return [...acc, ...mixed]
  }, [])

  public static readonly SCALES = [
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
  ] as const
  public static readonly COLORS = [
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
  ] as const
  public static readonly SYNTH_NAMES = [
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
  ] as const
  public static readonly INSTRUMENT_NAMES = [
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
  ] as const
  public static readonly TUNING_NAMES = ['E Standart', 'Drop B', 'Drop C', 'Drop D'] as const
  public static readonly COLOR_CLASSNAMES = [
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
  ] as const
  public static readonly COLOR_NAMES = [
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
  ] as const
  public static readonly COLOR_CODES = [
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
  ] as const
  public static readonly DURATION_CHARS = ['n', '+', '.', '@'] as const
  public static readonly DURATIONS = ['4n', '@4n', '.4n', '8n'] as const
  public static readonly INTERVAL_CHARS = ['P1', 'M2', 'M3', 'P4', 'P5', 'M6', 'M7'] as const

  // ! =====> Object values <======
  public static readonly GUITAR_TUNINGS = {
    'E Standart': ['E2', 'A2', 'D3', 'G3', 'B4', 'E4'],
    'Drop B': ['B2', 'F#2', 'B3', 'E3', 'G#3', 'C#4'],
    'Drop C': ['C2', 'G2', 'C3', 'F3', 'A4', 'D4'],
    'Drop D': ['D2', 'A2', 'D3', 'G3', 'B4', 'E4'],
  } as Readonly<{ [k in TTuningName]: TNote[] }>

  public static readonly INITIAL_STATE: IState = {
    word: '',
    words: [],
    color: this.COLORS[0],
    content: [],
    strings: this.GUITAR_STRINGS[0],
    frets: this.GUITAR_FRETS[0],
    tuning: this.TUNING_NAMES[0],
    rootNote: this.NOTES[0],
    scale: this.SCALES[0],
    size: this.MELODY_SIZES[0],
    riff: [],
    synth: false,
    synthName: this.SYNTH_NAMES[0],
    instrumentName: this.INSTRUMENT_NAMES[0],
    isPlaying: false,
    valueOnPlay: {},
  }

  public static readonly SAMPLES = SAMPLES
  public static readonly SVG = SVG

  static toKeys() {
    const keys = Object.keys(Constants)
    const filtered = keys.filter(k => k === k.toUpperCase())
    return filtered as Array<keyof typeof Constants>
  }

  static findProps<T extends Record<string, unknown>, P extends any[]>(obj: T, props: P) {
    const objProps = isObject(obj) ? (Object.keys(obj) as (keyof T)[]) : []
    const finded = props.filter(k => objProps.includes(k)) as (P extends keyof T ? P : never)[]
    const result = finded.reduce((acc, k) => ({ ...acc, [k]: obj[k] }), {})
  }

  static toJson() {
    return JSON.stringify(Constants, undefined, 2)
  }
  // static toJsonFile(filepath: string) {
  //   const keys = Object.entries(Constants).filter(([k, v]) => k === k.toUpperCase() && typeof v !== 'function')
  //   writeFileSync('constants.json', Constants.toJson())
  // }
}

// writeFileSync('constants.json', JSON.stringify({ ...Constants }, null, 2))
