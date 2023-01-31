import { SVG } from './files'

type TSvgKey = keyof SVG
type TSvgWord<T = string> = T extends TSvgKey ? SVG[T] : string[]
type TSvgFile<T = string> = `${T extends TSvgKey ? T : string}.svg`
type TSvgSource<T extends string = TSvgKey> = { key: T; file: TSvgFile<T>; words: TSvgWord<T>; rxp: RegExp }
type TSvgValue = TSvgKey | TSvgWord | TSvgFile

export class Svg {
  static toUnical = (arr: any[]) => [...new Set([...arr])]
  static toWords = (s: string) => (KEYS.includes(s) ? SVG[s] : [])
  static toFile = (s: string): TSvgFile => (s.endsWith('.svg') ? s : `${s}.svg`)
  static toTrim = (s: string) => s.trim().toLowerCase()
  static toWords = (s: string): string[] => Svg.toUnical(s.split(',').filter(String).map(Svg.toTrim))
  static toRxp = (words: string | string[]): RegExp =>
    new RegExp(
      (Array.isArray(words) ? words : [words])
        .filter(String)
        .map((w) => `(${w})`)
        .join('|'),
      'gim',
    )

  static toSource = (key: string): TSvgSource => {
    const file = Svg.toFile(key)
    const words = Svg.toWords(key)
    const rxp = Svg.toRxp(words)
    return { key, file, words, rxp } as TSvgSource
  }

  static sources: TSvgSource[] = [...Object.keys(SVG)].map((key: TSvgKey) => ({
    key,
    words: SVG[key],
    file: `${key}.svg`,
    rxp: new RegExp(SVG[key].join('|'), 'gim'),
  }))

  static keys: TSvgKey[] = Svg.toUnical(Svg.sources.reduce((acc: TSvgKey[], { key }) => [...acc, key], []))
  static files: TSvgFile[] = Svg.toUnical(Svg.sources.reduce((acc: TSvgFile[], { file }) => [...acc, file], []))
  static words: TSvgWord[] = Svg.toUnical(Svg.sources.reduce((acc: TSvgWord[], { words }) => [...acc, ...words], []))
  static values: TSvgValue[] = Svg.toUnical([...this.keys, ...this.files, ...this.words])

  static isKey = (v?: any): v is TSvgKey => this.keys.includes(v)
  static isFile = (v?: any): v is TSvgFile => this.files.includes(v)
  static isWord = (v?: any): v is TSvgWord => this.words.includes(v)
  static isValue = (v?: any): v is TSvgValue => this.values.includes(v)

  static findByRxp = (v?: any) => this.isValue(v) && this.sources.find((src) => src.rxp.test(v))
  static findByKey = (v?: any) => this.isKey(v) && this.sources.find((src) => src.key === v)
  static findByFile = (v?: any) => this.isFile(v) && this.sources.find((src) => src.file === v)
  static findByWord = (v?: any) => this.isWord(v) && this.sources.find((src) => src.word === v)

  static find = (v?: any) => findByRxp(v) || findByKey(v) || findByFile(v) || findByWord(v)
}
