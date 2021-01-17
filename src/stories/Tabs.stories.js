import React, { useState } from 'react'
import { Tabs, Button } from '../components'

export default {
  title: 'Tabs',
  component: Tabs,
}

const tabsConfig = [
  {
    tabName: 'Tab 1',
    component: (
      <div>
        This is my Component 1<Button>This is a test button</Button>
      </div>
    ),
  },
  {
    tabName: 'Tab 2',
    component: (
      <div>
        This is my Component 2<Button>This is a test button</Button>
      </div>
    ),
  },
  {
    tabName: 'Tab 3',
    component: (
      <div>
        This is my Component 3<Button>This is a test button</Button>
      </div>
    ),
  },
]

export const Component = () => {
  return <Tabs tabsConfig={tabsConfig} />
}
