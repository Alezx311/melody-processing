import Tone from 'tone'

import { Defaults } from './constants'
import { _a, _fromE, _json, _keys, _max, _min, _rand } from './shortcuts'
import {
	A,
	F,
	N,
	O,
	S,
	tBlissFile,
	tBlissIcon,
	tBlissPath,
	tBlissWord,
	tDuration,
	tDurationChar,
	tDurationValue,
	tInstrumentName,
	tNote,
	tNoteChar,
	tNoteValues,
	tOctave,
	tScaleName,
	tSynth,
	tSynthName,
	U,
} from './types'
const Teoria = require('teoria')
// import Teoria from 'teoria'
// export type tSynth = typeof Tone[tSynthName]

export class Helpers {
	static defaults = Defaults

	public static descDefault: S = 'Unknown Or Undefined value'

	public static descB: S = 'Boolean'

	public static descN: S = 'Number'

	public static descS: S = 'String'

	public static descA: S = 'Array'

	public static descO: S = 'Object'

	public static descD: S = 'this'

	public static descMessage: S = 'Message'

	public static descExample: S = 'Example'

	public static toDesc = (v: S = 'Description Message') => `\n\t${v}`

	public static formatToDiv = (str = this.descD, max = 40, char = '#') => {
		const div = char.repeat(_min(~~str?.length, ~~max))
		return `\n${div}\n${str}\n${div}`
	}

	public static formatToDesc = (v: S = this.descDefault) =>
		this.formatToDiv(`\nType: ${typeof v}\nIsTruthy: ${!!v}\nValue: ${v}`)

	public static formatToInsp = (v: S = this.descDefault) => this.formatToDiv(`Object: ${_json(v)}`)

	public static formatToTitle = (v: S = this.descDefault) => this.formatToDiv(`${v}`.toUpperCase())
	//! Descriptions for messages, events, etc

	public static arr = (s: N) => _a(~~s).fill(1)

	public static val = (min: N = Defaults.minInt, max: N = Defaults.maxInt) => _rand() * (max - min) + min

	public static flt = (min: N = Defaults.minFloat, max: N = Defaults.maxFloat) => this.val(min, max)

	public static int = (min: N = Defaults.minInt, max: N = Defaults.maxInt) => ~~this.val(min, max)

	public static min = (...v: N[]) => _min(...v, 0)

	public static max = (...v: N[]) => _max(...v, 1)

	public static diff = (...v: N[]) => this.min(this.max(...v) - this.min(...v))

	public static last = (v: A) => this.min(~~v?.length - 1)

	public static ind = (v: A) => this.val(0, this.last(v))

	public static el = (v: A) => v[this.ind(v)]

	public static shuffle = (v: A) => v.sort(() => this.v - 0.5)

	public static part = (v: A) => v.slice(this.val(this.ind(v), this.ind(v)))

	public static arrLike = (v: A) => (_a.isArray(v) ? v : [v])

	public static reduceVal = (acc: A, val: A) => [...acc, ...this.arrLike(val)]

	public static reduceArr = (a: A) => a.reduce(this.reduceVal)

	public static grow = (a: A, s = 10) => [...a, ...this.arr(s).map(v => this.el(a))]

	public static sequence = (a = 1, b = 10) => this.arr(this.diff(a, b)).map(i => a + i)

	public static merge = (a: A, ...b: A[]) => this.unicals([a, ...b])

	public static double = (v: A) => [v, v]

	public static or = (a: A, b: A, c: A) => (a && b) || c

	public static repeats = (v: A, s: N) => this.reduceArr(this.arr(s))

	public static unicals = (a: A) => [...new Set(...a)]

	public static condition = (c: A, a: A, b: A) => (c ? a : b)

	public static shuffles = (a: A, repeats = 2) => this.shuffle(this.repeats(a, repeats))

	public static shuffleunicals = (a: A) => this.unicals(_a(this.last(a) * 2).map(v => this.shuffle(a)))

	public static doublesome = (a: A, chance = 50) => a.reduce((acc, v) => [...acc, this.i100 > chance ? [v, v] : v], [])

	public static range = (...v: A<N>) => [_min(...v), _max(...v)]

	public static boolean = (chance: N) => this.i100 > chance

	public static powerOfTwo = (max: N) => 2 ** this.val(1, max)

	public static values = (opt: O<any>) => ({ ...this._values, ...opt })

	public static get v() {
		return _rand()
	}

	public static get i() {
		return ~~this.v
	}

	public static get i10() {
		return ~~(this.v * 10)
	}

	public static get i100() {
		return ~~(this.v * 100)
	}

	public static get i1000() {
		return ~~(this.v * 1000)
	}

	public static get b() {
		return this.v > 0.5
	}

	public static get s() {
		return this.v.toFixed(2)
	}

	public static get a() {
		return _a(this.i10)
			.fill(1)
			.map(() => this.v)
	}

	// _noteBasic -> Возвращает случайное значение ноты в виде символа (A, B, C, D, E, F, G)
	public static get _noteBasic() {
		return this.el(Defaults.MUSIC_NOTES_BASIC)
	}

	// _noteBasic -> Возвращает ноту со знаком альтерации # (..._noteBasic | 'A#', 'C#', 'E#', 'F#', 'G#')
	public static get _noteSharp() {
		return this.el(Defaults.MUSIC_NOTES_SHARP)
	}
	// _noteBasic -> Возвращает ноту со знаком альтерации b (..._noteBasic | 'Bb', 'Db', 'Eb', 'Fb', 'Ab')
	public static get _noteBemole() {
		return this.el(Defaults.MUSIC_NOTES_BEMOLE)
	}
	// _noteBasic -> Возвращает случайное значение ноты в виде символа (A, B, C, D, E, F, G)
	public static get _noteChar() {
		return this.el(Defaults.MUSIC_NOTES)
	}
	// _noteBasic -> Возвращает случайное значение ноты в виде символа (A, B, C, D, E, F, G)
	public static get _noteBasic() {
		return this.el(Defaults.MUSIC_NOTES_BASIC)
	}
	
	// _noteBasic -> Возвращает _noteBasic + ноты со знаками альтерации b (A, А#)
	public static get _noteChar() {
		return this.el(Defaults.MUSIC_NOTES)
	}

	// _noteBasic -> Возвращает _noteBasic + ноты со знаками альтерации # (A, А#)
	public static get _noteCharSharp() {
		return this.el(Defaults.MUSIC_NOTES)
	}


	// _instrumentKey -> Возвращает случайное значение ноты в виде строки
	public static get _instrumentKey() {
		return this.el(Defaults.INSTRUMENT_KEYS)
	}

	// _instrumentValue -> Возвращает случайное значение ноты в виде строки
	public static get _instrumentValue() {
		return this.el(Defaults.INSTRUMENT_VALUES)
	}

	// _instrumentShare -> Возвращает случайное значение ноты в виде строки
	public static get _instrumentShare() {
		return this.el(Defaults.INSTRUMENT_SHARED)
	}

	// _instrumentId -> Возвращает случайное значение ноты в виде строки
	public static get _instrumentId() {
		return this.el(Defaults.INSTRUMENT_IDS)
	}

	// _instrumentNote -> Возвращает случайное значение ноты в виде строки
	public static get _instrumentNote() {
		return this.el(Defaults.INSTRUMENT_NOTES)
	}

	// _instrumentFile -> Возвращает случайное значение ноты в виде строки
	public static get _instrumentFile() {
		return this.el(Defaults.INSTRUMENT_FILES)
	}

	// _instrumentFolder -> Возвращает случайное значение ноты в виде строки
	public static get _instrumentFolder() {
		return this.el(Defaults.INSTRUMENT_FOLDERS)
	}

	// _blissFile -> Возвращает случайное значение ноты в виде строки
	public static get _blissFile(): tBlissFile {
		return this.el(Defaults.BLISS_FILES)
	}

	// _blissWord -> Возвращает случайное значение ноты в виде строки
	public static get _blissWord(): tBlissWord {
		return this.el(Defaults.BLISS_WORDS)
	}

	// _blissPath -> Возвращает случайное значение ноты в виде строки
	public static get _blissPath(): tBlissPath {
		return this.el(Defaults.BLISS_PATHS)
	}

	// _blissIcon -> Возвращает случайное значение ноты в виде строки
	public static get _blissIcon(): tBlissIcon {
		return this.el(Defaults.BLISS_ICONS)
	}

	// _scale -> Возвращает случайное значение ноты в виде строки
	public static get _scale() {
		return this.el(Defaults.MUSIC_SCALES)
	}

	// _durationChar -> Возвращает случайное значение ноты в виде строки
	public static get _durationChar() {
		return this.el(Defaults.MUSIC_DURATION_CHARS)
	}

	// _duration -> Возвращает случайное значение ноты в виде строки
	public static get _duration() {
		return this.el(Defaults.MUSIC_DURATIONS)
	}

	// _intervalChar -> Возвращает случайное значение ноты в виде строки
	public static get _intervalChar() {
		return this.el(Defaults.MUSIC_INTERVAL_CHARS)
	}

	// _synth -> Возвращает случайное значение ноты в виде строки
	public static get _synth() {
		return this.el(Defaults.MUSIC_SYNTHS)
	}

	// _tuningName -> Возвращает случайное значение ноты в виде строки
	public static get _tuningName() {
		return this.el(Defaults.MUSIC_TUNING_NAMES)
	}

	// _tuningValue -> Возвращает случайное значение ноты в виде строки
	public static get _tuningValue() {
		return this.el(Defaults.MUSIC_TUNING_VALUES)
	}

	// _colorName -> Возвращает случайное значение ноты в виде строки
	public static get _colorName() {
		return this.el(Defaults.COLOR_NAMES)
	}

	// _colorCode -> Возвращает случайное значение ноты в виде строки
	public static get _colorCode() {
		return this.el(Defaults.COLOR_CODES)
	}

	// _colorClass -> Возвращает случайное значение ноты в виде строки
	public static get _colorClass() {
		return this.el(Defaults.COLOR_CLASS)
	}

	// _values -> Возвращает случайное значение ноты в виде строки
	public static get _values() {
		return {
			colorName: this._colorName,
			colorCode: this._colorCode,
			colorClass: this._colorClass,
			noteBasic: this._noteBasic,
			noteChar: this._noteChar,
			scale: this._scale,
			durationChar: this._durationChar,
			duration: this._duration,
			intervalChar: this._intervalChar,
			synth: this._synth,
			tuningName: this._tuningName,
			tuningValue: this._tuningValue,
		}
	}

	// _styleColorGradient -> Возвращает случайное значение ноты в виде строки
	public static get _styleColorGradient() {
		return `${this._colorCode()} ${this.int(0, 100)}.00%`
	}

	// _styleBackgroundGradient -> Возвращает случайное значение ноты в виде строки
	public static get _styleBackgroundGradient() {
		return `linear-gradient(${this.int(0, 120)}.00deg, ${this._styleColorGradient}, ${this._styleColorGradient})`
	}

	// _octave -> Возвращает случайное значение ноты в виде строки
	public static get _octave() {
		return this.octave()
	}

	// _note -> Возвращает случайное значение ноты в виде строки
	public static get _note() {
		return this.note()
	}

	// _velocity -> Возвращает случайное значение ноты в виде строки
	public static get _velocity() {
		return this.velocity()
	}

	// _noteValues -> Возвращает случайное значение ноты в виде строки
	public static get _noteValues() {
		return this.noteValues()
	}


	public static octave = (min = 2, max = 4) => this.val(min, max)

	public static note = (octave = this._octave) => `${this._noteChar}${octave}`

	public static notes = (s = 10, octave = this._octave) => this.arr(s).map(() => this.note(octave))

	public static velocity = () => 0.75 + this.v / 3

	public static durationValue = () => this.powerOfTwo(3) as tDurationValue

	public static durationChar = () => this._durationChar

	public static duration = (value: tDurationValue = this.durationValue(), char: tDurationChar = this.durationChar()) =>
		`${value}${char}`

	public static noteValues = (note = this._note, opt?: Partial<tNoteValues>) => ({
		note,
		char: this._noteChar,
		octave: this._octave,
		velocity: this._velocity,
		duration: this._duration,
		...opt,
	})

	public static noteParse = (note: tNote) => {
		const [, char, octave = this._octave] = note.match(/^([a-g#]+)(\d)$/i) ?? []
		const index = this.noteIndex(char as tNoteChar)
		if (!char || !index) {
			throw new Error('Empty Defaults: Note Char')
		}
		return { note, char, octave: ~~octave, index }
	}

	public static parseNoteChar = (str: S) => `${str.match(/([a-f#]{1,2})/i)?.[1]}` as tNoteChar

	public static noteIndex = (char: tNote) => Defaults.MUSIC_NOTES.indexOf(this.parseNoteChar(char))

	public static noteToMidi = (note: tNote | tNoteChar) => Teoria.note(note).toMidi()

	public static noteFrom = ({ char, octave }: { char: tNoteChar; octave: tOctave }): tNote => `${char}${octave}`

	public static noteStep = (char: tNote, step: N) => {
		let { octave, index } = this.noteParse(char)
		let ind = index + this.min(step)
		const notesLength = Defaults.MUSIC_NOTES.length
		if (ind === notesLength) {
			octave = this._octave + 1
			ind = 0
		} else if (ind > notesLength) {
			octave = this._octave + ~~(ind / notesLength)
			ind = ind % notesLength
		}
		return `${Defaults.MUSIC_NOTES[ind]}${octave}`
	}

	public static noteOrMany = (s: N) => (~~s ? this.notes(s) : this.note())

	public static noteSteps = (note: tNote, s = 24) => this.arr(s).map((v, i) => this.noteStep(note, i))

	public static rhythmValues = (s = 10, max = 4) => this.arr(s).map(() => this.val(1, max))

	public static rhythmNotes = (s = 10) => this.arr(s).map(() => this.noteOrMany(this.val(1, 4)))

	public static getNote = (note: tNote) => Teoria.note(note)

	public static getNoteMidi = (note: tNote) => this.getNote(note).toMidi()

	public static getScale = (note: tNote, scale: tScaleName) =>
		this.getNote(note)
			.scale(scale)
			.simple()
			.map((char: tNoteChar) => `${char}${this._octave}`)

	public static getMelody = (root: tNote, scale: tScaleName, s: A) => {
		const scaleNotes = this.getScale(root, scale)
		const melody = s.fill(root).map(v => this.el(scaleNotes))
		return this.shuffle(melody)
	}

	public static playNote = (
		note: tNote = Defaults.note,
		synth: any = Defaults.synth,
		duration: tDuration = Defaults.duration
	) => {
		synth.triggerAttackRelease(note, duration)
	}

	public static play = () => Tone.Transport.start('0.1')

	public static stop = () => Tone.Transport.stop(0)
}
