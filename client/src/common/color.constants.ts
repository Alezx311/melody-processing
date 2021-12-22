export const COLOR_CLASSNAMES = [
  'primary',
  'secondary',
  'success',
  'danger',
  'warning',
  'info',
  'light',
  'dark',
  'body',
  'white',
  'transparent',
];
export const COLOR_NAMES = [
  'blue',
  'indigo',
  'purple',
  'pink',
  'red',
  'orange',
  'yellow',
  'green',
  'teal',
  'cyan',
];
export const COLOR_CODES = [
  '#ff0000',
  '#ff4e00',
  '#db7b00',
  '#ffcc00',
  '#e4ed00',
  '#81d700',
  '#00ffb4',
  '#00ffea',
  '#00baff',
  '#3c00ff',
  '#a800ff',
  '#ff00fd',
];

export class ValueColor {
  static style = COLOR_CLASSNAMES;
  static names = COLOR_NAMES;
  static codes = COLOR_CODES;
  static values = {
    style: this.style,
    names: this.names,
    codes: this.codes,
  };
}
