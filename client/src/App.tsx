import React from 'react';
import './App.css';

import { Main } from './components';
import { Grommet } from 'grommet';

export const App = () => (
  <Grommet>
    <Showcase />
    <Main />
  </Grommet>
);
