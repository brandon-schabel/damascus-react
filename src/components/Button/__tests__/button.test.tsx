import React from 'react'
import { render, userEvent } from '../../../test-utils'
import { Button } from '../Button'

describe('<Button />', () => {
  test('should display "test" in button text', () => {
    const { getByText } = render(<Button>test</Button>, {})

    expect(getByText('test')).toBeInTheDocument()
  })

  test('button should handle onClick', () => {
    const mockFn = jest.fn()

    const { getByRole } = render(
      <Button onClick={mockFn} data-testid={'test'}>
        test
      </Button>,
      {}
    )

    userEvent.click(getByRole('button'))

    expect(mockFn).toHaveBeenCalled()
  })
})
