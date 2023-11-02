import { ReactElement } from 'react'

type Props = {
  orderPrice: number | string
  orderDate: string
}
export const HostOrderSummarySmall = ({
  orderPrice,
  orderDate,
}: Props): ReactElement => {
  return (
    <div className="host-component__transactions-order">
      <p className="price">${orderPrice}</p>
      <p className="date">{orderDate}</p>
    </div>
  )
}
