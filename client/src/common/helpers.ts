// import * as Teoria from 'teoria'
import * as Tone from 'tone'
import { Check } from './check'
import { Value } from './constants'
import { _a, _entries, _insp, _json, _keys, _max, _min, _rand, _values } from './shortcuts'
import { A, N, O, S, tDuration, tNote, tNoteChar, tScale, tSynth } from './types'
const Teoria = require('teoria')
export type tToneSynth =
	| Tone.Synth
	| Tone.AMSynth
	| Tone.FMSynth
	| Tone.DuoSynth
	| Tone.MembraneSynth
	| Tone.MetalSynth
	| Tone.MonoSynth
	| Tone.NoiseSynth
	| Tone.PluckSynth
	| Tone.PolySynth
export class Description {
	static U: S = 'Unknown Or Undefined value'
	static B: S = 'Boolean'
	static N: S = 'Number'
	static S: S = 'String'
	static A: S = 'Array'
	static O: S = 'Object'
	static D: S = 'Description'
	static MSG: S = 'Message'
}
export class Formatter {
	static toDiv = (str = Description.D, max = 40, char = '#') => {
		const div = char.repeat(_min(~~str?.length, ~~max))
		return `\n${div}\n${str}\n${div}`
	}
	static toDesc = (v: S = Description.U) => this.toDiv(`\nType: ${typeof v}\nIsTruthy: ${!!v}\nValue: ${v}`)
	static toInsp = (v: S = Description.U) => this.toDiv(`Object: ${_json(_insp(v), null, '\t')}`)
	static toDescTitle = (v: S = Description.U) => this.toDiv(`${v}`.toUpperCase())
	static toFormats = (str: S) => ({
		toDiv: this.toDiv(str),
		toDesc: this.toDesc(str),
		toInsp: this.toInsp(str),
		toDescTitle: this.toDescTitle(str),
	})
}
export class Randoms {
	static arr = (s: N) => _a(~~s).fill(1)
	static val = (min: N = Value.rangeMin, max: N = Value.rangeMax) => _rand() * (max - min) + min
	static flt = (min: N = Value.floatMin, max: N = Value.floatMax) => this.val(min, max)
	static int = (min: N = Value.intMin, max: N = Value.intMax) => ~~this.val(min, max)
	static min = (...v: N[]) => _min(...v, 0)
	static max = (...v: N[]) => _max(...v, 1)
	static diff = (...v: N[]) => this.min(this.max(...v) - this.min(...v))
	static last = (v: A) => this.min(~~v?.length - 1)
	static ind = (v: A) => this.val(0, this.last(v))
	static el = (v: A) => v[this.ind(v)]
	static shuffle = (v: A) => v.sort(() => this.v - 0.5)
	static part = (v: A) => v.slice(this.val(this.ind(v), this.ind(v)))
	static arrLike = (v: A) => (_a.isArray(v) ? v : [v])
	static reduceVal = (acc: A, val: A) => [...acc, ...this.arrLike(val)]
	static reduceArr = (a: A) => a.reduce(this.reduceVal)
	static grow = (a: A, s = 10) => [...a, ...this.arr(s).map(v => this.el(a))]
	static sequence = (a = 1, b = 10) => this.arr(this.diff(a, b)).map(i => a + i)
	static merge = (a: A, ...b: A[]) => this.unicals([a, ...b])
	static double = (v: A) => [v, v]
	static or = (a: A, b: A, c: A) => (a && b) || c
	static repeats = (v: A, s: N) => this.reduceArr(this.arr(s))
	static unicals = (a: A) => [...new Set(...a)]
	static condition = (c: A, a: A, b: A) => (c ? a : b)
	static shuffles = (a: A, repeats = 2) => this.shuffle(this.repeats(a, repeats))
	static shuffleunicals = (a: A) => this.unicals(_a(this.last(a) * 2).map(v => this.shuffle(a)))
	static doublesome = (a: A, chance = 50) => a.reduce((acc, v) => [...acc, this.i100 > chance ? [v, v] : v], [])
	static range = (...v: A<N>) => [_min(...v), _max(...v)]
	static boolean = (chance: N) => this.i100 > chance
	static powerOfTwo = (max: N) => 2 ** this.val(1, max)
	static values = (a: any) => (_a.isArray(a) ? [...a] : Check.isObj(a) ? _values(a) : a)
	static objK = (obj: O) => this.el(_keys(obj))
	static objV = (obj: O) => this.el(_values(obj))
	static objE = (obj: O) => this.el(_entries(obj))
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
	static get _noteBasic() {
		return this.el(Value.MUSIC_NOTES_BASIC)
	}
	static get _noteChar() {
		return this.el(Value.MUSIC_NOTES)
	}
	static get _scale() {
		return this.el(Value.MUSIC_SCALES)
	}
	static get _durationChar() {
		return this.el(Value.MUSIC_DURATION_CHARS)
	}
	static get _duration() {
		return this.el(Value.MUSIC_DURATIONS)
	}
	static get _intervalChar() {
		return this.el(Value.MUSIC_INTERVAL_CHARS)
	}
	static get _synth() {
		return this.el(Value.MUSIC_SYNTHS)
	}
	static get _tuningName() {
		return this.el(Value.MUSIC_TUNING_NAMES)
	}
	static get _tuningValue() {
		return this.el(Value.MUSIC_TUNING_VALUES)
	}
	static get _colorName() {
		return this.el(Value.COLOR_NAMES)
	}
	static get _colorCode() {
		return this.el(Value.COLOR_CODES)
	}
	static get _colorClass() {
		return this.el(Value.COLOR_CLASS)
	}
	static get _values() {
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
}
export class Helpers extends Randoms {
	Description = Description
	Formatter = Formatter
	static get _octave() {
		return this.octave()
	}
	static get _note() {
		return `${this._noteChar}${this._octave}`
	}
	static get _velocity() {
		return 0.75 + this.v / 3
	}
	static get _noteValues() {
		return {
			note: this._note,
			char: this._noteChar,
			octave: this._octave,
			velocity: this._velocity,
			duration: this._duration,
		}
	}
	static octave = (min = 2, max = 4) => this.val(min, max)
	static note = (octave = this._octave) => `${this._noteChar}${octave}`
	static notes = (s = 10, octave = this._octave) => this.arr(s).map(() => this.note(octave))
	static noteValues = (note = this._note) => ({ ...this._noteValues, note })
	static noteParse = (note: tNote) => {
		const [, char, octave = this._octave] = note.match(/^([a-g#]+)(\d)$/i) ?? []
		const index = this.noteIndex(char as tNoteChar)
		if (!char || !index) {
			throw new Error('Empty Value: Note Char')
		}
		return { note, char, octave: ~~octave, index }
	}
	static parseNoteChar = (str: S) => `${str.match(/([a-f#]{1,2})/i)?.[1]}` as tNoteChar
	static noteIndex = (char: tNote) => Value.MUSIC_NOTES.indexOf(this.parseNoteChar(char))
	static noteStep = (char: tNote, step: N) => {
		let { octave, index } = this.noteParse(char)
		let ind = index + this.min(step)
		if (ind === Value.TOTAL.NOTES) {
			octave = this._octave + 1
			ind = 0
		} else if (ind > Value.TOTAL.NOTES) {
			octave = this._octave + ~~(ind / Value.TOTAL.NOTES)
			ind = ind % Value.TOTAL.NOTES
		}
		return `${Value.MUSIC_NOTES[ind]}${octave}`
	}
	static noteOrMany = (s: N) => (~~s ? this.notes(s) : this.note())
	static noteSteps = (note: tNote, s = 24) => this.arr(s).map((v, i) => this.noteStep(note, i))
	static rhythmValues = (s = 10, max = 4) => this.arr(s).map(() => this.val(1, max))
	static rhythmNotes = (s = 10) => this.arr(s).map(() => this.noteOrMany(this.val(1, 4)))
	static styleColorGradient = () => `${this._colorCode()} ${this.int(0, 100)}.00%`
	static styleBackgroundGradient = () =>
		`linear-gradient(${this.int(0, 120)}.00deg, ${this.styleColorGradient()}, ${this.styleColorGradient()})`
	static getNote = (note: tNote) => Teoria.note(note)
	static getScale = (note: tNote, scale: tScale) =>
		this.getNote(note)
			.scale(scale)
			.simple()
			.map((char: tNoteChar) => `${char}${this._octave}`)
	static getMelody = (root: tNote, scale: tScale, s: A) => {
		const scaleNotes = this.getScale(root, scale)
		const melody = s.fill(root).map(v => this.el(scaleNotes))
		return this.shuffle(melody)
	}
	static synth = (name: tSynth, ...opt: any[]) => {
		if (name === 'Synth') new Tone.Synth(...opt).toDestination()
		if (name === 'AMSynth') new Tone.AMSynth(...opt).toDestination()
		if (name === 'FMSynth') new Tone.FMSynth(...opt).toDestination()
		if (name === 'DuoSynth') new Tone.DuoSynth(...opt).toDestination()
		if (name === 'MembraneSynth') new Tone.MembraneSynth(...opt).toDestination()
		if (name === 'MetalSynth') new Tone.MetalSynth(...opt).toDestination()
		if (name === 'MonoSynth') new Tone.MonoSynth(...opt).toDestination()
		if (name === 'NoiseSynth') new Tone.NoiseSynth(...opt).toDestination()
		if (name === 'PluckSynth') new Tone.PluckSynth(...opt).toDestination()
		if (name === 'PolySynth') new Tone.PolySynth(...opt).toDestination()
		else return null
	}
	static playOne = (note: tNote, synth: tToneSynth, duration: tDuration = '4n') => {
		synth.triggerAttackRelease(note, duration)
	}
	static play = () => Tone.Transport.start('0.1')
	static stop = () => Tone.Transport.stop(0)
}
