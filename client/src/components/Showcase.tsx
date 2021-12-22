import React from 'react';
import { Check } from '../common/check';
import { Value } from '../common/constants';
import { _entries, _insp, _keys, _values } from '../common/shortcuts';
import { A, O, S } from '../common/types';

const getDiv = (content: any, props: O) => <div {...props}>{content}</div>;
const getExample = <T1 extends [S, any]>([key, value]: T1) => getDiv(_insp([key, value]), { key });
export const Showcase = () => {
  const entries = Helpers.map(getExample);

  return <div></div>;
};
