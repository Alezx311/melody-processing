import { COLOR_CLASS, COLOR_CODES, COLOR_NAMES } from './color.constants'
import { DESCRIPTION } from './enums'
import { tSynth } from './helpers'
import {
	DURATIONS,
	DURATION_CHARS,
	GUITAR_TUNINGS,
	INTERVAL_CHARS,
	NOTES,
	NOTES_ALT,
	NOTES_BASIC,
	NOTES_PRIMARY,
	SCALES,
	SYNTHS,
	TUNING_NAMES,
	TUNING_VALUES,
} from './music.constants'
import { INSTRUMENT_SAMPLES } from './samples'
import { Primitives, _keys, _min, _n, _now, _val } from './shortcuts'
import { BLISS_FILES, BLISS_FOLDER } from './svg_files'
import {
	A,
	B,
	N,
	O,
	S,
	tBlissFile,
	tColorNames,
	tDuration,
	tDurationChar,
	tDurationValue,
	tGuitarFrets,
	tGuitarStrings,
	tInstrumentName,
	tMelodyPartSize,
	tMelodySize,
	tNote,
	tNoteChar,
	tNoteValues,
	tOctave,
	tScale,
	tSynthName,
	tTuningName,
} from './types'

export class Defaults extends Primitives {
	static falsyV: any = null
	static falsyB: B = false
	static falsyN: N = 0
	static falsyS: S = ''
	static falsyA: A = []
	static falsyO: O = {}
	static falsy = [this.NULL, this.UND, this.falsyB, this.falsyN, this.falsyS]

	static truthyB: B = true
	static truthyN: N = 1
	static truthyS: S = DESCRIPTION.MESSAGE
	static truthyA: A = [true]
	static truthyO: O = { some: 'value' }
	static truthy = [this.truthyB, this.truthyN, this.truthyS, this.truthyA, this.truthyO]

	static v = null

	static time = _now()
	static date = new Date().toUTCString()

	static int_0 = 0
	static int_1 = 1
	static int_42 = 42

	static rangeInt: [N, N] = [1, 100]
	static minInt = _min(...this.rangeInt)
	static maxInt = _min(...this.rangeInt)

	static rangeFloat: [N, N] = [0.01, 0.99]
	static minFloat = 0.01
	static maxFloat = 0.99

	static rangeSafe = [_n.MIN_SAFE_INTEGER, _n.MAX_SAFE_INTEGER]
	static rangeValue = [_n.MIN_VALUE, _n.MAX_VALUE]

	static toFixedLength = 2

	static noteCharDefault: tNoteChar = 'C'
	static noteOctaveDefault: tOctave = 4
	static noteDefault: tNote = `${this.noteCharDefault}${this.noteOctaveDefault}`
	static durationValueDefault: tDurationValue = 4
	static durationCharDefault: tDurationChar = 'n'
	static durationDefault: tDuration = `${this.durationValueDefault}${this.durationCharDefault}`
	static velocityDefault: N = 1
	static noteValuesDefault: tNoteValues = {
		char: this.noteCharDefault,
		octave: this.noteOctaveDefault,
		note: this.noteDefault,
		duration: this.durationDefault,
		velocity: this.velocityDefault,
	}

	static synthNameDefault: tSynthName = 'Synth'
	static bpmDefault: N = 120
	static humanizeDefault: B = true
	static noteMidiDefault?: N = undefined
	static sustainDefault?: N = undefined
	static attackDefault?: N = undefined
	static decayDefault?: N = undefined
	static releaseDefault?: N = undefined
	static frequencyDefault?: N = undefined

	static word: S = 'Empty'
	static words: S[] = [this.word]
	static color: tColorNames = 'green'
	static strings: tGuitarStrings = 6
	static frets: tGuitarFrets = 24
	static tuning: tTuningName = 'E Standart'
	static rootNote: tNote = 'C4'
	static scale: tScale = 'minor'
	static size: tMelodySize = 80
	static sizeOfEachPart: tMelodyPartSize = 4
	static sizeOfTotalParts: tMelodyPartSize = 4
	static riff: tNoteValues[] = []
	static synthName: tSynthName = 'Synth'
	static instrumentName: tInstrumentName = 'piano'
	static synth: tSynth | null = null
	static instrument: any = null
	static isPlaying: B = false
	static valueOnPlay: tNoteValues | null = null

	static stateDefault = {
		word: this.word,
		words: this.words,
		color: this.color,
		strings: this.strings,
		frets: this.frets,
		tuning: this.tuning,
		rootNote: this.rootNote,
		scale: this.scale,
		size: this.size,
		sizeOfEachPart: this.sizeOfEachPart,
		sizeOfTotalParts: this.sizeOfTotalParts,
		riff: this.riff,
		synthName: this.synthName,
		instrumentName: this.instrumentName,
		synth: this.synth,
		instrument: this.instrument,
		isPlaying: this.isPlaying,
		valueOnPlay: this.valueOnPlay,
	}

	static TO_NOTE = (str: S) => str.replace('s', '#')
	static TO_FOLDER = (str: S) => str.replace('-', '-').toLowerCase()
	static TO_ID = (str: S) => str.replace('-', '_').toUpperCase()
	static TO_DIRPATH = (str: S) => `${this.INSTRUMENT_FOLDER}/${str}`
	static TO_PATH = (iFile: S, iName: S) => `${this.INSTRUMENT_FOLDER}/${this.TO_FOLDER(iName)}${iFile}`
	static TO_FILE = (str: S) => `${str}.[wav|mp3|ogg]`
	static TO_INFO = (value: S) => ({
		value,
		note: this.TO_NOTE(value),
		folder: this.TO_FOLDER(value),
		id: this.TO_ID(value),
		path: this.TO_PATH(value, this.instrumentName),
		file: this.TO_FILE(value),
	})

	static INSTRUMENT_FOLDER = '../samples'
	static INSTRUMENT_SOURCE = INSTRUMENT_SAMPLES
	static INSTRUMENT_KEYS = [..._keys(this.INSTRUMENT_SOURCE)] as const
	static INSTRUMENT_VALUES = [..._val(this.INSTRUMENT_SOURCE).reduce((acc, arr) => [...acc, ...arr], [])] as const
	static INSTRUMENT_SHARED = [...new Set([...this.INSTRUMENT_VALUES])] as const
	static INSTRUMENT_IDS = [...this.INSTRUMENT_KEYS.map(v => this.TO_ID(v))] as const
	static INSTRUMENT_NOTES = [...this.INSTRUMENT_VALUES.map(v => this.TO_NOTE(v))] as const
	static INSTRUMENT_FILES = [...this.INSTRUMENT_VALUES.map(v => this.TO_FILE(v))] as const
	static INSTRUMENT_FOLDERS = [...this.INSTRUMENT_KEYS.map(v => this.TO_DIRPATH(v))] as const

	static COLOR_CLASS = [...COLOR_CLASS]
	static COLOR_NAMES = [...COLOR_NAMES]
	static COLOR_CODES = [...COLOR_CODES]
	static COLOR_VALUES = { COLOR_CLASS, COLOR_NAMES, COLOR_CODES }

	static BLISS_ICON = (file: tBlissFile, ind: N) => ({
		file,
		ind,
		src: this.BLISS_PATHS[ind],
		word: this.BLISS_WORDS[ind],
	})
	static BLISS_FOLDER = BLISS_FOLDER
	static BLISS_FILES = [...BLISS_FILES] as const
	static BLISS_WORDS = this.BLISS_FILES.map(s => s.replace(/\.svg$/i, ''))
	static BLISS_PATHS = this.BLISS_FILES.map(s => `${this.BLISS_FOLDER}/${s}`)
	static BLISS_ICONS = this.BLISS_FILES.map(this.BLISS_ICON)
	static BLISS_VALUES = {
		BLISS_FOLDER: this.BLISS_FOLDER,
		BLISS_FILES: this.BLISS_FILES,
		BLISS_WORDS: this.BLISS_WORDS,
		BLISS_PATHS: this.BLISS_PATHS,
		BLISS_ICONS: this.BLISS_ICONS,
	}

	static MUSIC_GUITAR_TUNINGS = { ...GUITAR_TUNINGS }
	static MUSIC_NOTES_BASIC = [...NOTES_BASIC]
	static MUSIC_NOTES_PRIMARY = [...NOTES_PRIMARY]
	static MUSIC_NOTES_ALT = [...NOTES_ALT]
	static MUSIC_NOTES = [...NOTES]
	static MUSIC_SCALES = [...SCALES]
	static MUSIC_SYNTHS = [...SYNTHS]
	static MUSIC_TUNING_NAMES = [...TUNING_NAMES]
	static MUSIC_TUNING_VALUES = [...TUNING_VALUES]
	static MUSIC_DURATION_CHARS = [...DURATION_CHARS]
	static MUSIC_DURATIONS = [...DURATIONS]
	static MUSIC_INTERVAL_CHARS = [...INTERVAL_CHARS]

	static MUSIC_VALUES = {
		MUSIC_NOTES_BASIC: this.MUSIC_NOTES_BASIC,
		MUSIC_NOTES_PRIMARY: this.MUSIC_NOTES_PRIMARY,
		MUSIC_NOTES_ALT: this.MUSIC_NOTES_ALT,
		MUSIC_NOTES: this.MUSIC_NOTES,
		MUSIC_SCALES: this.MUSIC_SCALES,
		MUSIC_GUITAR_TUNINGS: this.MUSIC_GUITAR_TUNINGS,
		MUSIC_SYNTHS: this.MUSIC_SYNTHS,
		MUSIC_TUNING_NAMES: this.MUSIC_TUNING_NAMES,
		MUSIC_TUNING_VALUES: this.MUSIC_TUNING_VALUES,
		MUSIC_DURATION_CHARS: this.MUSIC_DURATION_CHARS,
		MUSIC_DURATIONS: this.MUSIC_DURATIONS,
		MUSIC_INTERVAL_CHARS: this.MUSIC_INTERVAL_CHARS,
	}

	static TOTAL = {
		BLISS_FILES: ~~BLISS_FILES?.length,
		COLOR_CLASS: ~~COLOR_CLASS?.length,
		COLOR_NAMES: ~~COLOR_NAMES?.length,
		COLOR_CODES: ~~COLOR_CODES?.length,
		NOTES_BASIC: ~~NOTES_BASIC?.length,
		NOTES_PRIMARY: ~~NOTES_PRIMARY?.length,
		NOTES_ALT: ~~NOTES_ALT?.length,
		NOTES: ~~NOTES?.length,
		SCALES: ~~SCALES?.length,
		SYNTHS: ~~SYNTHS?.length,
		TUNING_NAMES: ~~TUNING_NAMES?.length,
		TUNING_VALUES: ~~TUNING_VALUES?.length,
		DURATION_CHARS: ~~DURATION_CHARS?.length,
		DURATIONS: ~~DURATIONS?.length,
		INTERVAL_CHARS: ~~INTERVAL_CHARS?.length,
	}
}
