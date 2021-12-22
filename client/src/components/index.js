import React, { useState } from 'react';

import { Guitar } from './Guitar';
import { Box } from 'grommet';
import { INITIAL_STATE } from './constants';
import { Random } from './helpers';

export const Main = () => {
  const [state, setState] = useState(INITIAL_STATE);
  const [background, setBackground] = useState(Random.styleBackgroundGradient());

  const reducer = (obj) => {
    setState({ ...state, ...obj });
    setBackground(Random.styleBackgroundGradient());
  };

  return (
    <Box height='xlarge' background={background} round alignSelf='start'>
      <Box direction='column' justify='center' align='center' pad='large' gap='large'>
        <Guitar state={state} reducer={reducer} />
      </Box>
    </Box>
  );
};
