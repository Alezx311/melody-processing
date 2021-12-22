import { _keys } from './shortcuts'
import {
	A,
	S,
	tDuration,
	tDurationFormat,
	tInterval,
	tNote,
	tNoteA,
	tNoteB,
	tNoteBasic,
	tNoteOnly,
	tScale,
	tSynth,
	tTuning,
} from './types'

//! Constant Values for using in generate values, validate, etc...

export const NOTES_BASIC: tNoteBasic[] = ['A', 'B', 'C', 'D', 'F', 'E', 'G']
export const NOTES_PRIMARY: tNoteA[] = ['A#', 'C#', 'E#', 'F#', 'G#']
export const NOTES_ALT: tNoteB[] = ['Bb', 'Db', 'Eb', 'Fb', 'Ab']
export const NOTES = [...NOTES_BASIC, ...NOTES_PRIMARY]
export const SCALES: tScale[] = [
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
]
export const GUITAR_TUNINGS: Record<tTuning, tNote[]> = {
	'E Standart': ['E2', 'A2', 'D3', 'G3', 'B4', 'E4'],
	'Drop D': ['D2', 'A2', 'D3', 'G3', 'B4', 'E4'],
	'Drop C': ['C2', 'G2', 'C3', 'F3', 'A4', 'D4'],
	'Drop B': ['B2', 'F#2', 'B3', 'E3', 'G#3', 'C#4'],
}

export const SYNTHS: tSynth[] = [
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
]

export const TUNING_NAMES = _keys(GUITAR_TUNINGS) as tTuning[]
export const DURATION_CHARS: tDurationFormat[] = ['n', 't']
export const DURATIONS: tDuration[] = ['4n', '@4n', '.4n', '8n']
export const INTERVAL_CHARS: tInterval[] = ['P1', 'M2', 'M3', 'P4', 'P5', 'M6', 'M7']

export class ValueMusic {
	static NOTES_BASIC = NOTES_BASIC
	static NOTES_PRIMARY = NOTES_PRIMARY
	static NOTES_ALT = NOTES_ALT
	static NOTES = NOTES
	static SCALES = SCALES
	static GUITAR_TUNINGS = GUITAR_TUNINGS
	static SYNTHS = SYNTHS
	static TUNING_NAMES = TUNING_NAMES
	static DURATION_CHARS = DURATION_CHARS
	static DURATIONS = DURATIONS
	static INTERVAL_CHARS = INTERVAL_CHARS
	static values = {
		NOTES_BASIC,
		NOTES_PRIMARY,
		NOTES_ALT,
		NOTES,
		SCALES,
		GUITAR_TUNINGS,
		SYNTHS,
		TUNING_NAMES,
		DURATION_CHARS,
		DURATIONS,
		INTERVAL_CHARS,
	}
}
