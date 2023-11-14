import { ReactElement } from 'react'
import { IVans, initialVans } from '../../../../data/dataVans'
import { useParams } from 'react-router-dom'
import { BackWithArrow } from '../../../../smallComponents/BackWithArrow'

import styles from './VanDetailedComponent.module.css'

export const VanDetailedComponent = (): ReactElement | null => {
  const { id } = useParams()
  const van: IVans | undefined =
    typeof id === 'string'
      ? initialVans.find((el) => el.id === parseInt(id))
      : undefined

  if (!van) return null

  return (
    <div className={styles['van-detail']} key={van.id}>
      <BackWithArrow text={'Back to all vans'} />

      <div
        className={styles['van-detail__img']}
        style={{ backgroundImage: `url(${van.imageUrl})` }}
      ></div>

      <button className={`${styles['van-detail__btn']} ${styles[van.type]}`}>
        {van.type}
      </button>

      <h1 className={styles['van-detail__name']}>{van.name}</h1>

      <span className={styles['van-detail__price']}>${van.price}</span>
      <span className={styles['per-day']}>/day</span>

      <p className={styles['van-detail__description']}>{van.description}</p>

      <button
        className="btn"
        onClick={() => {
          console.log('rent this van')
        }}
      >
        Rent {van.name} van
      </button>
    </div>
  )
}
