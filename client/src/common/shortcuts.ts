import fs from 'fs'
import util from 'util'
import { O, S, U } from './types'

//? Shortcuts for useful functions
export const _p = Promise
export const _f = Function
export const _s = String
export const _a = Array
export const _n = Number
export const _o = Object
export const _r = RegExp

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
export const _err = console.error

export const _now = Date.now
export const _perf = performance.now

export const _fs = fs.promises
export const _fread = _fs.readFile
export const _fwrite = _fs.writeFile
export const _fappend = _fs.appendFile

export const _rand = Math.random
export const _floor = Math.floor
export const _ceil = Math.ceil
export const _sign = Math.sign
export const _min = Math.min
export const _max = Math.max

export const _insp = util.inspect
export const _json = JSON.stringify

export const _keys = <T1 extends O>(obj: T1): (keyof T1)[] => _o.keys(obj).filter(Boolean)
export const _values = _o.values
export const _val = <T1 extends O>(obj: T1): T1[keyof T1][] => _keys(obj).map(k => obj[k])
export const _entries = <T1 extends O>(obj: T1): [keyof T1, T1[keyof T1]][] => _keys(obj).map(k => [k, obj[k]])
export const _fromE = <T1 = U, T2 = S>(arr: [T2, T1][]): { [s in keyof T2]: T1 } => _o.fromEntries(arr)
