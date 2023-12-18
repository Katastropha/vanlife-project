import { initialVans } from '../../../../data/dataVans'
import { HostOrderDetailSmall } from '../HostOrderDetailSmallComponent'
import { getListOfOrders } from '../getListOfOrders/getListOfOrders'

// TODO: correct types in VansData; Add types
export const TransactionsSmallComponent = (ordersIDs: string[]) => {
  console.log(ordersIDs)
  const transactions = getListOfOrders(ordersIDs)
    .map(({ vanId }) => vanId)
    .map((id) => initialVans.find((obj) => obj.id === id))
    .map(({ imageUrl, name, price }) => (
      <HostOrderDetailSmall
        vanImage={imageUrl}
        vanName={name}
        vanPrice={price}
      />
    ))

  return transactions
}
