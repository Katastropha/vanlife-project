import { ReactElement } from 'react'
import { Link } from 'react-router-dom'

import styles from './HomeComponent.module.css'

export const HomeComponent = (): ReactElement => {
  return (
    <div className={`${styles['content']} ${styles['home-component']}`}>
      <h1 className={styles['home_header']}>
        You got the travel plans, we got the travel vans.
      </h1>

      <p className={styles['home_text']}>
        Add adventure to your life by joining the #vanlife movement. Rent the
        perfect van to make your perfect road trip.
      </p>

      <Link className={styles['home_btn']} to={'/vans'}>
        Find your van
      </Link>
    </div>
  )
}
