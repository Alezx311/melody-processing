import { Value } from './constants'
import { _a, _insp, _keys } from './shortcuts'
import { A, N, S } from './types'

const or = (v: any = Value.v, v2: any = false) => v || v2 || null
const filt = (...v: any) => (v ? v.filter(Boolean) : [])
const len = (v: any = Value.arr) => ~~v?.length
const isLen = (v: any = Value.arr, v2 = 1) => len(v) >= ~~v2
const isArr = (v: any) => _a.isArray(v) && isLen(v)
const isStr = (v: any) => typeof v === 'string' && isLen(v)
const isObj = (v: any) => typeof v === 'object' && isLen(_keys(v))
const isNum = (v: any) => typeof v === 'number' && !Number.isNaN(v)
const isEl = (v: any, v2: any) => v?.includes(v2)
const isKey = (obj: A, prop: S) => isEl(_keys(obj), prop)
const insp = (v: any = Value.v) => _insp(v)

export class Check {
	static filt = filt
	static or = or
	static len = len
	static isLen = isLen
	static isArr = isArr
	static isStr = isStr
	static isObj = isObj
	static isNum = isNum
	static isEl = isEl
	static isKey = isKey
	static insp = insp
	static test = (value: any = Value.v, desc?: any = Value.v) => {
		const result = {
			desc,
			value,
			insp: this.insp(value),
			filt: Check.filt(value),
			or: Check.or(value),
			len: Check.len(value),
			isLen: Check.isLen(value),
			isArr: Check.isArr(value),
			isStr: Check.isStr(value),
			isObj: Check.isObj(value),
			isNum: Check.isNum(value),
		}

		return result
	}
}
