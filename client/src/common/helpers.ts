import * as Teoria from 'teoria'
import * as Tone from 'tone'
import { COLOR_CLASSNAMES, COLOR_CODES, COLOR_NAMES } from './color.constants'
import { Value } from './constants'
import { NOTE } from './enums'
import {
	DURATIONS,
	DURATION_CHARS,
	GUITAR_TUNINGS,
	INTERVAL_CHARS,
	NOTES,
	SCALES,
	SYNTHS,
	TUNING_NAMES,
} from './music.constants'
import { _a, _entries, _keys, _max, _min, _rand, _values } from './shortcuts'
import { A, Arr, N, O, S, ValueOf } from './types'
export class HelpersRandom {
	static get v() {
		return _rand()
	}
	static get i() {
		return ~~this.v
	}
	static get i10() {
		return ~~(this.v * 10)
	}
	static get i100() {
		return ~~(this.v * 100)
	}
	static get i1000() {
		return ~~(this.v * 1000)
	}
	static get b() {
		return this.v > 0.5
	}
	static get s() {
		return this.v.toFixed(2)
	}
	static get a() {
		return _a(this.i10)
			.fill(1)
			.map(() => this.v)
	}

	static arr = (s: N) => _a(~~s).fill(1)
	static val = (min: N = Value.rangeMin, max: N = Value.rangeMax) => _rand() * (max - min) + min
	static flt = (min: N = Value.floatMin, max: N = Value.floatMax) => this.val(min, max)
	static int = (min: N = Value.intMin, max: N = Value.intMax) => ~~this.val(min, max)
	static min = (...v: N[]) => _min(...v, 0)
	static max = (...v: N[]) => _max(...v, 1)
	static diff = (...v: N[]) => this.min(this.max(...v) - this.min(...v))
	static last = (v: Arr) => this.min(~~v?.length - 1)
	static ind = (v: Arr) => this.val(0, this.last(v))
	static el = (v: Arr) => v[this.ind(v)]
	static shuffle = (v: Arr) => v.sort(() => this.v - 0.5)
	static part = (v: Arr) => v.slice(this.val(this.ind(v), this.ind(v)))

	static get _noteChar() {
		return this.el(NOTES)
	}
	static get _octave() {
		return this.val(2, 4)
	}
	static get _note() {
		return `${this._noteChar}${this._octave}`
	}
	static get _velocity() {
		return 0.75 + this.v / 3
	}
	static get _noteValue() {
		return {
			note: this._note,
			octave: this._octave,
			velocity: this._velocity,
			duration: this._duration,
		}
	}
	static get _scale() {
		return this.el(SCALES)
	}
	static get _durationChar() {
		return this.el(DURATION_CHARS)
	}
	static get _duration() {
		return this.el(DURATIONS)
	}
	static get _interval() {
		return this.el(INTERVAL_CHARS)
	}
	static get _synth() {
		return this.el(SYNTHS)
	}
	static get _tuningName() {
		return this.el(TUNING_NAMES)
	}
	static get _tuning() {
		return this.el(_values(GUITAR_TUNINGS))
	}
	static get _colorName() {
		return this.el(COLOR_NAMES)
	}
	static get _colorCode() {
		return this.el(COLOR_CODES)
	}
	static get _colorClass() {
		return this.el(COLOR_CLASSNAMES)
	}

	static get _update() {
		return {
			noteChar: `${this._noteChar}`,
			octave: `${this._octave}`,
			note: `${this._note}`,
			velocity: `${this._velocity}`,
			noteValue: `${this._noteValue}`,
			scale: `${this._scale}`,
			durationChar: `${this._durationChar}`,
			duration: `${this._duration}`,
			interval: `${this._interval}`,
			synth: `${this._synth}`,
			tuningName: `${this._tuningName}`,
			tuning: `${this._tuning}`,
			colorName: `${this._colorName}`,
			colorCode: `${this._colorCode}`,
			colorClass: `${this._colorClass}`,
		}
	}

	static sizeNotes = this.min(NOTES.length)
	static sizeScales = this.min(SCALES.length)
	static sizeSynths = this.min(SYNTHS.length)
	static sizeTunings = this.min(TUNING_NAMES.length)
	static sizeColorNames = this.min(COLOR_NAMES.length)
	static sizeColorCodes = this.min(COLOR_CODES.length)
	static sizeColorClass = this.min(COLOR_CLASSNAMES.length)
	static sizeStats = `Music Constants Finded:
Notes: ${this.sizeNotes}
Scales: ${this.sizeScales}
Synths: ${this.sizeSynths}
Tunings: ${this.sizeTunings}
ColorNames: ${this.sizeColorNames}
ColorCodes: ${this.sizeColorCodes}
ColorClass: ${this.sizeColorClass}`
}

export class Helpers extends HelpersRandom {
	static arrLike = (v: Arrny) => (_a.isArray(v) ? v : [v])
	static reduceVal = (acc: Arr, val: Arrny) => [...acc, ...this.arrLike(val)]
	static reduceArr = (a: Arr) => a.reduce(this.reduceVal)
	static grow = (a: Arr, s = 10) => [...a, ...this.part(a, s)]
	static sequence = (a = 1, b = 10) => this.arr(this.diff(a, b)).map(i => a + i)
	static merge = (a: Arr, ...b: Arr[]) => this.unicals([a, ...b])
	static double = (v: Arrny) => [v, v]
	static or = (a: Arrny, b: Arrny, c: Arrny) => (a && b) || c
	static repeats = (v: Arr, s: N) => this.reduceArr(this.arr(s))
	static unicals = (a: Arr) => [...new Set(...a)]
	static condition = (c: Arrny, a: Arrny, b: Arrny) => (c ? a : b)
	static shuffles = (a: Arr, repeats = 2) => this.shuffle(this.repeats(a, repeats))
	static shuffleunicals = (a: Arr) => this.unicals(_a(this.last(a) * 2).map(v => this.shuffle(a)))
	static doublesome = (a: Arr, chance = 50) => a.reduce((acc, v) => [...acc, this.i100 > chance ? [v, v] : v], [])
	static range = (...v: Arr<N>) => [_min(...v), _max(...v)]
	static boolean = (chance: N) => this.i100 > chance
	static powerOfTwo = (max: N) => 2 ** this.val(1, max)
	static values = (a: Arr) => [...a]
	static objectKey = (obj: O) => this.el(_keys(obj))
	static objectVal = (obj: O) => this.el(_values(obj))
	static objectEnt = (obj: O) => this.el(_entries(obj))
	static noteChar = () => this._noteChar
	static octave = (min = 2, max = 4) => this.val(min, max)
	static note = (octave = this._octave) => `${this._noteChar}${octave}`
	static notes = (s = 10, octave = this._octave) => this.arr(s).map(() => this.note(octave))
	static velocity = () => this._velocity
	static scale = () => this._scale
	static durationChar = () => this._durationChar
	static duration = () => this._duration
	static interval = () => this._interval
	static tuningName = () => this._tuningName
	static tuning = () => this._tuning
	static noteValues = (note = this._note) => ({ note, duration: this._duration, velocity: this._velocity })
	static noteParse = (note: S) => {
		const [, char, octave = this._octave] = note.match(/^([a-g#]+)(\d)$/i) ?? []
		const index = NOTES.indexOf(char)

		if (!char || !index) {
			throw new Error('Empty Value: Note Char')
		}

		return { note, char, octave: ~~octave, index } as { note: S; char: NOTE; octave: N; index: N }
	}
	static noteIndex = (note: NOTE) => NOTES.indexOf(this.noteParse(note).char)
	static noteStep = (noteChar: S, step: N) => {
		let { octave, index } = this.noteParse(noteChar)
		let ind = index + this.min(step)

		if (ind === this.sizeNotes) {
			octave = this._octave + 1
			ind = 0
		} else if (ind > this.sizeNotes) {
			octave = this._octave + ~~(ind / this.sizeNotes)
			ind = ind % this.sizeNotes
		}

		return `${NOTES[ind]}${octave}`
	}
	static noteOrMany = (s: N) => (~~s ? this.notes(s) : this.note())
	static noteSteps = (note: NOTE, s = 24) => this.arr(s).map((v, i) => this.noteStep(note, i))
	static rhythmValues = (s = 10, max = 4) => this.arr(s).map(() => this.val(1, max))
	static rhythmNotes = (s = 10) => this.arr(s).map(() => this.noteOrMany(this.val(1, 4)))
	static colorName = () => this._colorName
	static colorHex = () => this._colorCode
	static colorClassName = () => this._colorClass
	static styleColorGradient = () => `${this.colorHex()} ${this.int(0, 100)}.00%`
	static styleBackgroundGradient = () =>
		`linear-gradient(${this.int(0, 120)}.00deg, ${this.styleColorGradient()}, ${this.styleColorGradient()})`
}
export class HelpersOptions {}
export class HelpersTone {
	static synth = (name: tSynth) => new Tone[name]().toDestination()
	static playOne = (note: tNoteName, synth: tSynth) => {
		synth.triggerAttackRelease(note, '4n')
	}
	static play = () => Tone.Transport.start('0.1')
	static stop = () => Tone.Transport.stop(0)
}
export class HelpersNote {
	static getScale = (note, scale) => {
		const Note = Teoria.note(note)
		const scaleNotes = Note.scale(scale)
			.simple()
			.map(char => `${char}${Random.int(2, 4)}`)
		return scaleNotes
	}
	static melody = (root, scale, s) => {
		const scaleNotes = this.getScale(root, scale)
		const melody = s.fill(root).map(v => Random.element(scaleNotes))
		const shuffles = Random.shuffles(melody)
		return shuffles
	}
}
