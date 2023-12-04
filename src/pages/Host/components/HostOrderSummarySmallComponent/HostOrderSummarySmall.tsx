import { ReactElement } from 'react'
import styles from './HostOrderSummarySmallComponent.module.css'

type Props = {
  orderPrice: number | string
  orderDate: string
}
export const HostOrderSummarySmall = ({
  orderPrice,
  orderDate,
}: Props): ReactElement => {
  return (
    <div className={styles['host-component__transactions-order']}>
      <p className={styles['price']}>${orderPrice}</p>
      <p className={styles['date']}>{orderDate}</p>
    </div>
  )
}
