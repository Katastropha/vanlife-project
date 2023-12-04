import { ReactElement } from 'react'
import { NavigationSmall } from './components/NavigationsSmallComponent/NavigationSmall'
import { Outlet } from 'react-router-dom'

import './HostComponents/host-components-css/hostComponents.css'
import './smallHostComponents/small-host-components-css/smallHostComponents.css'

export const Host = (): ReactElement => {
  return (
    <div className="content">
      <NavigationSmall />
      <Outlet />
    </div>
  )
}
