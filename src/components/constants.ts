import { EnumUtils } from './enums'

// export const INITIAL_STATE: IState = {
//   words: [],
//   color: '#ac3',
//   content: [],
//   strings: 6,
//   frets: 24,
//   tuning: EGu,
//   rootNote: 'C3',
//   scale: 'minorpentatonic',
//   size: 100,
//   riff: [],
//   synth: false,
//   synthName: 'PolySynth',
//   instrumentName: 'piano',
//   isPlaying: false,
//   valueOnPlay: {},
// }

const NOTES = EnumUtils.Note
const SCALES = EScale
const COLOR_CLASSNAMES = EColor
const COLOR_NAMES = EColor
const COLOR_CODES = EColor
const GUITAR_TUNINGS = {
  [EGuitarTuningName.E_STANDART]: [],
  [EGuitarTuningName.DROP_B]: [],
  [EGuitarTuningName.DROP_C]: [],
  [EGuitarTuningName.DROP_D]: [],
}
const TUNING_NAMES = Object.values(EGuitarTuningName)
const DURATION_CHARS = EDuration_chars
const INTERVAL_CHARS = EInterval_chars
const DURATIONS = EDurations

export const DURATION_CHARS = ['n'] as const
export const DURATIONS = ['4n', '@4n', '.4n', '8n'] as const
export const INTERVAL_CHARS = ['P1', 'M2', 'M3', 'P4', 'P5', 'M6', 'M7'] as const
