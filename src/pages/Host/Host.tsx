import { ReactElement } from 'react'
import { NavigationSmall } from '../../smallComponents/NavigationSmall'
import { Outlet } from 'react-router-dom'

export const Host = (): ReactElement => {
  return (
    <div className="content">
      <NavigationSmall />
      <Outlet />
    </div>
  )
}
