import { IVans } from '../../../../data/dataVans'
import { ProductComponent } from '../../components/ProductComponent/ProductComponent'

// import styles from './VansForRentContainer.module.css'

export const VansForRentContainer = (arr: IVans[]) =>
  arr.map((el) => (
    <ProductComponent
      key={el.id}
      id={el.id}
      name={el.name}
      price={el.price}
      type={el.type}
      imageUrl={el.imageUrl}
    />
  ))
