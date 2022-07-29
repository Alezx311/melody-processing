import { COLOR_CLASS, COLOR_CODES, COLOR_NAMES } from "./color.constants"
import { DESCRIPTION } from "./enums"
import {
	DURATIONS,
	DURATION_CHARS,
	GUITAR_TUNINGS,
	INTERVAL_CHARS,
	NOTES,
	NOTES_SHARP,
	NOTES_BEMOLE,
	SCALES,
	SYNTHS,
	TUNING_NAMES,
	TUNING_VALUES,
	NOTES_BASIC
} from "./music.constants"
import { INSTRUMENT_SAMPLES } from "./samples"
import { Primitives, _keys, _max, _min, _n, _now, _values } from "./shortcuts"
import { BLISS_FILES, BLISS_FOLDER } from "./svg_files"
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
	tScaleName,
	tSynth,
	tSynthName,
	tTuningName
} from "./types"

export class Defaults extends Primitives {
	static falsyV: null = null
	static falsyB: B = false
	static falsyN: N = 0
	static falsyS: S = ""
	static falsyA: A = []
	static falsyO: O = {}
	static falsy = [this.NULL, this.UND, this.falsyB, this.falsyN, this.falsyS]

	static truthyB: B = true
	static truthyN: N = 1
	static truthyS: S = DESCRIPTION.MESSAGE
	static truthyA: A = [true]
	static truthyO: O = { some: "value" }
	static truthy = [this.truthyB, this.truthyN, this.truthyS, this.truthyA, this.truthyO]

	static time = _now()
	static date = new Date().toUTCString()

	static rand_float = Math.random()
	static rand_bool = this.rand_float > 0.5
	static rand_int = this.rand_bool ? 1 : 0
	static rand_int_max_10 = ~~(this.rand_float * 10)
	static rand_int_max_100 = ~~(this.rand_float * 100)
	static rand_int_max_1000 = ~~(this.rand_float * 1000)

	static chars_latin = "qwertyuiopasdfghjklzxcvbnm"
	static chars_kyryllic = "йцукенгшщзхъфывапролджэячсмитьбю"
	static chars_int = "1234567890"
	static chars_special_safe = "!@#$%^&*()"
	static chars_special = `,./;'[]{ } :"<>?|\\`
	static chars_math = "/*-+"

	static int_0 = 0
	static int_1 = 1
	static int_7 = 7
	static int_42 = 42
	static int_311 = 311

	static rangeInt: [N, N] = [1, 100]
	static minInt = _min(...this.rangeInt)
	static maxInt = _max(...this.rangeInt)

	static rangeFloat: [N, N] = [0.01, 0.99]
	static minFloat = _min(...this.rangeFloat)
	static maxFloat = _max(...this.rangeFloat)

	static rangeSafe = [_n.MIN_SAFE_INTEGER, _n.MAX_SAFE_INTEGER]
	static minIntSafe = _min(...this.rangeSafe)
	static maxIntSafe = _max(...this.rangeSafe)

	static rangeIntValue = [_n.MIN_VALUE, _n.MAX_VALUE]
	static minIntValue = _min(...this.rangeIntValue)
	static maxIntValue = _max(...this.rangeIntValue)

	static toFixedLength = 2

	static noteChar: tNoteChar = "C"
	static noteOctave: tOctave = 4
	static note: tNote = `${this.noteChar}${this.noteOctave}`
	static durationValue: tDurationValue = 4
	static durationChar: tDurationChar = "n"
	static duration: tDuration = `${this.durationValue}${this.durationChar}`
	static velocity: N = 1
	static noteValues: tNoteValues = {
		char: this.noteChar,
		octave: this.noteOctave,
		note: this.note,
		duration: this.duration,
		velocity: this.velocity
	}

	static bpm: N = 120
	static humanize: B = true
	static noteMidi?: N = undefined
	static sustain?: N = undefined
	static attack?: N = undefined
	static decay?: N = undefined
	static release?: N = undefined
	static frequency?: N = undefined

	static word: S = "Empty"
	static words: S[] = [this.word]
	static color: tColorNames = "green"
	static strings: tGuitarStrings = 6
	static frets: tGuitarFrets = 24
	static tuning: tTuningName = "E Standart"
	static rootNote: tNote = "C4"
	static scale: tScaleName = "minor"
	static size: tMelodySize = 80
	static sizeOfEachPart: tMelodyPartSize = 4
	static sizeOfTotalParts: tMelodyPartSize = 4
	static riff: tNoteValues[] = []
	static synthName: tSynthName = "Synth"
	static instrumentName: tInstrumentName = "piano"
	static synth: tSynth | null = null
	static instrument: keyof tSynth | null = null
	static isPlaying: B = false
	static valueOnPlay: tNoteValues | null = null

	static state = {
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
		valueOnPlay: this.valueOnPlay
	}

	static TO_NOTE = (str: S) => str.replace("s", "#")
	static TO_FOLDER = (str: S) => str.replace("-", "-").toLowerCase()
	static TO_ID = (str: S) => str.replace("-", "_").toUpperCase()
	static TO_DIRPATH = (str: S) => `${this.INSTRUMENT_FOLDER}/${str}`
	static TO_PATH = (iFile: S, iName: S) => `${this.INSTRUMENT_FOLDER}/${this.TO_FOLDER(iName)}${iFile}`
	static TO_FILE = (str: S) => `${str}.[wav|mp3|ogg]`
	static TO_INFO = (value: S) => ({
		value,
		note: this.TO_NOTE(value),
		folder: this.TO_FOLDER(value),
		id: this.TO_ID(value),
		path: this.TO_PATH(value, this.instrumentName),
		file: this.TO_FILE(value)
	})

	static INSTRUMENT_FOLDER = "../samples"
	static INSTRUMENT_SOURCE = INSTRUMENT_SAMPLES
	static INSTRUMENT_KEYS = _keys(this.INSTRUMENT_SOURCE)
	static INSTRUMENT_VALUES = _values(this.INSTRUMENT_SOURCE).flat()
	static INSTRUMENT_SHARED = [...new Set([...this.INSTRUMENT_VALUES])]
	static INSTRUMENT_IDS = this.INSTRUMENT_KEYS.map((v) => this.TO_ID(v))
	static INSTRUMENT_NOTES = this.INSTRUMENT_SHARED.map((v) => this.TO_NOTE(v))
	static INSTRUMENT_FILES = this.INSTRUMENT_SHARED.map((v) => this.TO_FILE(v))
	static INSTRUMENT_FOLDERS = this.INSTRUMENT_KEYS.map((v) => this.TO_DIRPATH(v))

	static COLOR_CLASS = [...COLOR_CLASS]
	static COLOR_NAMES = [...COLOR_NAMES]
	static COLOR_CODES = [...COLOR_CODES]
	static COLOR_VALUES = { COLOR_CLASS, COLOR_NAMES, COLOR_CODES }

	static BLISS_ICON = (file: tBlissFile, ind: N) => ({
		file,
		ind,
		src: this.BLISS_PATHS[ind],
		word: this.BLISS_WORDS[ind]
	})
	static BLISS_FOLDER = BLISS_FOLDER
	static BLISS_FILES = [...BLISS_FILES]
	static BLISS_WORDS = this.BLISS_FILES.map((s) => s.replace(/\.svg$/i, ""))
	static BLISS_PATHS = this.BLISS_FILES.map((s) => `${this.BLISS_FOLDER}/${s}`)
	static BLISS_ICONS = this.BLISS_FILES.map(this.BLISS_ICON)
	static BLISS_VALUES = {
		BLISS_FOLDER: this.BLISS_FOLDER,
		BLISS_FILES: this.BLISS_FILES,
		BLISS_WORDS: this.BLISS_WORDS,
		BLISS_PATHS: this.BLISS_PATHS,
		BLISS_ICONS: this.BLISS_ICONS
	}

	static MUSIC_GUITAR_TUNINGS = { ...GUITAR_TUNINGS }
	static MUSIC_NOTES_BASIC = [...NOTES_SHARP]
	static MUSIC_NOTES_SHARP = [...NOTES_BASIC, ...NOTES_SHARP]
	static MUSIC_NOTES_BEMOLE = [...NOTES_BASIC, ...NOTES_BEMOLE]
	static MUSIC_NOTES = [...NOTES]
	static MUSIC_SCALES = [...SCALES]
	static MUSIC_SYNTHS = [...SYNTHS]
	static MUSIC_TUNING_NAMES = [...TUNING_NAMES]
	static MUSIC_TUNING_VALUES = [...TUNING_VALUES]
	static MUSIC_DURATION_CHARS = [...DURATION_CHARS]
	static MUSIC_DURATIONS = [...DURATIONS]
	static MUSIC_INTERVAL_CHARS = [...INTERVAL_CHARS]
}
