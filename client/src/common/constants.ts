import { ValueColor } from './color.constants';
import { ValueMusic } from './music.constants';
import { _insp, _json, _n, _now } from './shortcuts';
import { SVG_FILES, SVG_FOLDER } from './svg_files';
import { A, B, F, N, O, S } from './types';

export class Svg {
  static toIcon = (file: S, ind: N) => ({ file, ind, src: this.paths[ind], word: this.words[ind] });

  static folder = SVG_FOLDER;
  static files = SVG_FILES;

  static words = this.files.map((s) => s.replace(/\.svg$/i, ''));
  static paths = this.files.map((s) => `${SVG_FOLDER}/${s}`);
  static icons = this.files.map(this.toIcon);

  static count = {
    files: this.files.length,
    words: this.words.length,
    paths: this.paths.length,
    icons: this.icons.length,
  };

  static values = {
    folder: this.folder,
    count: this.count,
    files: this.files,
    words: this.words,
    paths: this.paths,
    icons: this.icons,
  };
}

export class Formatter {
  static descU: S = 'Unknown Or Undefined value';
  static descB: S = 'Boolean';
  static descN: S = 'Number';
  static descS: S = 'String';
  static descA: S = 'Array';
  static descO: S = 'Object';
  static descD: S = 'Description';

  static toDiv = (str = this.descD, max = 40, char = '#') => {
    const div = char.repeat(Math.min(~~str?.length, ~~max));
    return `
${div}
${str}
${div}
`;
  };
  static toDesc = (v: any = this.descU) =>
    this.toDiv(`
Type: ${typeof v}
IsTruthy: ${!!v}
Value: ${v}`);
  static toInsp = (v: S = this.descU) => this.toDiv(`Object: ${_json(_insp(v), null, '\t')}`);
  static toDescTitle = (v: S = this.descU) => this.toDiv(`${v}`.toUpperCase());

  static values = {
    descU: this.descU,
    descB: this.descB,
    descN: this.descN,
    descS: this.descS,
    descA: this.descA,
    descO: this.descO,
    descD: this.descD,
    toDiv: this.toDiv('Example'),
    toDesc: this.toDesc('Example'),
    toInsp: this.toInsp('Example'),
    toDescTitle: this.toDescTitle('Example'),
  };
}

export class Value {
  static Svg = Svg;
  static Formatter = Formatter;
  static Color = ValueColor;
  static Music = ValueMusic;

  static v = null;

  static bln: B = false;
  static num: N = 0;
  static str: S = '';
  static arr: A = [];
  static obj: O = {};
  static falsy = [null, undefined, this.bln, this.num, this.str];
  static blnTruthy: B = true;
  static numTruthy: N = 1;
  static strTruthy: S = 'Some Message';
  static arrTruthy: A = [true];
  static objTruthy: O = { some: 'value' };
  static truthy = [this.blnTruthy, this.numTruthy, this.strTruthy, this.arrTruthy, this.objTruthy];

  static state = {
    word: '',
    words: [],
    color: '#fff',
    content: [],
    strings: 6,
    frets: 24,
    tuning: 'E Standart',
    rootNote: 'C4',
    scale: 'minor',
    size: 500,
    riff: [],
    synth: false,
    synthName: 'PolySynth',
    instrumentName: '',
    isPlaying: false,
    valueOnPlay: {},
  };

  static func = (): null => null;

  static time = _now();
  static date = new Date().toUTCString();

  static zero = 0;
  static intMin = 1;
  static int42 = 42;

  static rangeMin = 0;
  static rangeMax = 100;

  static floatMin = 0.01;
  static floatMax = 0.99;
  static floatLength = 2;

  static intMax = _n.MAX_SAFE_INTEGER;

  static range: [N, N] = [this.rangeMin, this.rangeMax];

  static values = {
    state: this.state,
    func: this.func,
    time: this.time,
    date: this.date,
    zero: this.zero,
    intMin: this.intMin,
    int42: this.int42,
    rangeMin: this.rangeMin,
    rangeMax: this.rangeMax,
    floatMin: this.floatMin,
    floatMax: this.floatMax,
    floatLength: this.floatLength,
    intMax: this.intMax,
    range: this.range,
  };

  static optionsRandomFloat = {
    min: this.floatMin,
    max: this.floatMax,
    floatLength: this.floatLength,
  };
}
