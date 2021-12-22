import { Formatter, Svg, Value } from '../common/constants'
import { ValueMusic } from '../common/music.constants'
import { _keys } from '../common/shortcuts'

const keys = _keys(ValueMusic.values).filter(Boolean)

describe.skip('Melody Processing Constants', () => {
	describe('Test Constants', () => {
		it('Constants', () => {
			expect(ValueMusic).toBeDefined()
			expect(ValueMusic.values).toBeDefined()
			keys.map(k => expect(ValueMusic.values[k]).toBeDefined())
			expect(ValueMusic.all).toBeDefined()
		})
	})

	describe('Music Constants Values', () => {
		it('Values', () => {
			expect(ValueMusic.values).toBeDefined()
		})
	})

	describe('Show', () => {
		it('Values', () => {
			expect(Svg.values).toBeDefined()
		})

		it('Formatter', () => {
			expect(Formatter.values).toBeDefined()
		})

		it('Value', () => {
			expect(Value.values).toBeDefined()
		})

		it('Total', () => {
			const total = { ...Svg.values, ...Formatter.values, ...Value.values }
			console.log(total)
		})
	})
})
