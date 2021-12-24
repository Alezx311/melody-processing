import React, { useState } from 'react'

import { Guitar } from './Guitar'
import { Box } from 'grommet'
import { Value } from '../common/constants'
import { HelpersRandom, tState } from '../common/helpers'

export const Main = () => {
	const [state, setState] = useState(Value.state)
	const [background, setBackground] = useState(HelpersMusic.styleBackgroundGradient())

	const reducer = (obj: tState) => {
		setState({ ...state, ...obj })
		setBackground(HelpersRandom.styleBackgroundGradient())
	}

	return (
		<Box height='xlarge' background={background} round alignSelf='start'>
			<Box direction='column' justify='center' align='center' pad='large' gap='large'>
				<Guitar state={state} reducer={reducer} />
			</Box>
		</Box>
	)
}
