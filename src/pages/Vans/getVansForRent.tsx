import { IVans } from '../../data/dataVans'
import { Product } from '../../smallComponents/Product'

export const getVansForRent = (arr: IVans[]) =>
  arr.map((el) => (
    <Product
      key={el.id}
      id={el.id}
      name={el.name}
      price={el.price}
      type={el.type}
      imageUrl={el.imageUrl}
    />
  ))
