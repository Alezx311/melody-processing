import { SVG } from './files'

type Svg = typeof SVG
type Key = keyof Svg
type Word<K extends string = string> = K extends Key ? Svg[K][number] : Svg[Key][number]
type File<K extends string = string> = K extends Key ? `${K}.svg` : `${string}.svg`
type Src<K extends string = string> = { key: K; file: File<K>; words: [Word<K>]; rxp: RegExp }

export class SvgUtils {
  static toUnical = (arr: any[]) => [...new Set([...arr])]
  static toWords = (s: string) => (KEYS.includes(s) ? Svg[s] : [])
  static toFile = (s: string) => s.trim() + '.svg'
  static toTrim = (s: string) => s.trim().toLowerCase()
  static toWords = (s: string): string[] => this.toUnical(s.split(',').filter(String).map(this.toTrim))
  static toRxp = (words: string | string[]): RegExp =>
    new RegExp(
      (Array.isArray(words) ? words : [words])
        .filter(String)
        .map((w) => `(${w})`)
        .join('|'),
      'gim',
    )

  static toSource = (key: string): Src => {
    const file = this.toFile(key)
    const words = this.toWords(key)
    const rxp = this.toRxp(words)
    return { key, file, words, rxp } as Src
  }

  static sources: Src[] = [...Object.keys(SVG)].map((key: Key) => ({
    key,
    words: Svg[key],
    file: `${key}.svg`,
    rxp: new RegExp(Svg[key].join('|'), 'gim'),
  }))

  static keys: Key[] = this.toUnical(this.sources.reduce((acc: Key[], { key }) => [...acc, key], []))
  static files: File[] = this.toUnical(this.sources.reduce((acc: File[], { file }) => [...acc, file], []))
  static words: Word[] = this.toUnical(this.sources.reduce((acc: Word[], { words }) => [...acc, ...words], []))
  static values: Value[] = this.toUnical([...this.keys, ...this.files, ...this.words])

  static isKey = (v?: any): v is Key => this.keys.includes(v)
  static isFile = (v?: any): v is File => this.files.includes(v)
  static isWord = (v?: any): v is Word => this.words.includes(v)
  static isValue = (v?: any): v is Key | Word | File => this.values.includes(v)

  static findByRxp = (v?: any) => this.isValue(v) && this.sources.find((src) => src.rxp.test(v))
  static findByKey = (v?: any) => this.isKey(v) && this.sources.find((src) => src.key === v)
  static findByFile = (v?: any) => this.isFile(v) && this.sources.find((src) => src.file === v)
  static findByWord = (v?: any) => this.isWord(v) && this.sources.find((src) => src.words.includes(v))

  static find = (v?: any) => this.findByRxp(v) || this.findByKey(v) || this.findByFile(v) || this.findByWord(v)
}
