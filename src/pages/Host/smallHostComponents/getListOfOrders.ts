import { dataOrders } from '../../../dataOrders'

export const getListOfOrders = (arr: string[]) => {
  const result = arr.map((id) => {
    return dataOrders.find((obj) => obj.id === id)
  })
  return result
}
