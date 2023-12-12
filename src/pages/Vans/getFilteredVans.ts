import { IVans, initialVans } from '../../data/dataVans'

export const getFilteredVans = (type: string): IVans[] =>
  initialVans.filter((el) => el.type === type)
