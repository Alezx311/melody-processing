import { Value } from './constants'
import { _a, _insp, _keys } from './shortcuts'
import { A, B, N, O, S } from './types'
//? Validation, check for truthy values, etc

const _v = Value._val

const or = (v1: any = _v, v2: any = false) => v1 || v2 || null
const filt = (v: A = Value.arr) => v.filter(Boolean)
const len = (v: S | A = Value.arr) => ~~v?.length
const isLen = (v: S | A = Value.arr, min: N = 1) => len(v) >= ~~min
const isArr = (v: A = Value.arr) => _a.isArray(v) && isLen(v)
const isStr = (v: S = Value.str) => typeof v === 'string' && isLen(v)
const isObj = (v: O = Value.obj) => typeof v === 'object' && isLen(_keys(v))
const isNum = (v: N = Value.num) => typeof v === 'number' && !Number.isNaN(v)
const isEl = (arr: A = Value.arr, v: any = _v): B => arr?.includes(v)
const isKey = (obj: O = Value.obj, prop: S = '') => _keys(obj).includes(prop)
const insp = (v: any = _v) => v && _insp(v)

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

	static values = {
		or: this.or(),
		filt: this.filt(),
		len: this.len(),
		isLen: this.isLen(),
		isArr: this.isArr(),
		isStr: this.isStr(),
		isObj: this.isObj(),
		isNum: this.isNum(),
		isEl: this.isEl(),
		isKey: this.isKey(),
		insp: this.insp(),
	}
}
