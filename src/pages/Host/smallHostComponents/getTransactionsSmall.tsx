import { initialVans } from '../../../data/dataVans'
import { HostOrderDetailSmall } from './HostOrderDetailSmall'
import { getListOfOrders } from './getListOfOrders'

// TODO: correct types in VansData; Add types
export const getTransactionsSmall = (ordersIDs: string[]) => {
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
