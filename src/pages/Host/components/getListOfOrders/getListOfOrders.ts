import { dataOrders } from '../../../../data/dataOrders'
import { IOrdersData } from '../../../../data/dataOrders'
export const getListOfOrders = (arr: string[]) => {
  const result = arr.map((id) => {
    return dataOrders.find((obj: IOrdersData) => obj.id === id)
  })
  return result
}
