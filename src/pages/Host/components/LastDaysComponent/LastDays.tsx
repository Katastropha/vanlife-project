import { ReactElement } from 'react'
import styles from './LastDayComponent.module.css'

export const LastDays = (): ReactElement => {
  return (
    <p className={styles['gray-text']}>
      Last <span className={styles['gray-text-underline']}>30 days</span>
    </p>
  )
}
