import { ReactElement } from 'react'
import { Link } from 'react-router-dom'

import styles from './ProductComponent.module.css'

type Props = {
  id: number
  name: string
  price: number
  type: string
  imageUrl: string
}

export const ProductComponent = ({
  id,
  name,
  price,
  type,
  imageUrl,
}: Props): ReactElement => {
  return (
    <Link to={`/vans/${id}`}>
      <div className={styles['van-product']}>
        <div
          className={styles['product-van__img']}
          style={{ backgroundImage: `url(${imageUrl})` }}
        ></div>

        <div className={styles['product-van__info']}>
          <h3 className={styles['van-name']}>{name}</h3>

          <span className={styles['van-prise']}>
            ${price}
            <span className={styles['van-price-small']}>/day</span>
          </span>
        </div>

        <button className={`${styles['product-van__btn']} ${styles[type]}`}>
          {type}
        </button>
      </div>
    </Link>
  )
}
