import { ReactElement } from 'react'
import { NavigationSmall } from './NavigationSmall'
import { Outlet } from 'react-router-dom'

import './HostComponents/hostComponents.css'
import './smallHostComponents/smallHostComponents.css'

export const Host = (): ReactElement => {
  return (
    <div className="content">
      <NavigationSmall />
      <Outlet />
    </div>
  )
}
