import { ReactElement } from 'react'
import { NavigationSmall } from '../../components/NavigationSmall'
import { Outlet } from 'react-router-dom'

export const Host = (): ReactElement => {
  return (
    <div className="content">
      <NavigationSmall />
      <Outlet />
    </div>
  )
}
