import { ReactElement } from 'react'
import { Host } from '../../../data/dataHost'
import { getTransactionsSmall } from '../smallHostComponents/getTransactionsSmall'

interface Props {
  host: Host
}

export const HostVans = ({ host }: Props): ReactElement => {
  const transactions = getTransactionsSmall(host.ordersIDs)

  return (
    <div className="host-component host-component-vans">
      <h1>Your listed vans</h1>
      <div className="host-component-vans-details">{transactions}</div>
    </div>
  )
}

// export const HostVans = ({ host }: Props): ReactElement => {
//   const transactions = getTransactionsSmall(host.ordersIDs)
//   return (
//     <>
//       <h1>I am Vans</h1>
//       {transactions}
//     </>
//   )
// }
