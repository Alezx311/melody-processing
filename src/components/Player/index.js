import React from 'react';
import { Box, Button, Text } from 'grommet';
import { SYNTHS, NOTES } from '../constants';

const Synths = (props) =>
  SYNTHS.map((label) => (
    <Box key={label} direction='row' align='center' gap='small'>
      <Notes />
      <Text>{label}</Text>
      <Button size='small' label='Melody' />
    </Box>
  ));

const Notes = (props) => NOTES.map((label) => <Button key={label} label={label} />);

export const Player = (props) => {
  return (
    <Box direction='column' align='center' gap='medium'>
      <Synths />
    </Box>
  );
};
