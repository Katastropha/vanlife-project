import { ReactElement } from 'react'
import { NavigationSmall } from '../../components/NavigationSmall'
import { Outlet } from 'react-router-dom'

const Host = (): ReactElement => {
  console.log('host')
  return (
    <div className="content">
      <NavigationSmall />
      <Outlet />
    </div>
  )
}

export default Host
