import React from 'react'
import {render} from '../../../test-utils'
import {Box} from '../Box'

describe('<Box />', () => {
    test('should display "test"', () => {
        const {getByText, debug} = render(<Box>test</Box>, {})

        debug()

        expect(getByText('test')).toBeInTheDocument()
    })
})
