import { _keys, _values } from './shortcuts'
import { S } from './types'

//! Constant Values for using in generate values, validate, etc...
export const NOTES_BASIC = ['A', 'B', 'C', 'D', 'F', 'E', 'G'] as const
export const NOTES_PRIMARY = ['A#', 'C#', 'E#', 'F#', 'G#'] as const
export const NOTES_ALT = ['Bb', 'Db', 'Eb', 'Fb', 'Ab'] as const
export const NOTES = [...NOTES_BASIC, ...NOTES_PRIMARY] as const
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
] as const

export const GUITAR_TUNINGS: Record<S, tNote[]> = {
	'E Standart': ['E2', 'A2', 'D3', 'G3', 'B4', 'E4'],
	'Drop D': ['D2', 'A2', 'D3', 'G3', 'B4', 'E4'],
	'Drop C': ['C2', 'G2', 'C3', 'F3', 'A4', 'D4'],
	'Drop B': ['B2', 'F#2', 'B3', 'E3', 'G#3', 'C#4'],
}

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
] as const

export const TUNING_NAMES = [..._keys(GUITAR_TUNINGS)] as const
export const TUNING_VALUES = [..._values(GUITAR_TUNINGS)] as const
export const DURATION_CHARS = ['n', 't'] as const
export const DURATIONS = ['4n', '@4n', '.4n', '8n'] as const
export const INTERVAL_CHARS = ['P1', 'M2', 'M3', 'P4', 'P5', 'M6', 'M7'] as const
