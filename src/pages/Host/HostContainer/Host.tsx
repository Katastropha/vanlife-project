import { ReactElement } from 'react'
import { NavigationSmall } from '../components/NavigationsSmallComponent/NavigationSmall'
import { Outlet } from 'react-router-dom'

import styles from './HostContainer.module.css'

export const Host = (): ReactElement => {
  return (
    <div className={styles['content']}>
      <NavigationSmall />
      <Outlet />
    </div>
  )
}
