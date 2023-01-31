import React, { useState } from 'react';
import { Guitar } from './Guitar';
import { Box } from 'grommet';
import { INITIAL_STATE } from '../utils/constants';
import { IState } from '../utils/interfaces';

export const Main = () => {
  const [state, setState] = useState(INITIAL_STATE);
  const reducer = (obj: Partial<IState>) => setState({ ...state, ...obj });
  return (
    <Box height="xlarge" round alignSelf="start">
      <Box direction="column" justify="center" align="center" pad="large" gap="large">
        <Guitar state={state} reducer={reducer} />
      </Box>
    </Box>
  );
};
