// basic config for wrapping each component before test, https://testing-library.com/docs/react-testing-library/setup
import React, { ReactNode } from 'react'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

interface allTheProviders {
  children?: ReactNode
}

const AllTheProviders = ({ children }: allTheProviders) => {
  return <>{children}</>
}

const customRender = (ui: any, options: any) =>
  render(ui, { wrapper: AllTheProviders, ...options })

// re-export everything
export * from '@testing-library/react'

// override render method
export { customRender as render, userEvent }
