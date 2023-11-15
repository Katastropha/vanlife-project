import { ReactElement } from 'react'
import { Link } from 'react-router-dom'

import styles from './AboutComponent.module.css'

export const AboutComponent = (): ReactElement => {
  console.log('about')
  return (
    <div className={styles['content']}>
      <div className={styles['about__img']}></div>

      <div className={styles['about-component']}>
        <div className={styles['about__information']}>
          <h1 className={styles['about__information-header']}>
            Don’t squeeze in a sedan when you could relax in a van.
          </h1>

          <p className={styles['about__information-text']}>
            Our mission is to enliven your road trip with the perfect travel van
            rental. Our vans are recertified before each trip to ensure your
            travel plans can go off without a hitch. (Hitch costs extra 😉)
          </p>

          <p className={styles['about__information-text']}>
            Our team is full of vanlife enthusiasts who know firsthand the magic
            of touring the world on 4 wheels.
          </p>

          <div className={styles['about__information-card']}>
            <h2 className={styles['card-header']}>
              Your destination is waiting. Your van is ready.
            </h2>

            <Link className={styles['card-btn']} to={'/vans'}>
              Explore our vans
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
