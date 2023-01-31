export enum ETypeOf {
  string = 'string',
  number = 'number',
  boolean = 'boolean',
  object = 'object',
  symbol = 'symbol',
  bigint = 'bigint',
  undefined = 'undefined',
}

export enum ETypeDesc {
  string = 'string',
  number = 'number',
  boolean = 'boolean',
  object = 'object',
  symbol = 'symbol',
  bigint = 'bigint',
  array = 'array',
  null = 'null',
  undefined = 'undefined',
  unknown = 'unknown',
  any = 'any',
  never = 'never',
  default = 'default',
}

//! Constant Values for using in generate values, validate, etc...

export enum ENote {
  A_BEMOLE = 'Bb',
  C_BEMOLE = 'Cb',
  D_BEMOLE = 'Db',
  E_BEMOLE = 'Eb',
  G_BEMOLE = 'Gb',
  A_SHARP = 'A#',
  C_SHARP = 'C#',
  D_SHARP = 'D#',
  E_SHARP = 'E#',
  G_SHARP = 'G#',
  A = 'A',
  B = 'B',
  C = 'C',
  D = 'D',
  F = 'F',
  E = 'E',
  G = 'G',
}

export enum EScale {
  MAJOR = 'major',
  MINOR = 'minor',
  IONIAN = 'ionian',
  DORIAN = 'dorian',
  PHRYGIAN = 'phrygian',
  LYDIAN = 'lydian',
  MIXOLYDIAN = 'mixolydian',
  AEOLIAN = 'aeolian',
  LOCRIAN = 'locrian',
  MAJORPENTATONIC = 'majorpentatonic',
  MINORPENTATONIC = 'minorpentatonic',
  CHROMATIC = 'chromatic',
  HARMONICCHROMATIC = 'harmonicchromatic',
  BLUES = 'blues',
  DOUBLEHARMONIC = 'doubleharmonic',
  FLAMENCO = 'flamenco',
  HARMONICMINOR = 'harmonicminor',
  MELODICMINOR = 'melodicminor',
  WHOLETONE = 'wholetone',
}

export enum EColor {
  CLASS_PRIMARY = 'primary',
  CLASS_SECONDARY = 'secondary',
  CLASS_SUCCESS = 'success',
  CLASS_DANGER = 'danger',
  CLASS_WARNING = 'warning',
  CLASS_INFO = 'info',
  CLASS_LIGHT = 'light',
  CLASS_DARK = 'dark',
  CLASS_BODY = 'body',
  CLASS_WHITE = 'white',
  CLASS_TRANSPARENT = 'transparent',
  // ? Name
  NAME_BLUE = 'blue',
  NAME_INDIGO = 'indigo',
  NAME_PURPLE = 'purple',
  NAME_PINK = 'pink',
  NAME_RED = 'red',
  NAME_ORANGE = 'orange',
  NAME_YELLOW = 'yellow',
  NAME_GREEN = 'green',
  NAME_TEAL = 'teal',
  NAME_CYAN = 'cyan',
  // ? HEX
  HEX_RED = '#ff0000',
  HEX_ORANGE = '#ff4e00',
  HEX_ORANGE2 = '#db7b00',
  HEX_YELLOW = '#ffcc00',
  HEX_LIME = '#e4ed00',
  HEX_GREEN = '#81d700',
  HEX_CYAN = '#00ffb4',
  HEX_CYAN2 = '#00ffea',
  HEX_BLUE = '#00baff',
  HEX_BLUEDARK = '#3c00ff',
  HEX_VIOLETDARK = '#a800ff',
  HEX_VIOLET = '#ff00fd',
}

export enum ESynthName {
  AM = 'AMSynth',
  FM = 'FMSynth',
  DUO = 'DuoSynth',
  MEMBRANE = 'MembraneSynth',
  METAL = 'MetalSynth',
  MONO = 'MonoSynth',
  NOISE = 'NoiseSynth',
  PLUCK = 'PluckSynth',
  POLY = 'PolySynth',
  SYNTH = 'Synth',
  DEFAULT = 'Synth',
}

export enum EInstrumentName {
  BASS_ELECTRIC = 'bass-electric',
  BASSOON = 'bassoon',
  CELLO = 'cello',
  CLARINET = 'clarinet',
  CONTRABASS = 'contrabass',
  FLUTE = 'flute',
  FRENCH_HORN = 'french-horn',
  GUITAR_ACOUSTIC = 'guitar-acoustic',
  GUITAR_ELECTRIC = 'guitar-electric',
  GUITAR_NYLON = 'guitar-nylon',
  HARMONIUM = 'harmonium',
  HARP = 'harp',
  ORGAN = 'organ',
  PIANO = 'piano',
  SAXOPHONE = 'saxophone',
  TROMBONE = 'trombone',
  TRUMPET = 'trumpet',
  TUBA = 'tuba',
  VIOLIN = 'violin',
  XYLOPHONE = 'xylophone',
}

export enum EOctave {
  0,
  1,
  2,
  3,
  4,
  6,
  7,
  8,
  DEFAULT = '',
}

export enum EGuitarString {
  4,
  5,
  6,
  7,
  8,
  DEFAULT = 6,
}

export enum EGuitarFrets {
  21,
  24,
  27,
  DEFAULT = 24,
}

export enum EMelodySize {
  100,
  200,
  300,
  400,
  500,
  DEFAULT = 100,
}

export enum EGuitarTuningName {
  DROP_D = 'Drop D',
  DROP_C = 'Drop C',
  DROP_B = 'Drop B',
  E_STANDART = 'E Standart',
  DEFAULT = 'E Standart',
}

export class EnumUtils {
  static toSources = <T>(source: T, name: string) => {
    const keys: Array<keyof T> = [...Object.keys(source)]
    const values: Array<T[keyof T]> = [...Object.values(source)]
    const json = JSON.stringify({ keys, values, name }, null, 2)

    const isKey = (v?: any): v is keyof T => keys.includes(v)
    const isValue = (v?: any): v is T[keyof T] => values.includes(v)
    const to = (v?: any) => (isKey(v) ? source[v] : isValue(v) ? v : false)

    return { name, keys, values, json, isKey, isValue, to }
  }

  static TypeOf = this.toSources(ETypeOf, 'ETypeOf')
  static TypeDesc = this.toSources(ETypeDesc, 'ETypeDesc')
  static Note = this.toSources(ENote, 'ENote')
  static Scale = this.toSources(EScale, 'EScale')
  static Color = this.toSources(EColor, 'EColor')
  static SynthName = this.toSources(ESynthName, 'ESynthName')
  static InstrumentName = this.toSources(EInstrumentName, 'EInstrumentName')

  static Octave = this.toSources(EOctave, 'EOctave')
  static GuitarString = this.toSources(EGuitarString, 'EGuitarString')
  static GuitarFrets = this.toSources(EGuitarFrets, 'EGuitarFrets')
  static MelodySize = this.toSources(EMelodySize, 'EMelodySize')
  static GuitarTuningName = this.toSources(EGuitarTuningName, 'EGuitarTuningName')
}
