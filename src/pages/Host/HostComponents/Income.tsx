import { ReactElement, useEffect } from 'react'
import { Host } from '../../../data/dataHost'
import { LastDays } from '../smallHostComponents/LastDays'
import { HostOrderSummarySmall } from '../smallHostComponents/HostOrderSummarySmall'

import { getListOfOrders } from '../smallHostComponents/getListOfOrders'

interface Props {
  host: Host
}

let keys = 1

console.log('INCOME')

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
    <div className="host-component host-component-income">
      <h2 className="host-component__welcome-header">Income</h2>
      <LastDays />
      <p className="host-component__welcome-price">${host.income}</p>
      <div
        className="img"
        style={{
          backgroundImage: `url(${host.diagram})`,
          backgroundRepeat: 'none',
        }}
      ></div>
      <div className="host-component__small-header">
        <p className="block-header">
          Your transactions ({host.ordersIDs.length})
        </p>
        <LastDays />
      </div>
      {transactions}
    </div>
  )
}
