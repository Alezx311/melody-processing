import { Box } from 'grommet'
import { useState } from 'react'
import { Constants } from '../utils/constants'
import { IState } from '../utils/interfaces'
import { Guitar } from './Guitar'

export type StateReducer = (obj: Partial<IState>) => void

export const Main = () => {
  const [state, setState] = useState(Constants.INITIAL_STATE)
  const reducer: StateReducer = (obj: Partial<IState>) => setState({ ...state, ...obj })

  return (
    <Box height="xlarge" round alignSelf="start">
      <Box direction="column" justify="center" align="center" pad="large" gap="large">
        <Guitar state={state} reducer={reducer} />
      </Box>
    </Box>
  )
}
