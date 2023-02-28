import { Cute } from 'react-cute'
import { Random } from '../../utils/helpers'
import { KSolresol, SOLRESOL, SOLRESOL_KEYS, SOLRESOL_VALUES, VSolresol } from './dict'

const isSolresolKey = (v: any): v is KSolresol => SOLRESOL_KEYS.includes(v)
const isSolresolValue = (v: any): v is VSolresol => SOLRESOL_VALUES.includes(v)

export const phraseToWords = (phrase: string): KSolresol[] =>
  phrase
    .replace(/[^A-G\s]/i, '')
    .split(' ')
    .filter(isSolresolKey)

export const randomWordFromPhrase = (phrase: string) => Random.arrayElement(phraseToWords(phrase))
export const noteToNoteChar = (note: string): KSolresol =>
  (isSolresolKey(note) ? note : note.replace(/[^a-g]/i, '').toLowerCase()) as KSolresol
export const noteToWord = (note: string) => SOLRESOL[noteToNoteChar(note)]
export const notesTranslate = (note: any) => isSolresolKey(note) && SOLRESOL[note]

export const SolresolDictionary = ({ size = 10, all = false }: { size?: number; all?: boolean }) => {
  const content = all
    ? SOLRESOL
    : Array(size)
        .fill(1)
        .map(() => Random.arrayElement(SOLRESOL_KEYS))

  return <Cute json={content} />
}

export const Solresol = ({ source }: { source: string }) => {
  const words = phraseToWords(source)
  const translated = words.map(w => SOLRESOL[w])

  return <Cute json={{ words, translated }} />
}
