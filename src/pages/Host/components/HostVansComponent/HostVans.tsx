import { ReactElement } from 'react'
import { Host } from '../../../../data/dataHost'
import { getTransactionsSmall } from '../../smallHostComponents/getTransactionsSmall'

import styles from './HostVansComponent.module.css'

interface Props {
  host: Host
}

// TODO: Create a DatailsComponent for HostVans

export const HostVans = ({ host }: Props): ReactElement => {
  const transactions = getTransactionsSmall(host.ordersIDs)

  return (
    <div className={styles['host-component host-component-vans']}>
      <h1>Your listed vans</h1>
      <div className={styles['host-component-vans-details']}>
        {transactions}
      </div>
    </div>
  )
}
