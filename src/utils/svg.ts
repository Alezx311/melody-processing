import { SVG } from './files'
import { isString, Text } from './helpers'
import { ISvg } from './interfaces'

type Keys = keyof ISvg
type KSvg<K = any> = K extends Keys ? K : Keys
type Word<K = any> = ISvg[KSvg<K>][number]
type File<K = any> = `${KSvg<K>}.svg`
type Src<K = Keys> = { key: K; file: File<K>; words: [Word<K>]; rxp: RegExp }

const toFile = (s: string) => (s.endsWith('.svg') ? `${s}.svg` : s)
const toTrim = (s: string) => (isString(s) ? s.toLowerCase().trim() : `${s}`)
const toWords = (s: string): string[] => Text.unical(s.split(','))
const toRxp = (s: string): RegExp => new RegExp(s, 'gim')
const toSource = (key: string): Src => {
  const file = key.replace(/[^a-z0-9а-я]/gim, ' ').replace(/\s+/gim, ' ') + '.svg'
  const words = [...new Set(key.split(' ').filter(String))]
  const rxp = new RegExp(`^(${words.join('|')})$`, 'gim')
  return { key, file, words, rxp } as Src
}

export const SVG_SOURCES = Object.keys({ ...SVG }).map(el => toSource(el)) as Src[]
export const SVG_KEYS = SVG_SOURCES.reduce((acc: Keys[], src: Src) => [...acc, src.key], []) as KSvg[]
export const SVG_FILES = SVG_SOURCES.reduce((acc: File[], src: Src) => [...acc, src.file], []) as File[]
export const SVG_WORDS = SVG_SOURCES.reduce((acc: Word[], src: Src) => [...acc, ...src.words], []) as Word[]
export const SVG_VALUES = Text.unical([...SVG_KEYS, ...SVG_FILES, ...SVG_WORDS])

const isKey = (v: any): v is Keys => SVG_KEYS.includes(v)
const isFile = (v: any): v is File => SVG_FILES.includes(v)
const isWord = (v: any): v is Word => SVG_WORDS.includes(v)

const findByRxp = (v?: any) => isString(v) && SVG_SOURCES.find(({ rxp }) => rxp.test(v))
const findByKey = (v?: any) => isKey(v) && SVG_SOURCES.find(({ key }) => key === v)
const findByFile = (v?: any) => isFile(v) && SVG_SOURCES.find(({ file }) => file === v)
const findByWord = (v?: any) => isWord(v) && SVG_SOURCES.find(({ words }) => words.includes(v))

export const findSvg = (v?: any) => findByRxp(v) || findByKey(v) || findByFile(v) || findByWord(v)
