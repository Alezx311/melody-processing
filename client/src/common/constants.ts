import { COLOR_CLASS, COLOR_CODES, COLOR_NAMES } from './color.constants'
import { DESCRIPTION } from './enums'
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
import { _a, _entries, _fromE, _n, _now, _values } from './shortcuts'
import { SVG_FILES, SVG_FOLDER } from './svg_files'
import { A, B, N, O, S, tSvgFile } from './types'
export class Defaults {
	static _val = null
	static _bln: B = false
	static _num: N = 0
	static _str: S = ''
	static _arr: A = []
	static _obj: O = {}
	static falsy = [null, undefined, this._bln, this._num, this._str]
	static val = false
	static bln: B = true
	static num: N = 1
	static str: S = DESCRIPTION.MESSAGE
	static arr: A = [true]
	static obj: O = { some: 'value' }
	static truthy = [this.bln, this.num, this.str, this.arr, this.obj]
	static func = (): null => null
	static time = _now()
	static date = new Date().toUTCString()
	static zero = 0
	static intMin = 1
	static int42 = 42
	static rangeMin = 0
	static rangeMax = 100
	static floatMin = 0.01
	static floatMax = 0.99
	static floatLength = 2
	static intMax = _n.MAX_SAFE_INTEGER
	static range: [N, N] = [this.rangeMin, this.rangeMax]
	static state = {
		word: '',
		words: [],
		color: '#fff',
		content: [],
		strings: 6,
		frets: 24,
		tuning: 'E Standart',
		rootNote: 'C4',
		scale: 'minor',
		size: 500,
		riff: [],
		synth: false,
		synthName: 'PolySynth',
		instrumentName: '',
		isPlaying: false,
		valueOnPlay: {},
	}
}

export class Value extends Defaults {
	static COLOR_CLASS = [...COLOR_CLASS]
	static COLOR_NAMES = [...COLOR_NAMES]
	static COLOR_CODES = [...COLOR_CODES]
	static COLOR_VALUES = { COLOR_CLASS, COLOR_NAMES, COLOR_CODES }

	static SVG_ICON = (file: tSvgFile, ind: N) => ({ file, ind, src: this.SVG_PATHS[ind], word: this.SVG_WORDS[ind] })
	static SVG_FOLDER = SVG_FOLDER
	static SVG_FILES = [...SVG_FILES]
	static SVG_WORDS = this.SVG_FILES.map(s => s.replace(/\.svg$/i, ''))
	static SVG_PATHS = this.SVG_FILES.map(s => `${this.SVG_FOLDER}/${s}`)
	static SVG_ICONS = this.SVG_FILES.map(this.SVG_ICON)
	static SVG_VALUES = {
		SVG_FOLDER: this.SVG_FOLDER,
		SVG_FILES: this.SVG_FILES,
		SVG_WORDS: this.SVG_WORDS,
		SVG_PATHS: this.SVG_PATHS,
		SVG_ICONS: this.SVG_ICONS,
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
		SVG_FILES: ~~SVG_FILES?.length,
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
