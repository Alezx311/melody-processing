import {
  TColor,
  TGuitarFrets,
  TGuitarString,
  TInstrumentName,
  TMelodySize,
  TNote,
  TScale,
  TSynthName,
  TTuningName,
} from './constants';

export interface IState {
  word: string;
  words: string[];
  color: TColor;
  content: any[];
  strings: TGuitarString;
  frets: TGuitarFrets;
  tuning: TTuningName;
  rootNote: TNote;
  scale: TScale;
  size: TMelodySize;
  riff: any[];
  synth: any;
  synthName: TSynthName;
  instrumentName: TInstrumentName;
  isPlaying: boolean;
  valueOnPlay: any;
}
