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
  const file = key.replace(/\s+/gim, ' ') + '.svg'
  const words = [...new Set(key.split(' '))]
  const rxp = new RegExp(words.join('|'), 'gim')
  return { key, file, words, rxp } as Src
}

const SVG_SOURCES = Object.keys({ ...SVG }).map(el => toSource(el)) as Src[]
const SVG_KEYS = SVG_SOURCES.reduce((acc: Keys[], src: Src) => [...acc, src.key], []) as KSvg[]
const SVG_FILES = SVG_SOURCES.reduce((acc: File[], src: Src) => [...acc, src.file], []) as File[]
const SVG_WORDS = SVG_SOURCES.reduce((acc: Word[], src: Src) => [...acc, ...src.words], []) as Word[]
const SVG_VALUES = Text.unical([...SVG_KEYS, ...SVG_FILES, ...SVG_WORDS])

export class SvgUtils {
  public static SOURCES = SVG_SOURCES
  public static KEYS = SVG_KEYS
  public static FILES = SVG_FILES
  public static WORDS = SVG_WORDS
  public static VALUES = SVG_VALUES

  public static isKey = (v?: any): v is Keys => SVG_KEYS.includes(v)
  public static isFile = (v?: any): v is File => SVG_FILES.includes(v)
  public static isWord = (v?: any): v is Word => SVG_WORDS.includes(v)
  public static isValue = (v?: any): v is Keys | Word | File => SVG_VALUES.includes(v)

  public static findByRxp = (v?: any) => isString(v) && SVG_SOURCES.find(({ rxp }) => rxp.test(v))
  public static findByKey = (v?: any) => SvgUtils.isKey(v) && SVG_SOURCES.find(({ key }) => key === v)
  public static findByFile = (v?: any) => SvgUtils.isFile(v) && SVG_SOURCES.find(({ file }) => file === v)
  public static findByWord = (v?: any) => SvgUtils.isWord(v) && SVG_SOURCES.find(({ words }) => words.includes(v))

  public static find = (v?: any) =>
    SvgUtils.findByRxp(v) || SvgUtils.findByKey(v) || SvgUtils.findByFile(v) || SvgUtils.findByWord(v)
}
