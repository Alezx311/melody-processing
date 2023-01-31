import React from 'react';
import { Box, Button, Text } from 'grommet';
import { NOTES, SYNTHS } from '../../utils/constants';

export const Player = () => {
  const notes = NOTES.map(v => <Button key={v} label={v} />);
  const synths = SYNTHS.map(label => (
    <Box key={label} direction="row" align="center" gap="small">
      {notes}
      <Text>{label}</Text>
      <Button size="small" label="Melody" />
    </Box>
  ));

  return (
    <Box direction="column" align="center" gap="medium">
      {synths}
    </Box>
  );
};
