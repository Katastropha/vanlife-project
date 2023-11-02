import { ReactElement } from 'react'
import { Host } from '../../dataHost'
import { HostOrderDetailSmall } from './smallHostComponents/HostOrderDetailSmall'
import { getListOfOrders } from './smallHostComponents/getListOfOrders'
import { initialVans } from '../../dataVans'

interface Props {
  host: Host
}

export const HostVans = ({ host }: Props): ReactElement => {
  const transactions = getListOfOrders(host.ordersIDs)
    .map(({ vanId }) => vanId)
    .map((id) => {
      return initialVans.find((obj) => obj.id === id)
    })
    .map(({ imageUrl, name, price }) => {
      return (
        <HostOrderDetailSmall
          vanImage={imageUrl}
          vanName={name}
          vanPrice={price}
        />
      )
    })

  return (
    <div className="host-component host-component-vans">
      <h1>Your listed vans</h1>
      <div className="host-component-vans-details">{transactions}</div>
    </div>
  )
}
