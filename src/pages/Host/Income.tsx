import { ReactElement } from 'react'
import { Host } from '../../dataHost'

interface Props {
  host: Host
}

// type IncomeProps = {
//   diagram: string
//   income: number
//   transactions: { orderPrice: number; orderDate: string; id: string | number }[]
// }

export const Income = ({ host }: Props): ReactElement => {
  return (
    <div className="host-component">
      <h2 className="host-component__welcome-header">Income</h2>
      <p className="host-component__text">
        Last <span className="host-component__text-underline">30 days</span>
      </p>

      <p className="host-component__welcome-price">$</p>

      <div
        className="img"
        style={{ backgroundImage: `url(${host.diagram})` }}
      ></div>
      <div className="host-component__small-header">
        <span className="small-header"></span>
        <p className="host-component__welcome-text">
          Income last{' '}
          <span className="host-component__welcome-text-underline">
            30 days
          </span>
        </p>
      </div>

      <div className="host-component__transactions">
        <h3>Your transactions ({host.transactions.length})</h3>

        <div className="host-component__transactions-order">
          <p className="price">$ppp</p>
          <p className="date">dd/mm/yy</p>
        </div>

        <div className="host-component__transactions-order">
          <p className="price">$ppp</p>
          <p className="date">dd/mm/yy</p>
        </div>

        <div className="host-component__transactions-order">
          <p className="price">$ppp</p>
          <p className="date">dd/mm/yy</p>
        </div>
      </div>
    </div>
  )
}
