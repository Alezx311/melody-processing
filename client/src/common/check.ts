import { Defaults } from "./constants"

import { _a, _e, _f, _keys, _max, _min, _n, _o, _s, _sym } from "./shortcuts"
import { A, B, F, N, O, S, tArr, tBig, tErr, tFun, tNum, tObj, tStr, tSym, tType, tValue, UND } from "./types"
//? Validation, check for truthy values, etc
export const is = (v1?: any) => !!v1
export const isNull = (v1?: any): v1 is tSym => v1 === null
export const isUndefined = (v1?: any): v1 is tSym => v1 === undefined
export const isLen = (v1?: any, min = 1) => toLen(v1) >= ~~min
export const isLikeOrType = (v1: any, v2: any) => isI(v1, v2) || isT(v1, v2)
export const isNaN = (v1?: any) => isTN(v1) && _n.isNaN(v1)
export const isNFin = (v1?: any) => isTN(v1) && _n.isFinite(v1)
export const isNInt = (v1?: any) => isTN(v1) && _n.isInteger(v1)
export const isNSafe = (v1?: any) => isTN(v1) && _n.isSafeInteger(v1)
export const isNIn = (v1: N, r: N[]): B => isN(v1) && isA(r) && v1 >= _min(...r) && v1 >= _max(...r)
export const isNInSafe: F = (v1: N): B => isN(v1) && isNIn(v1, Defaults.rangeSafe)
export const isValue = <T1>(v1?: T1): v1 is NonNullable<T1> => !isNull(v1) && !isUndefined(v1)
export const isValid = <T1>(v1?: T1): v1 is NonNullable<T1> => is(v1) && isValue(v1)

export const toT = (v1: any) => typeof v1
export const toN = (v1: any): N => (isN(v1) ? v1 : ~~v1)
export const toS = (v1: any): S => (isS(v1) ? v1 : `${v1}`)
export const toB = (v1: any): B => (isB(v1) ? v1 : is(v1))
export const toA = (v1: any): A => (isA(v1) ? v1 : [v1])
export const toO = (v1: any): O => (isO(v1) ? v1 : { v1 })

export const toLen = (v1: any): N => ~~(isO(v1) ? _keys(v1) : v1)?.length
export const toFilt = (v1: A): A => toA(v1).filter(Boolean)
export const toFlat = (v1: A, d?: N): A => toA(v1).flat(d)
export const toUniq = (v1: A): A => [...new Set([...toA(v1)])]
export const toMap = (v1: A): A => [...new Map([...toA(v1)])]

export const or = (v1?: any, v2?: any, v3?: any) => v1 || v2 || v3
export const orNull = (v1: any) => (is(v1) ? v1 : null)
export const orUnd = (v1: any) => (is(v1) ? v1 : undefined)
export const orValue = (v1: any, v2: any) => (is(v1) ? v1 : v2)
export const orFalse = (v1: any) => is(v1) && v1

export const orA: F = (v1) => orValue(v1, [v1])
export const orO: F = (v1) => orValue(v1, { v1 })
export const orN: F = (v1) => orValue(v1, ~~v1)
export const orS: F = (v1) => orValue(v1, `${v1}`)
export const orB: F = (v1) => orValue(v1, is(v1))

export const isI = <T1 extends tType>(v1: any, v2: T1): v1 is T1 => v1 instanceof v2
export const isISym = (v1: any): v1 is tSym => isI(v1, _sym)
export const isIBig = (v1: any): v1 is tBig => isI(v1, _sym)
export const isIE = (v1: any): v1 is tErr => isI(v1, _e)
export const isIS = (v1: any): v1 is tStr => isI(v1, _s)
export const isIA = (v1: any): v1 is tArr => isI(v1, _a)
export const isIN = (v1: any): v1 is tNum => isI(v1, _n)
export const isIO = (v1: any): v1 is tObj => isI(v1, _o)
export const isIF = (v1: any): v1 is tFun => isI(v1, _f)

export type fOpt<T1 = any, T2 = any> = (v1?: T1) => T2
export type fOne<T1 = tValue, T2 = any> = (v1: T1) => T2
export type fMany<T1 extends A = any[], T2 = any> = (...v: T1) => T2
export const isT = <T1>(v1: any, v2: T1): v1 is T1 => typeof v1 === typeof v2
export const isTU = (v1: any): v1 is UND => typeof v1 === "undefined"
export const isTBig = (v1: any): v1 is tBig => typeof v1 === "bigint"
export const isTSym = (v1: any): v1 is tSym => typeof v1 === "symbol"
export const isTO = (v1: any): v1 is O => typeof v1 === "object"
export const isTS = (v1: any): v1 is S => typeof v1 === "string"
export const isTN = (v1: any): v1 is N => typeof v1 === "number"
export const isTB = (v1: any): v1 is B => typeof v1 === "boolean"
export const isTF = (v1: any): v1 is F => typeof v1 === "function"

export const isA = (v1: any): v1 is A => _a.isArray(v1) && isTO(v1)
export const isO = (v1: any): v1 is O => isValue(v1) && isTO(v1)
export const isN = (v1: any): v1 is N => isTN(v1)
export const isS = (v1: any): v1 is S => isTS(v1)
export const isB = (v1: any): v1 is B => isTB(v1)

export const isAValid = (v1: any): v1 is A => isA(v1) && isLen(v1)
export const isOValid = (v1: any): v1 is O => isO(v1) && isLen(_keys(v1), 1)
export const isNValid = (v1: any): v1 is N => isN(v1) && isNSafe(v1)
export const isSValid = (v1: any): v1 is S => isS(v1) && isLen(v1, 1)
export const isBValid = (v1: any): v1 is B => isB(v1) && v1 === true

export const isAEl = (arr: A, el: any): el is typeof arr[N] => isA(arr) && arr.includes(el)
export const isOEl = (obj: O, prop: S): B => isO(obj) && isAEl(_keys(obj), prop)

export class Is {
	public static is = is
	public static isNull = isNull
	public static isUndefined = isUndefined
	public static isValue = isValue
	public static isValid = isValid
	public static isLen = isLen
	public static isLikeOrType = isLikeOrType
	public static isNaN = isNaN
	public static isNFin = isNFin
	public static isNInt = isNInt
	public static isNSafe = isNSafe
	public static isNIn = isNIn
	public static isNInSafe = isNInSafe
}

export class To {
	public static toT = toT
	public static toN = toN
	public static toS = toS
	public static toB = toB
	public static toA = toA
	public static toO = toO
}
export class Or {
	public static or = or
	public static orNull = orNull
	public static orUnd = orUnd
	public static orFalse = orFalse
	public static orValue = orValue
}
export class IsValid {
	public static isAValid = isAValid
	public static isOValid = isOValid
	public static isNValid = isNValid
	public static isSValid = isSValid
	public static isBValid = isBValid
}
export class IsT {
	public static isT = isT
	public static isTU = isTU
	public static isTO = isTO
	public static isTBig = isTBig
	public static isTSym = isTSym
	public static isTS = isTS
	public static isTN = isTN
	public static isTB = isTB
	public static isTF = isTF
}
export class IsI {
	public static isI = isI
	public static isISym = isISym
	public static isIBig = isIBig
	public static isIE = isIE
	public static isIS = isIS
	public static isIA = isIA
	public static isIN = isIN
	public static isIO = isIO
	public static isIF = isIF
}

export class Check {
	public static toT = toT
	public static toN = toN
	public static toS = toS
	public static toB = toB
	public static toA = toA
	public static toO = toO
	public static toLen = toLen
	public static toFilt = toFilt
	public static toFlat = toFlat
	public static toUniq = toUniq
	public static toMap = toMap
	public static or = or
	public static orNull = orNull
	public static orUnd = orUnd
	public static orFalse = orFalse
	public static orValue = orValue
	public static orA = orA
	public static orO = orO
	public static orN = orN
	public static orS = orS
	public static orB = orB
	public static isNull = isNull
	public static isUndefined = isUndefined
	public static isValue = isValue
	public static isValid = isValid
	public static isLen = isLen
	public static isT = isT
	public static isI = isI
	public static isLikeOrType = isLikeOrType
	public static isISym = isISym
	public static isIBig = isIBig
	public static isIE = isIE
	public static isIS = isIS
	public static isIA = isIA
	public static isIN = isIN
	public static isIO = isIO
	public static isIF = isIF
	public static isTU = isTU
	public static isTO = isTO
	public static isTBig = isTBig
	public static isTSym = isTSym
	public static isTS = isTS
	public static isTN = isTN
	public static isTB = isTB
	public static isTF = isTF
	public static isA = isA
	public static isO = isO
	public static isN = isN
	public static isS = isS
	public static isB = isB
	public static isAValid = isAValid
	public static isOValid = isOValid
	public static isNValid = isNValid
	public static isSValid = isSValid
	public static isBValid = isBValid
	public static isNaN = isNaN
	public static isNFin = isNFin
	public static isNInt = isNInt
	public static isNSafe = isNSafe
	public static isNIn = isNIn
	public static isNInSafe = isNInSafe
	public static isAEl = isAEl
	public static isOEl = isOEl
}
