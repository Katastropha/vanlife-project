import { initialVans } from '../../../dataVans'
import { HostOrderDetailSmall } from './HostOrderDetailSmall'
import { HostOrderSummarySmall } from './HostOrderSummarySmall'
import { getListOfOrders } from './getListOfOrders'

// HostOrderSummarySmall ======>>>> price and date of order
// HostOrderDetailSmall ======>>>> image, price per day and name of Van

type Props = {
  ordersIDs: string[]
  nameOfComponent: string
}

export const getListOfComponentsTest = ({
  ordersIDs,
  nameOfComponent,
}: Props) => {
  const listOfOrders = getListOfOrders(ordersIDs)

  if (nameOfComponent === 'HostOrderSummarySmall') {
    listOfOrders.map(({ orderPrice, orderDate }) => {
      return (
        <HostOrderSummarySmall orderPrice={orderPrice} orderDate={orderDate} />
      )
    })
  } else if (nameOfComponent === 'HostOrderDetailSmall') {
    listOfOrders
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
  }
}
