import Tone from 'tone'
import { Value } from './constants'
import { Samples, SAMPLES_DATA } from './samples'
import { _a, _entries, _fromE, _json, _keys, _max, _min, _rand } from './shortcuts'
import {
	A,
	B,
	N,
	O,
	S,
	tDuration,
	tDurationChar,
	tDurationValue,
	tInstrumentName,
	tInstrumentNotes,
	tNote,
	tNoteChar,
	tNoteValues,
	tOctave,
	tScale,
	tState,
	tSynthName,
	UND,
} from './types'
const Teoria = require('teoria')
// import Teoria from 'teoria'

export type tSynth = typeof Tone[tSynthName]

export class Helpers extends Defaults {
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
	public static formatToDesc = (v: S = this.DescDefault) =>
		this.formatToDiv(`\nType: ${typeof v}\nIsTruthy: ${!!v}\nValue: ${v}`)
	public static formatToInsp = (v: S = this.DescDefault) => this.formatToDiv(`Object: ${_json(v)}`)
	public static formatToTitle = (v: S = this.DescDefault) => this.formatToDiv(`${v}`.toUpperCase())

	//! Descriptions for messages, events, etc
	public static arr = (s: N) => _a(~~s).fill(1)
	public static val = (min: N = Value.minInt, max: N = Value.maxInt) => _rand() * (max - min) + min
	public static flt = (min: N = Value.minFloat, max: N = Value.maxFloat) => this.val(min, max)
	public static int = (min: N = Value.minInt, max: N = Value.maxInt) => ~~this.val(min, max)
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
	public static get _noteBasic() {
		return this.el(Value.MUSIC_NOTES_BASIC)
	}
	public static get _noteChar() {
		return this.el(Value.MUSIC_NOTES)
	}
	public static get _scale() {
		return this.el(Value.MUSIC_SCALES)
	}
	public static get _durationChar() {
		return this.el(Value.MUSIC_DURATION_CHARS)
	}
	public static get _duration() {
		return this.el(Value.MUSIC_DURATIONS)
	}
	public static get _intervalChar() {
		return this.el(Value.MUSIC_INTERVAL_CHARS)
	}
	public static get _synth() {
		return this.el(Value.MUSIC_SYNTHS)
	}
	public static get _tuningName() {
		return this.el(Value.MUSIC_TUNING_NAMES)
	}
	public static get _tuningValue() {
		return this.el(Value.MUSIC_TUNING_VALUES)
	}
	public static get _colorName() {
		return this.el(Value.COLOR_NAMES)
	}
	public static get _colorCode() {
		return this.el(Value.COLOR_CODES)
	}
	public static get _colorClass() {
		return this.el(Value.COLOR_CLASS)
	}
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
	public static get styleColorGradient() {
		return `${this._colorCode()} ${this.int(0, 100)}.00%`
	}
	public static get styleBackgroundGradient() {
		return `linear-gradient(${this.int(0, 120)}.00deg, ${this.styleColorGradient}, ${this.styleColorGradient})`
	}
	public static get _octave() {
		return this.octave()
	}
	public static get _note() {
		return this.note()
	}
	public static get _velocity() {
		return this.velocity()
	}
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
			throw new Error('Empty Value: Note Char')
		}
		return { note, char, octave: ~~octave, index }
	}
	public static parseNoteChar = (str: S) => `${str.match(/([a-f#]{1,2})/i)?.[1]}` as tNoteChar
	public static noteIndex = (char: tNote) => Value.MUSIC_NOTES.indexOf(this.parseNoteChar(char))
	public static noteToMidi = (note: tNote | tNoteChar) => Teoria.note(note).toMidi()
	public static noteFrom = ({ char, octave }: { char: tNoteChar; octave: tOctave }): tNote => `${char}${octave}`
	public static noteStep = (char: tNote, step: N) => {
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
	public static noteOrMany = (s: N) => (~~s ? this.notes(s) : this.note())
	public static noteSteps = (note: tNote, s = 24) => this.arr(s).map((v, i) => this.noteStep(note, i))
	public static rhythmValues = (s = 10, max = 4) => this.arr(s).map(() => this.val(1, max))
	public static rhythmNotes = (s = 10) => this.arr(s).map(() => this.noteOrMany(this.val(1, 4)))
	public static getNote = (note: tNote) => Teoria.note(note)
	public static getNoteMidi = (note: tNote) => this.getNote(note).toMidi()
	public static getScale = (note: tNote, scale: tScale) =>
		this.getNote(note)
			.scale(scale)
			.simple()
			.map((char: tNoteChar) => `${char}${this._octave}`)
	public static getMelody = (root: tNote, scale: tScale, s: A) => {
		const scaleNotes = this.getScale(root, scale)
		const melody = s.fill(root).map(v => this.el(scaleNotes))
		return this.shuffle(melody)
	}
	public static Dict = {
		Synth: (opt?: any) => new Tone.Synth(opt).toDestination(),
		AMSynth: (opt?: any) => new Tone.AMSynth(opt).toDestination(),
		FMSynth: (opt?: any) => new Tone.FMSynth(opt).toDestination(),
		DuoSynth: (opt?: any) => new Tone.DuoSynth(opt).toDestination(),
		MembraneSynth: (opt?: any) => new Tone.MembraneSynth(opt).toDestination(),
		MetalSynth: (opt?: any) => new Tone.MetalSynth(opt).toDestination(),
		MonoSynth: (opt?: any) => new Tone.MonoSynth(opt).toDestination(),
		NoiseSynth: (opt?: any) => new Tone.NoiseSynth(opt).toDestination(),
		PluckSynth: (opt?: any) => new Tone.PluckSynth(opt).toDestination(),
		PolySynth: (opt?: any) => new Tone.PolySynth(opt).toDestination(),
	}
	public static getSynth = (synthName: tSynthName = this.synthName, synthOptions?: O) => {
		if (!synthName || !this.Dict?.[synthName]) {
			return this.Dict.Synth(synthOptions)
		}
		return this.Dict[synthName](synthOptions)
	}
	public static synth = this.getSynth('PolySynth')
	public static playNote = (
		note: tNote = this.noteDefault,
		synth = this.synth,
		duration: tDuration = this.durationDefault
	) => {
		synth.triggerAttackRelease(note, duration)
	}
	public static play = () => Tone.Transport.start('0.1')
	public static stop = () => Tone.Transport.stop(0)

	public static instrumentNames = _keys(Samples) as tInstrumentName[]
	public static instrumentNotes = <T1 extends tInstrumentName>(k: T1): tInstrumentNotes<T1> => _keys(Samples[k])
	public static instrumentNotesShared = _fromE(this.instrumentNames.map(k => [k, _keys(Samples[k])]))
	public static instruments = _keys(Samples).map(instrument => {
		const values = Samples[instrument]
		const notes = _keys(values)
		return [instrument, { values, instrument, notes }]
	})
}
