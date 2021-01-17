import React, { HtmlHTMLAttributes, ReactNode, useState } from 'react'

import { Button, Box } from '../index'
import './tabs.styl'

export interface tabsProps extends HtmlHTMLAttributes<any> {
  children?: ReactNode
  tabsConfig: any
}
//
// const selectedTabStyles = css`
//   background-color: red;
// `

export const Tabs = ({ children, tabsConfig, ...rest }: tabsProps) => {
  const [selectedTab, setSelectedTab] = useState(0)

  const handleTabChange = (index: number) => {
    setSelectedTab(index)
  }

  const renderTabHeader = () => {
    return (
      tabsConfig &&
      tabsConfig.map((currConfig: any, index: number) => {
        const selectedClass = index === selectedTab ? '-selected' : ''
        return (
          <Button
            className={`dc-tabs-header-button${selectedClass}`}
            onClick={() => handleTabChange(index)}
          >
            {currConfig.tabName}
          </Button>
        )
      })
    )
  }

  const renderTabContent = () => {
    if (tabsConfig && tabsConfig[selectedTab]) {
      return tabsConfig[selectedTab].component
    }
  }

  return (
    <Box className="dc-tabs" {...rest}>
      <Box className="dc-tabs-header">Header {renderTabHeader()}</Box>
      <Box className="dc-tabs-content">{renderTabContent()}</Box>
    </Box>
  )
}
