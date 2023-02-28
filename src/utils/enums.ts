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
  DEFAULT = '',
  V1 = 1,
  V2 = 2,
  V3 = 3,
  V4 = 4,
  V6 = 6,
  V7 = 7,
  V8 = 8,
}

export enum EGuitarString {
  DEFAULT = 6,
  V4 = 4,
  V5 = 5,
  V6 = 6,
  V7 = 7,
  V8 = 8,
}

export enum EGuitarFrets {
  DEFAULT = 24,
  V21 = 21,
  V24 = 24,
  V27 = 27,
}

export enum EMelodySize {
  DEFAULT = 300,
  V100 = 100,
  V200 = 200,
  V300 = 300,
  V400 = 400,
  V500 = 500,
}

export enum EGuitarTuningName {
  DROP_D = 'Drop D',
  DROP_C = 'Drop C',
  DROP_B = 'Drop B',
  E_STANDART = 'E Standart',
  DEFAULT = 'E Standart',
}
