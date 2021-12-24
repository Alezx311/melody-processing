import { Box } from 'grommet'
import React, { useState } from 'react'
import { Defaults } from '../common/constants'
import { Helpers } from '../common/helpers'
import { tState } from '../common/types'
import { Guitar } from './Guitar'

export const Main = () => {
	const [state, setState] = useState(Defaults.state)
	const [background, setBackground] = useState(Helpers.styleBackgroundGradient)

	const reducer = (obj: tState) => {
		setState({ ...state, ...obj })
		setBackground(Helpers.styleBackgroundGradient)
	}

	return (
		<Box height='xlarge' background={background} round alignSelf='start'>
			<Box direction='column' justify='center' align='center' pad='large' gap='large'>
				<Guitar state={state} reducer={reducer} />
			</Box>
		</Box>
	)
}
