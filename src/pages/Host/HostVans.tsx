import { ReactElement } from 'react'
import { Host } from '../../dataHost'
import { HostOrderDetailSmall } from './smallHostComponents/HostOrderDetailSmall'
import { getListOfOrders } from './smallHostComponents/getListOfOrders'

interface Props {
  host: Host
}

export const HostVans = ({ host }: Props): ReactElement => {
  const transactions = getListOfOrders(host.ordersIDs)

  return (
    <div className="host-component host-component-vans">
      <h1>Your listed vans</h1>
      <div className="host-component-vans-details">
        transactions details from data Orders
      </div>
    </div>
  )
}
