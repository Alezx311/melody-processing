import React from 'react'
import { Random } from '../helpers'
import { SOLRESOL_CHARS, SOLRESOL_DICT } from './dict'
import { Cute } from 'react-cute'

export const phraseToWords = phrase => phrase.replace(/[^A-G\s]/i, '').split(' ')
export const randomWordFromPhrase = phrase => Random.arrayElement(phraseToWords(phrase))
export const noteToNoteChar = note => note.replace(/[^a-g]/i, '').toUpperCase()
export const noteToWord = note => SOLRESOL_CHARS[noteToNoteChar(note)]
export const notesTranslate = noteStr => SOLRESOL_DICT[noteStr]

export const SolresolDictionary = (opt = { all: false }) => {
  const content = opt.all
    ? SOLRESOL_DICT
    : Array(opt?.size ?? 10)
        .fill(1)
        .map(() => Random.arrayElement(SOLRESOL_DICT))

  return <Cute src={content} />
}

export const Solresol = ({ source }) => {
  const words = phraseToWords(source)
  const translated = words.map(w => SOLRESOL_DICT[w])

  return <Cute src={{ words, translated }} />
}
