import { Description, Formatter, Helpers } from '../common/helpers'

describe('Description', () => {
	it('Is Defined', () => {
		expect(Description).toBeDefined()
	})
	it('U', () => {
		expect(Description.U).toBeDefined()
	})
	it('B', () => {
		expect(Description.B).toBeDefined()
	})
	it('N', () => {
		expect(Description.N).toBeDefined()
	})
	it('S', () => {
		expect(Description.S).toBeDefined()
	})
	it('A', () => {
		expect(Description.A).toBeDefined()
	})
	it('O', () => {
		expect(Description.O).toBeDefined()
	})
	it('D', () => {
		expect(Description.D).toBeDefined()
	})
	it('MSG', () => {
		expect(Description.MSG).toBeDefined()
	})
})

describe('Formatter', () => {
	it('Is Defined', () => {
		expect(Formatter).toBeDefined()
	})
	it('toDiv', () => {
		expect(Formatter.toDiv('Test')).toBeDefined()
	})
	it('toDesc', () => {
		expect(Formatter.toDesc('Test')).toBeDefined()
	})
	it('toInsp', () => {
		expect(Formatter.toInsp('Test')).toBeDefined()
	})
	it('toDescTitle', () => {
		expect(Formatter.toDescTitle('Test')).toBeDefined()
	})
	it('toFormats', () => {
		expect(Formatter.toFormats('Test')).toBeDefined()
	})
})

describe('Helpers', () => {
	it('Is Defined', () => {
		expect(Helpers).toBeDefined()
	})

	it('arr', () => {
		expect(Helpers.arr).toBeDefined()
	})
	it('val', () => {
		expect(Helpers.val).toBeDefined()
	})
	it('flt', () => {
		expect(Helpers.flt).toBeDefined()
	})
	it('int', () => {
		expect(Helpers.int).toBeDefined()
	})
	it('min', () => {
		expect(Helpers.min).toBeDefined()
	})
	it('max', () => {
		expect(Helpers.max).toBeDefined()
	})
	it('diff', () => {
		expect(Helpers.diff).toBeDefined()
	})
	it('last', () => {
		expect(Helpers.last).toBeDefined()
	})
	it('ind', () => {
		expect(Helpers.ind).toBeDefined()
	})
	it('el', () => {
		expect(Helpers.el).toBeDefined()
	})
	it('shuffle', () => {
		expect(Helpers.shuffle).toBeDefined()
	})
	it('part', () => {
		expect(Helpers.part).toBeDefined()
	})
	it('arrLike', () => {
		expect(Helpers.arrLike).toBeDefined()
	})
	it('reduceVal', () => {
		expect(Helpers.reduceVal).toBeDefined()
	})
	it('reduceArr', () => {
		expect(Helpers.reduceArr).toBeDefined()
	})
	it('grow', () => {
		expect(Helpers.grow).toBeDefined()
	})
	it('sequence', () => {
		expect(Helpers.sequence).toBeDefined()
	})
	it('merge', () => {
		expect(Helpers.merge).toBeDefined()
	})
	it('double', () => {
		expect(Helpers.double).toBeDefined()
	})
	it('or', () => {
		expect(Helpers.or).toBeDefined()
	})
	it('repeats', () => {
		expect(Helpers.repeats).toBeDefined()
	})
	it('unicals', () => {
		expect(Helpers.unicals).toBeDefined()
	})
	it('condition', () => {
		expect(Helpers.condition).toBeDefined()
	})
	it('shuffles', () => {
		expect(Helpers.shuffles).toBeDefined()
	})
	it('shuffleunicals', () => {
		expect(Helpers.shuffleunicals).toBeDefined()
	})
	it('doublesome', () => {
		expect(Helpers.doublesome).toBeDefined()
	})
	it('range', () => {
		expect(Helpers.range).toBeDefined()
	})
	it('boolean', () => {
		expect(Helpers.boolean).toBeDefined()
	})
	it('powerOfTwo', () => {
		expect(Helpers.powerOfTwo).toBeDefined()
	})
	it('values', () => {
		expect(Helpers.values).toBeDefined()
	})
	it('objK', () => {
		expect(Helpers.objK).toBeDefined()
	})
	it('objV', () => {
		expect(Helpers.objV).toBeDefined()
	})
	it('objE', () => {
		expect(Helpers.objE).toBeDefined()
	})
	it('get v', () => {
		expect(Helpers.v).toBeDefined()
	})

	it('get i', () => {
		expect(Helpers.i).toBeDefined()
	})

	it('get i10', () => {
		expect(Helpers.i10).toBeDefined()
	})

	it('get i100', () => {
		expect(Helpers.i100).toBeDefined()
	})

	it('get i1000', () => {
		expect(Helpers.i1000).toBeDefined()
	})

	it('get b', () => {
		expect(Helpers.b).toBeDefined()
	})

	it('get s', () => {
		expect(Helpers.s).toBeDefined()
	})

	it('get a', () => {
		expect(Helpers.a).toBeDefined()
	})

	it('get _noteBasic', () => {
		expect(Helpers._noteBasic).toBeDefined()
	})
	it('get _noteChar', () => {
		expect(Helpers._noteChar).toBeDefined()
	})
	it('get _scale', () => {
		expect(Helpers._scale).toBeDefined()
	})
	it('get _durationChar', () => {
		expect(Helpers._durationChar).toBeDefined()
	})
	it('get _duration', () => {
		expect(Helpers._duration).toBeDefined()
	})
	it('get _intervalChar', () => {
		expect(Helpers._intervalChar).toBeDefined()
	})
	it('get _synth', () => {
		expect(Helpers._synth).toBeDefined()
	})
	it('get _tuningName', () => {
		expect(Helpers._tuningName).toBeDefined()
	})
	it('get _tuningValue', () => {
		expect(Helpers._tuningValue).toBeDefined()
	})
	it('get _colorName', () => {
		expect(Helpers._colorName).toBeDefined()
	})
	it('get _colorCode', () => {
		expect(Helpers._colorCode).toBeDefined()
	})
	it('get _colorClass', () => {
		expect(Helpers._colorClass).toBeDefined()
	})
	it('get _values', () => {
		expect(Helpers._values).toBeDefined()
	})
	it('get _octave', () => {
		expect(Helpers._octave).toBeDefined()
	})
	it('get _note', () => {
		expect(Helpers._note).toBeDefined()
	})
	it('get _velocity', () => {
		expect(Helpers._velocity).toBeDefined()
	})
	it('get _noteValues', () => {
		expect(Helpers._noteValues).toBeDefined()
	})
	it('get getNote', () => {
		expect(Helpers.getNote).toBeDefined()
	})
	it('get getScale', () => {
		expect(Helpers.getScale).toBeDefined()
	})
	it('get getMelody', () => {
		expect(Helpers.getMelody).toBeDefined()
	})
	it('octave', () => {
		expect(Helpers.octave).toBeDefined()
	})
	it('note', () => {
		expect(Helpers.note).toBeDefined()
	})
	it('notes', () => {
		expect(Helpers.notes).toBeDefined()
	})
	it('noteValues', () => {
		expect(Helpers.noteValues).toBeDefined()
	})
	it('noteParse', () => {
		expect(Helpers.noteParse).toBeDefined()
	})
	it('parseNoteChar', () => {
		expect(Helpers.parseNoteChar).toBeDefined()
	})
	it('noteIndex', () => {
		expect(Helpers.noteIndex).toBeDefined()
	})
	it('noteStep', () => {
		expect(Helpers.noteStep).toBeDefined()
	})
	it('noteOrMany', () => {
		expect(Helpers.noteOrMany).toBeDefined()
	})
	it('noteSteps', () => {
		expect(Helpers.noteSteps).toBeDefined()
	})
	it('rhythmValues', () => {
		expect(Helpers.rhythmValues).toBeDefined()
	})
	it('rhythmNotes', () => {
		expect(Helpers.rhythmNotes).toBeDefined()
	})
	it('styleColorGradient', () => {
		expect(Helpers.styleColorGradient).toBeDefined()
	})
	it('styleBackgroundGradient', () => {
		expect(Helpers.styleBackgroundGradient).toBeDefined()
	})
	it('getNote', () => {
		expect(Helpers.getNote).toBeDefined()
	})
	it('getScale', () => {
		expect(Helpers.getScale).toBeDefined()
	})
	it('getMelody', () => {
		expect(Helpers.getMelody).toBeDefined()
	})
	it('synth', () => {
		expect(Helpers.synth).toBeDefined()
	})
	it('playOne', () => {
		expect(Helpers.playOne).toBeDefined()
	})
	it('play', () => {
		expect(Helpers.play).toBeDefined()
	})
	it('stop', () => {
		expect(Helpers.stop).toBeDefined()
	})
})
