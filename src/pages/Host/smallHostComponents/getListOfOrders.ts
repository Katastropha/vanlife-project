import { dataOrders } from '../../../data/dataOrders'
import { PropsOrdersData } from '../../../data/dataOrders'
export const getListOfOrders = (arr: string[]) => {
  const result = arr.map((id) => {
    return dataOrders.find((obj: PropsOrdersData) => obj.id === id)
  })
  return result
}
