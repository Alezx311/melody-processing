import { Description, Formatter, HelpersMusic } from '../common/helpers'

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
		expect(HelpersMusic).toBeDefined()
	})

	it('arr', () => {
		expect(HelpersMusic.arr).toBeDefined()
	})
	it('val', () => {
		expect(HelpersMusic.val).toBeDefined()
	})
	it('flt', () => {
		expect(HelpersMusic.flt).toBeDefined()
	})
	it('int', () => {
		expect(HelpersMusic.int).toBeDefined()
	})
	it('min', () => {
		expect(HelpersMusic.min).toBeDefined()
	})
	it('max', () => {
		expect(HelpersMusic.max).toBeDefined()
	})
	it('diff', () => {
		expect(HelpersMusic.diff).toBeDefined()
	})
	it('last', () => {
		expect(HelpersMusic.last).toBeDefined()
	})
	it('ind', () => {
		expect(HelpersMusic.ind).toBeDefined()
	})
	it('el', () => {
		expect(HelpersMusic.el).toBeDefined()
	})
	it('shuffle', () => {
		expect(HelpersMusic.shuffle).toBeDefined()
	})
	it('part', () => {
		expect(HelpersMusic.part).toBeDefined()
	})
	it('arrLike', () => {
		expect(HelpersMusic.arrLike).toBeDefined()
	})
	it('reduceVal', () => {
		expect(HelpersMusic.reduceVal).toBeDefined()
	})
	it('reduceArr', () => {
		expect(HelpersMusic.reduceArr).toBeDefined()
	})
	it('grow', () => {
		expect(HelpersMusic.grow).toBeDefined()
	})
	it('sequence', () => {
		expect(HelpersMusic.sequence).toBeDefined()
	})
	it('merge', () => {
		expect(HelpersMusic.merge).toBeDefined()
	})
	it('double', () => {
		expect(HelpersMusic.double).toBeDefined()
	})
	it('or', () => {
		expect(HelpersMusic.or).toBeDefined()
	})
	it('repeats', () => {
		expect(HelpersMusic.repeats).toBeDefined()
	})
	it('unicals', () => {
		expect(HelpersMusic.unicals).toBeDefined()
	})
	it('condition', () => {
		expect(HelpersMusic.condition).toBeDefined()
	})
	it('shuffles', () => {
		expect(HelpersMusic.shuffles).toBeDefined()
	})
	it('shuffleunicals', () => {
		expect(HelpersMusic.shuffleunicals).toBeDefined()
	})
	it('doublesome', () => {
		expect(HelpersMusic.doublesome).toBeDefined()
	})
	it('range', () => {
		expect(HelpersMusic.range).toBeDefined()
	})
	it('boolean', () => {
		expect(HelpersMusic.boolean).toBeDefined()
	})
	it('powerOfTwo', () => {
		expect(HelpersMusic.powerOfTwo).toBeDefined()
	})
	it('values', () => {
		expect(HelpersMusic.values).toBeDefined()
	})
	it('objK', () => {
		expect(HelpersMusic.objK).toBeDefined()
	})
	it('objV', () => {
		expect(HelpersMusic.objV).toBeDefined()
	})
	it('objE', () => {
		expect(HelpersMusic.objE).toBeDefined()
	})
	it('get v', () => {
		expect(HelpersMusic.v).toBeDefined()
	})

	it('get i', () => {
		expect(HelpersMusic.i).toBeDefined()
	})

	it('get i10', () => {
		expect(HelpersMusic.i10).toBeDefined()
	})

	it('get i100', () => {
		expect(HelpersMusic.i100).toBeDefined()
	})

	it('get i1000', () => {
		expect(HelpersMusic.i1000).toBeDefined()
	})

	it('get b', () => {
		expect(HelpersMusic.b).toBeDefined()
	})

	it('get s', () => {
		expect(HelpersMusic.s).toBeDefined()
	})

	it('get a', () => {
		expect(HelpersMusic.a).toBeDefined()
	})

	it('get _noteBasic', () => {
		expect(HelpersMusic._noteBasic).toBeDefined()
	})
	it('get _noteChar', () => {
		expect(HelpersMusic._noteChar).toBeDefined()
	})
	it('get _scale', () => {
		expect(HelpersMusic._scale).toBeDefined()
	})
	it('get _durationChar', () => {
		expect(HelpersMusic._durationChar).toBeDefined()
	})
	it('get _duration', () => {
		expect(HelpersMusic._duration).toBeDefined()
	})
	it('get _intervalChar', () => {
		expect(HelpersMusic._intervalChar).toBeDefined()
	})
	it('get _synth', () => {
		expect(HelpersMusic._synth).toBeDefined()
	})
	it('get _tuningName', () => {
		expect(HelpersMusic._tuningName).toBeDefined()
	})
	it('get _tuningValue', () => {
		expect(HelpersMusic._tuningValue).toBeDefined()
	})
	it('get _colorName', () => {
		expect(HelpersMusic._colorName).toBeDefined()
	})
	it('get _colorCode', () => {
		expect(HelpersMusic._colorCode).toBeDefined()
	})
	it('get _colorClass', () => {
		expect(HelpersMusic._colorClass).toBeDefined()
	})
	it('get _values', () => {
		expect(HelpersMusic._values).toBeDefined()
	})
	it('get _octave', () => {
		expect(HelpersMusic._octave).toBeDefined()
	})
	it('get _note', () => {
		expect(HelpersMusic._note).toBeDefined()
	})
	it('get _velocity', () => {
		expect(HelpersMusic._velocity).toBeDefined()
	})
	it('get _noteValues', () => {
		expect(HelpersMusic._noteValues).toBeDefined()
	})
	it('get getNote', () => {
		expect(HelpersMusic.getNote).toBeDefined()
	})
	it('get getScale', () => {
		expect(HelpersMusic.getScale).toBeDefined()
	})
	it('get getMelody', () => {
		expect(HelpersMusic.getMelody).toBeDefined()
	})
	it('octave', () => {
		expect(HelpersMusic.octave).toBeDefined()
	})
	it('note', () => {
		expect(HelpersMusic.note).toBeDefined()
	})
	it('notes', () => {
		expect(HelpersMusic.notes).toBeDefined()
	})
	it('noteValues', () => {
		expect(HelpersMusic.noteValues).toBeDefined()
	})
	it('noteParse', () => {
		expect(HelpersMusic.noteParse).toBeDefined()
	})
	it('parseNoteChar', () => {
		expect(HelpersMusic.parseNoteChar).toBeDefined()
	})
	it('noteIndex', () => {
		expect(HelpersMusic.noteIndex).toBeDefined()
	})
	it('noteStep', () => {
		expect(HelpersMusic.noteStep).toBeDefined()
	})
	it('noteOrMany', () => {
		expect(HelpersMusic.noteOrMany).toBeDefined()
	})
	it('noteSteps', () => {
		expect(HelpersMusic.noteSteps).toBeDefined()
	})
	it('rhythmValues', () => {
		expect(HelpersMusic.rhythmValues).toBeDefined()
	})
	it('rhythmNotes', () => {
		expect(HelpersMusic.rhythmNotes).toBeDefined()
	})
	it('styleColorGradient', () => {
		expect(HelpersMusic.styleColorGradient).toBeDefined()
	})
	it('styleBackgroundGradient', () => {
		expect(HelpersMusic.styleBackgroundGradient).toBeDefined()
	})
	it('getNote', () => {
		expect(HelpersMusic.getNote).toBeDefined()
	})
	it('getScale', () => {
		expect(HelpersMusic.getScale).toBeDefined()
	})
	it('getMelody', () => {
		expect(HelpersMusic.getMelody).toBeDefined()
	})
	it('synth', () => {
		expect(HelpersMusic.synth).toBeDefined()
	})
	it('playOne', () => {
		expect(HelpersMusic.playOne).toBeDefined()
	})
	it('play', () => {
		expect(HelpersMusic.play).toBeDefined()
	})
	it('stop', () => {
		expect(HelpersMusic.stop).toBeDefined()
	})
})
