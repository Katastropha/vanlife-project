import { initialVans } from '../../../data/dataVans'
import { HostOrderDetailSmall } from './HostOrderDetailSmall'
import { getListOfOrders } from './getListOfOrders'

export const getTransactionsSmall = (ordersIDs: string[]) => {
  const transactions = getListOfOrders(ordersIDs)
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

  return transactions
}
