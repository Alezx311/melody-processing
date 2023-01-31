export type TNoteChar =
  | 'A'
  | 'A#'
  | 'Ab'
  | 'B'
  | 'C'
  | 'C#'
  | 'Cb'
  | 'D'
  | 'D#'
  | 'Db'
  | 'F'
  | 'E'
  | 'E#'
  | 'Eb'
  | 'G'
  | 'G#'
  | 'Gb'

export type TNote = `${TNoteChar}${string | number | ''}`
export type TNoteHalfTone = '#' | 'b'
export type TNoteWithOctave = `${TNote}${EOctave}`

export type TDurationChars = (typeof DurationChars)[number]
export type TIntervalChars = (typeof IntervalChars)[number]
