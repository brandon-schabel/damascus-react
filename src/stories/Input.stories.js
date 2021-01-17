import React from 'react'
import { Input } from '../components'

export default {
  title: 'Input',
  component: Input,
}

export const Component = () => {
  const [state, setState] = React.useState('')
  return (
    <div>
      Input Text: {state}
      <Input value={state} onChange={e => setState(e.target.value)} />
    </div>
  )
}
