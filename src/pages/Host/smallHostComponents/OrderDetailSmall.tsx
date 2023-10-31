import { ReactElement } from 'react'

type Props = {
  orderPrice: number
  orderDate: string
}
export const OrderDetailSmall = ({
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
