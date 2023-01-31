export interface IState {
  word: string
  words: string[]
  color: EColor
  content: any[]
  strings: TGuitarString
  frets: TGuitarFrets
  tuning: TGuitarTuningName
  rootNote: TNote
  scale: EScale
  size: TMelodySize
  riff: any[]
  synth: ESynth
  synthName: ESynthName
  instrumentName: EInstrumentName
  isPlaying: boolean
  valueOnPlay: any
}
