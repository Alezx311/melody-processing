import * as Teoria from 'teoria'
import * as Tone from 'tone'

import {
  NOTES,
  SCALES,
  COLOR_CLASSNAMES,
  COLOR_NAMES,
  COLOR_CODES,
  GUITAR_TUNINGS,
  TUNING_NAMES,
  DURATION_CHARS,
  INTERVAL_CHARS,
  DURATIONS,
} from './constants'

export class Sound {
  static synth = (name) => new Tone[name]().toDestination()

  static playOne = (note, synth) => {
    synth.triggerAttackRelease(note, '4n')
  }

  static play = () => {
    Tone.Transport.start('0.1')
  }
  static stop = () => {
    Tone.Transport.stop(0)
  }
}
export class Note {
  static getScale = (note, scale) => {
    const Note = Teoria.note(note)
    const scaleNotes = Note.scale(scale)
      .simple()
      .map((char) => `${char}${Random.number(2, 4)}`)

    return scaleNotes
  }
  static melody = (root, scale, size) => {
    const scaleNotes = this.getScale(root, scale)
    const melody = Array(size)
      .fill(root)
      .map((v) => Random.arrayElement(scaleNotes))
    const shuffles = Random.arrayShuffles(melody)

    return shuffles
  }
}

export class Random {
  static range = () => Math.random().toFixed(2)
  static float = (min = 0.01, max = 0.99) => (this.range() * (max - min) + min).toFixed(2)
  static number = (min = 1, max = 100) => Math.floor(this.range() * (max - min)) + min
  static boolean = (chance = 50) => this.number(1, 100) > chance
  static numbers = (size = 10, max = 100) => this.array(size).map((v) => this.number(0, max))
  static powerOfTwo = (max = 10) => 2 ** this.number(1, max)
  static numbersDeep = (len = 10, max = 4) => this.numbers(len, max).map((v) => (v > 1 ? this.numbers(v, max) : v))
  static values = (arr) => this.array(10).map((v) => this.arrayElement(arr))
  static array = (size = 10, fill = this.boolean(20)) => Array(size).fill(fill)
  static arrays = (size = 10, maxDeep = 5) => this.array(size).map((v) => this.array(this.number(2, maxDeep)))
  static arrayPart = (arr, chance = 20) => arr.filter((v, i) => this.boolean(chance))
  static arrayGrow = (arr, growSize = 10) => [...arr, ...this.array(growSize).map((v, i) => this.arrayElement(arr))]
  static arrayExamples = (size = 10) => this.array(size).map((v) => this.example())
  static arraySequence = (start = 1, end = 100) => this.array(end).map((v, i) => start + i)
  static arrayChange = (size = 10, arr) => this.arrayElement(this.array(size).map((v) => this.arrayShuffle(arr)))
  static arrayMerge = (arr, ...arrays) => this.arrayUnicals([...arr, ...arrays])
  static arrayDouble = (arr) => [arr, arr]
  static arrayRepeats = (arr, repeats = 2) => this.array(repeats).reduce((acc, v) => [...acc, ...arr], arr)
  static arrayUnicals = (arr) => [...new Set([...arr])]
  static arrayShuffle = (arr) => arr.sort(() => this.range() - 0.5)
  static arrayShuffles = (arr, repeats = 2) => this.arrayShuffle(this.arrayRepeats(arr, repeats))
  static arrayShuffleUnicals = (arr) => this.arrayUnicals(this.array(arr.length * 2).map((v) => this.arrayShuffle(arr)))
  static arrayIndex = (arr) => arr && this.number(0, arr.length)
  static arrayElement = (arr, i = this.arrayIndex(arr)) => arr && arr[i]
  static arrayDoubleSome = (arr, chance = 50) => this.arrayShuffles(arr).map((v) => (this.boolean(20) ? [v, v] : v))
  static objectKey = (obj) => this.arrayElement(Object.keys(obj))
  static objectProp = (obj, key = this.objectKey(obj)) => obj[key]
  static noteChar = () => this.arrayElement(NOTES)
  static octave = (min = 2, max = 4) => this.number(min, max)
  static note = (octave = this.octave()) => `${this.noteChar()}${octave}`
  static notes = (size = 10, octave) => this.array(size, (v) => this.note(octave))
  static scale = () => this.arrayElement(SCALES)
  static durationChar = () => this.arrayElement(DURATION_CHARS)
  static duration = () => Random.arrayElement(DURATIONS)
  static interval = () => this.arrayElement(INTERVAL_CHARS)
  static velocity = () => 0.75 + this.range() / 3
  static tuningName = () => this.arrayElement(TUNING_NAMES)
  static tuning = () => GUITAR_TUNINGS[this.tuningName()]
  static noteValues = (note) => ({ note, duration: this.duration(), velocity: this.velocity() })
  static noteParse = (str) => {
    let [note, char, octave = 1] = str.trim().match(/^([a-g#]+)(\d)$/i)

    if (!char) {
      throw new Error(`Invalid char on parsing note: ${str} ${[note, char, octave]}`)
    }

    return { note, char, octave }
  }

  static noteIndex = (note) => NOTES.indexOf(note.trim().match(/^([a-g#]+)/i)[1])
  static noteStep = (noteChar, step = 1) => {
    let { char, octave } = this.noteParse(noteChar)
    let noteIndex = this.noteIndex(char)
    let newIndex = noteIndex + step

    if (newIndex === NOTES.length) {
      octave = Number(octave) + 1
      newIndex = 0
    } else if (newIndex > NOTES.length) {
      octave = Number(octave) + Math.floor(newIndex / NOTES.length)
      newIndex = newIndex % NOTES.length
    }

    return `${NOTES[newIndex]}${octave}`
  }
  static noteSteps = (note, size = 24) => {
    return Array(size)
      .fill(note)
      .map((v, i) => this.noteStep(v, i))
  }
  static rhythmValues = (size = 10, max = 4) => this.numbers(size, max)
  static rhythmValuesDeep = (size = 10, max = 4) => this.numbersDeep(size, max)
  static rhythmNotes = (size = 10) => this.numbers(size, 1, 4).map((v) => (v > 1 ? this.notes(v) : this.note()))
  static rhythmNotesDeep = (size = 10, max = 4, notes = this.notes(size)) =>
    this.arrayDeepSome(this.rhythmNotes(size, notes), notes)
  static colorName = () => this.arrayElement(COLOR_NAMES)
  static colorHex = () => this.arrayElement(COLOR_CODES)
  static colorClassName = () => this.arrayElement(COLOR_CLASSNAMES)
  static styleColorGradient = () => `${this.colorHex()} ${this.number(0, 100)}.00%`
  static styleBackgroundGradient = () =>
    `linear-gradient(${this.number(0, 120)}.00deg, ${this.styleColorGradient()}, ${this.styleColorGradient()})`

  get _range() {
    return this.range()
  }
  get _float() {
    return this.float()
  }
  get _number() {
    return this.number()
  }
  get _boolean() {
    return this.boolean()
  }
  get _numbers() {
    return this.numbers()
  }
  get _powerOfTwo() {
    return this.powerOfTwo()
  }
  get _numbersDeep() {
    return this.numbersDeep()
  }
  get _values() {
    return this.values()
  }
  get _array() {
    return this.array()
  }
  get _arrays() {
    return this.arrays()
  }
  get _arrayPart() {
    return this.arrayPart()
  }
  get _arrayGrow() {
    return this.arrayGrow()
  }
  get _arrayExamples() {
    return this.arrayExamples()
  }
  get _arraySequence() {
    return this.arraySequence()
  }
  get _arrayChange() {
    return this.arrayChange()
  }
  get _arrayMerge() {
    return this.arrayMerge()
  }
  get _arrayDouble() {
    return this.arrayDouble()
  }
  get _arrayRepeats() {
    return this.arrayRepeats()
  }
  get _arrayUnicals() {
    return this.arrayUnicals()
  }
  get _arrayShuffle() {
    return this.arrayShuffle()
  }
  get _arrayShuffles() {
    return this.arrayShuffles()
  }
  get _arrayShuffleUnicals() {
    return this.arrayShuffleUnicals()
  }
  get _arrayIndex() {
    return this.arrayIndex()
  }
  get _arrayElement() {
    return this.arrayElement()
  }
  get _arrayDoubleSome() {
    return this.arrayDoubleSome()
  }
  get _objectKey() {
    return this.objectKey()
  }
  get _objectProp() {
    return this.objectProp()
  }
  get _noteChar() {
    return this.noteChar()
  }
  get _octave() {
    return this.octave()
  }
  get _note() {
    return this.note()
  }
  get _notes() {
    return this.notes()
  }
  get _scale() {
    return this.scale()
  }
  get _durationChar() {
    return this.durationChar()
  }
  get _duration() {
    return this.duration()
  }
  get _interval() {
    return this.interval()
  }
  get _velocity() {
    return this.velocity()
  }
  get _tuningName() {
    return this.tuningName()
  }
  get _tuning() {
    return this.tuning()
  }
  get _noteValues() {
    return this.noteValues()
  }
  get _noteParse() {
    return this.noteParse()
  }
  get _noteIndex() {
    return this.noteIndex()
  }
  get _noteStep() {
    return this.noteStep()
  }
  get _noteSteps() {
    return this.noteSteps()
  }
  get _rhythmValues() {
    return this.rhythmValues()
  }
  get _rhythmValuesDeep() {
    return this.rhythmValuesDeep()
  }
  get _rhythmNotes() {
    return this.rhythmNotes()
  }
  get _rhythmNotesDeep() {
    return this.rhythmNotesDeep()
  }
  get _colorName() {
    return this.colorName()
  }
  get _colorHex() {
    return this.colorHex()
  }
  get _colorClassName() {
    return this.colorClassName()
  }
  get _styleColorGradient() {
    return this.styleColorGradient()
  }
  get _styleBackgroundGradient() {
    return this.styleBackgroundGradient()
  }
}
