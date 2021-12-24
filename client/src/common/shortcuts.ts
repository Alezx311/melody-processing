import fs from 'fs'
import util from 'util'
import { A, B, E, F, N, O, P, S, U, UND } from './types'

export const _sym = Symbol
export const _big = BigInt
export const _e = Error
export const _s = String
export const _a = Array
export const _n = Number
export const _o = Object
export const _r = RegExp
export const _p = Promise
export const _f = Function
export const _i = {
	Symbol: Symbol,
	BigInt: BigInt,
	Error: Error,
	String: String,
	Array: Array,
	Number: Number,
	Object: Object,
	RegExp: RegExp,
	Promise: Promise,
	Function: Function,
}
export const _iNames = _o.keys(_i) as (keyof typeof _i)[]
export const _iFind = (v: any) => _iNames.find(desc => v instanceof _i[desc])

export const _insp = util.inspect
export const _strngf = JSON.stringify
export const _parse = JSON.parse
export const _json = (v: any): S => _strngf(v, null, '\t')
export const _jsonInsp = (v: any): S => _json(_insp(v, true))
export const _jsonFormat = (v: any): O => _parse(_strngf(v))

export const _type = (v1: any) => typeof v1
export const _isInst = (v1: any, v2: any) => v1 instanceof v2

export const _keys = _o.keys
export const _val = _o.values
export const _entries = _o.entries
// export const _keys = <T1 extends O>(obj: T1): (keyof T1)[] => _o.keys(obj).filter(Boolean) as (keyof T1)[]
// export const _val = <T1 extends O>(obj: T1): T1[keyof T1][] => _keys(obj).map(k => obj[k])
// export const _entries = <T1 extends O>(obj: T1): [keyof T1, T1[keyof T1]][] => _keys(obj).map(k => [k, obj[k]])
// export const _fromE = <T1 = U, T2 = S>(arr: [T2, T1][]): { [s in keyof T2]: T1 } => _o.fromEntries(arr)
export const _fromE = _o.fromEntries
export const _about = (source: any, desc: S, from?: S) => ({
	desc,
	source,
	from,
	is: (v?: any) => v === source || _isInst(v, source),
	typeof: _type(source),
	isTruthy: !!source,
})

export class Primitives {
	static UND: UND = undefined
	static NULL: null = null
	static E: E = new Error('Example of Error')
	static N: N = Math.random()
	static B: B = true
	static S: S = this.N.toFixed(2)
	static A: A = [true]
	static O: O = { err: this.E }
	static F: F = () => {}
	static P: P = Promise.resolve(true)

	static Examples = {
		UND: { instance: this.UND, desc: 'Example of UND' },
		NULL: { instance: this.NULL, desc: 'Example of NULL' },
		E: { instance: this.E, desc: 'Example of E' },
		N: { instance: this.N, desc: 'Example of N' },
		B: { instance: this.B, desc: 'Example of B' },
		S: { instance: this.S, desc: 'Example of S' },
		A: { instance: this.A, desc: 'Example of A' },
		O: { instance: this.O, desc: 'Example of O' },
		F: { instance: this.F, desc: 'Example of F' },
		P: { instance: this.P, desc: 'Example of P' },
	}
}

export const _inst = (v1: any, v2: any): v1 is typeof v2 => v1 instanceof v2
export const _isP = (v: any): v is typeof _p => _inst(v, _p)
export const _isF = (v: any): v is typeof _f => _inst(v, _f)
export const _isS = (v: any): v is typeof _s => _inst(v, _s)
export const _isA = (v: any): v is typeof _a => _inst(v, _a)
export const _isN = (v: any): v is typeof _n => _inst(v, _n)
export const _isO = (v: any): v is typeof _o => _inst(v, _o)
export const _isR = (v: any): v is typeof _r => _inst(v, _r)

export const _pRes = _p.resolve
export const _pRej = _p.reject
export const _pAll = _p.all
export const _pRace = _p.race
export const _pSetl = _p.allSettled

export const _log = console.log
export const _inf = console.info
export const _tab = console.table
export const _deb = console.debug
export const _dir = console.dir
export const _war = console.warn
export const _error = console.error
export const _trace = console.trace
export const _console = {
	log: _about(_log, '_log'),
	inf: _about(_inf, '_inf'),
	tab: _about(_tab, '_tab'),
	deb: _about(_deb, '_deb'),
	dir: _about(_dir, '_dir'),
	war: _about(_war, '_war'),
	error: _about(_error, '_error'),
	trace: _about(_trace, '_trace'),
}

export const _now = Date.now
export const _perf = performance.now

export const _fs = fs.promises
export const _fRead = _fs.readFile
export const _fWrite = _fs.writeFile
export const _fAppend = _fs.appendFile

export const _rand = Math.random
export const _floor = Math.floor
export const _ceil = Math.ceil
export const _sign = Math.sign
export const _min = Math.min
export const _max = Math.max

export const _primitive = {
	Promise: { instance: Promise, example: Promise.resolve('Example') },
	Function: { instance: Function, example: () => 'Example' },
	String: { instance: String, example: 'Example' },
	Array: { instance: Array, example: ['Example'] },
	Number: { instance: Number, example: 42 },
	Object: { instance: Object, example: { prop: 'Example' } },
	RegExp: { instance: RegExp, example: new RegExp('') },
}
