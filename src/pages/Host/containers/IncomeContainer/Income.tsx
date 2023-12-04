import { ReactElement } from 'react'
import { Host } from '../../../../data/dataHost'
import { LastDays } from '../../smallHostComponents/LastDays'
import { HostOrderSummarySmall } from '../../components/HostOrderSummarySmallComponent/HostOrderSummarySmall'

import { getListOfOrders } from '../../smallHostComponents/getListOfOrders'

import styles from './IncomeContainer.module.css'

interface Props {
  host: Host
}

let keys = 1

// TODO: Fix types orderPrice and orderDate

export const Income = ({ host }: Props): ReactElement => {
  const transactions = getListOfOrders(host.ordersIDs).map(
    ({ orderPrice, orderDate }) => {
      return (
        <HostOrderSummarySmall
          key={keys++}
          orderPrice={orderPrice}
          orderDate={orderDate}
        />
      )
    },
  )

  return (
    <div
      className={`${styles['host-component']} ${styles['host-component-income']}`}
    >
      <h2 className={styles['host-component__welcome-header']}>Income</h2>
      <LastDays />
      <p className={styles['host-component__welcome-price']}>${host.income}</p>
      <div
        className={styles['img']}
        style={{
          backgroundImage: `url(${host.diagram})`,
          backgroundRepeat: 'none',
        }}
      ></div>
      <div className={styles['host-component__small-header']}>
        <p className={styles['block-header']}>
          Your transactions ({host.ordersIDs.length})
        </p>
        <LastDays />
      </div>
      {transactions}
    </div>
  )
}
