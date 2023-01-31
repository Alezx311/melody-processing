import {
  EColor,
  EGuitarFrets,
  EGuitarString,
  EGuitarTuningName,
  EInstrumentName,
  EMelodySize,
  EScale,
  ESynthName,
} from './enums';
import { TNote } from './types';

export interface IState {
  word: string;
  words: string[];
  color: EColor;
  content: any[];
  strings: EGuitarString;
  frets: EGuitarFrets;
  tuning: EGuitarTuningName;
  rootNote: TNote;
  scale: EScale;
  size: EMelodySize;
  riff: any[];
  synth: any;
  synthName: ESynthName;
  instrumentName: EInstrumentName;
  isPlaying: boolean;
  valueOnPlay: any;
}
