import { ReactElement } from 'react'
import { Host } from '../../../../data/dataHost'
import { TransactionsSmallComponent } from '../../components/TransactionsSmallComponent/TransactionsSmallComponent'

import styles from './HostVansContainer.module.css'

interface Props {
  host: Host
}

// TODO: Create a DatailsComponent for HostVans

export const HostVans = ({ host }: Props): ReactElement => {
  const transactions = TransactionsSmallComponent(host.ordersIDs)

  return (
    <div
      className={`${styles['host-component']} ${styles['host-component-vans']}`}
    >
      <h1>Your listed vans</h1>
      <div className={styles['host-component-vans-details']}>
        {transactions}
      </div>
    </div>
  )
}
