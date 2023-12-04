import { ReactElement } from 'react'

import styles from './HostOrderDetailSmallComponent.module.css'

interface Props {
  vanImage: string
  vanName: string
  vanPrice: string | number
}

export const HostOrderDetailSmall = ({
  vanImage,
  vanName,
  vanPrice,
}: Props): ReactElement => {
  return (
    <div className={styles['host-component-van']}>
      <div
        className={styles['host-component-van__order-img']}
        style={{ backgroundImage: `url(${vanImage})` }}
      >
        {' '}
      </div>

      <div className={styles['host-component-van__order-info']}>
        <h3 className={styles['order-name']}>{vanName}</h3>
        <p className={styles['order-price']}>${vanPrice}/day</p>
      </div>
    </div>
  )
}
