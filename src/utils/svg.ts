import { SVG } from './files'

type Svg = typeof SVG
type Key = keyof Svg
type Word<K extends string = string> = K extends Key ? Svg[K][number] : Svg[Key][number]
type File<K extends string = string> = K extends Key ? `${K}.svg` : `${string}.svg`
type Src<K extends string = string> = { key: K; file: File<K>; words: [Word<K>]; rxp: RegExp }

const toFile = (s: string) => (s.endsWith('.svg') ? `${s}.svg` : s)
const toTrim = (s: string) => (Is.string(s) ? s.toLowerCase().trim() : `${s}`)
const toWords = (s: string): Word[] => Text.unical(s.split(','))
const toRxp = (s: string | string[]): RegExp =>
  new RegExp((Is.array(s) ? [...s] : [s]).map(w => `(${w.trim()})`).join('|'), 'gim')
const toSource = (key: string): Src => {
  const file = toFile(key)
  const words = toWords(key)
  const rxp = toRxp(words)
  return { key, file, words, rxp } as Src
}

export class SvgUtils {
  static sources: Src[] = [...Object.keys(SVG).map(toSources)] as const

  static keys: Key[] = Text.unical(this.sources.reduce((acc: Key[], { key }) => [...acc, key], []))
  static files: File[] = Text.unical(this.sources.reduce((acc: File[], { file }) => [...acc, file], []))
  static words: Word[] = Text.unical(this.sources.reduce((acc: Word[], { words }) => [...acc, ...words], []))
  static values: Value[] = Text.unical([...this.keys, ...this.files, ...this.words])

  static isKey = (v?: any): v is Key => this.keys.includes(v)
  static isFile = (v?: any): v is File => this.files.includes(v)
  static isWord = (v?: any): v is Word => this.words.includes(v)
  static isValue = (v?: any): v is Key | Word | File => this.values.includes(v)

  static findByRxp = (v?: any) => Is.string(v) && this.sources.find(({ rxp }) => rxp.test(v))
  static findByKey = (v?: any) => this.isKey(v) && this.sources.find(({ key }) => key === v)
  static findByFile = (v?: any) => this.isFile(v) && this.sources.find(({ file }) => file === v)
  static findByWord = (v?: any) => this.isWord(v) && this.sources.find(({ words }) => words.includes(v))

  static find = (v?: any) => this.findByRxp(v) || this.findByKey(v) || this.findByFile(v) || this.findByWord(v)
}
