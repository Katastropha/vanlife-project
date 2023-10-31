import { ReactElement } from 'react'
import { Host } from '../../dataHost'
import { LastDays } from './smallHostComponents/LastDays'
import { OrderDetailSmall } from './smallHostComponents/OrderDetailSmall'

interface Props {
  host: Host
}

export const Income = ({ host }: Props): ReactElement => {
  const orders = host.transactions
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
        <p className="block-header">Your transactions ({orders.length})</p>
        <LastDays />
      </div>

      <div className="host-component__transactions">
        {orders.map((obj) => {
          return (
            <OrderDetailSmall
              orderPrice={obj.orderPrice}
              orderDate={obj.orderDate}
            />
          )
        })}
      </div>
    </div>
  )
}
