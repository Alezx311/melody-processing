// type O = { [k: string]: unknown }
// type R = Record<string, unknown>
// type A = Array<any>
// type HasKeys = { [key: string]: any} | {[index: number]: any}
// type OKey<T extends {[property: string]: any}> = Extract<keyof T, string>
// type AKey<T extends {[index: number]: any}> = Extract<keyof T, number>
// type Key<T extends HasKeys> = Extract<keyof T, string | number>
// type OItems<T extends O> = (OKey<T>)[] extends Array<infer K extends keyof T> ? { keys: (K)[], values: (T[K])[], [key: K]: K | T[K] } : { keys: (ObjK<T>)[], values: (T[ObjK<T>])[], [k in ObjK<T>]: T[k] } }[ObjK<T>]
// type AItems<T extends A> = (AKey<T>)[] extends Array<infer K extends number> ? { keys: (K)[], values: (T[K])[], [key: K]: K | T[K] } : { keys: (ObjK<T>)[], values: (T[ObjK<T>])[], [k in ObjK<T>]: T[k] } }[ObjK<T>]
// type RItems<T extends HasKeys> = { keys: (Key<T>)[], values: ([Key<T>])[], [k: Key<T>]: T[Key<T>] }
// type RItem<T extends HasKeys, K = any> = K extends keyof T ? T[K] :
// K extends 'keys' ? (Key<T>)[] :
// K extends 'values' ? (T[Key<T>])[] :
// K extends 'indexes' ? (Key<T>)[] :
// K extends 'key' ? Key<T> :
// K extends 'value' ? T[Key<T>] :
// K extends number ? { [k in number]: AKey<T> }:
// K extends string ? { [k in string]: OKey<T> }:
// K extends keyof T ? { [k in keyof T]: T[k] }[K] :  { [k in keyof T]: T[k] }

import { Console } from 'console'
import { accessSync, existsSync, fstatSync, openSync, readFileSync, statSync, writeFileSync } from 'fs'

const jsonParse = (file: string): Record<string, unknown> => {
  if (typeof file !== 'string') return { error: new Error(`Filepath must be a string!`) }
  else if (!file.length) return { error: new Error(`Invalid filepath! file`) }
  else if (!file.endsWith('.json')) return { error: new Error(`File at file is not a JSON file!`) }
  else if (!existsSync(file)) return { error: new Error(`File at file is not exists!`) }

  try {
    const content = readFileSync(file, 'utf8').toString()
    const data = content.length ? JSON.parse(content) : { error: new Error(`File at file is empty!`) }
    return data
  } catch (e: any) {
    return { error: new Error(`Error on parsing JSON file at file`, { cause: e }) }
  }
}

type R<T = unknown> = Record<string, T>
type O<T = any> = { [key: string]: T }
type A<T = any> = Array<T>

type TRecord<K = string, V = unknown> = K extends string
  ? Record<K, V>
  : K extends A<infer P extends string>
  ? Record<P, V>
  : K extends O
  ? Record<keyof K, V>
  : Record<string, V>

const isFileExist = (file: string): boolean => {
  const result = existsSync(file)
  if (!result) {
    console.error(`File at ${file} is not exists!`)
  }

  return result
}

type ResultOpts = { result: any; warning: boolean; throwable?: boolean }

const onResult = (result: any, message?: string, options?: ResultOpts) => {
  if (typeof result === 'string' && !message && !options) {
    console.error(result)
    return false
  }

  const { throwable = false, warning = true } = options || {}
  if (!!result) return result

  const err = new Error(message, { cause: result })

  if (result === undefined || typeof result === 'undefined') return err
  if (throwable) throw err
  if (warning) console.warn(err)
  else console.error(err)

  return result
}

const isFilepath = (file: string): boolean => {
  if (typeof file !== 'string') onResult(`Filepath is not a valid string!`)
  if (!existsSync(file)) onResult(`File at ${file} is not exists!`)
  if (statSync(file).isDirectory()) onResult(`${file} is directory!`)
  if (!statSync(file).isFile()) onResult(`${file} is not file!`)

  return true
}

const fileRead = (file: string): string => {
  let data = ''
  try {
    data = readFileSync(file, 'utf8').toString()
  } catch (cause) {
    const error = console.error(new Error(`Error on reading file at ${file}`, { cause }))
  }

  return data
}

// const jsonWrite = (file: string, data: unknown): boolean | Error => {
//   try {
//     const json = JSON.stringify(data, null, 2)
//     writeFileSync(file, json, 'utf8')
//     console.info(`Data was saved to ${file}`)
//     return true
//   } catch (cause: any) {
//     const e = new Error(`Error on saving data as JSON file`, { cause })
//     console.error(e)
//     return e
//   }
// }
