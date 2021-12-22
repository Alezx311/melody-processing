import { N, tDuration, tNote, tNoteChar } from './types'

export interface tNoteValuesRequired {
	note: tNote
	char: tNoteChar
	octave: N
}

export interface tNoteValues extends tNoteValuesRequired {
	index?: N
	duration?: tDuration
	velocity?: N
}
