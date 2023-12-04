import { ReactElement } from 'react'

export const ProductSmall = (
  id: string | number,
  image: string,
  price: number,
  name: string,
): ReactElement => {
  return (
    <div className="product-small-component" key={id}>
      <div
        className="product-small-component__image"
        style={{ backgroundImage: `url(${image})` }}
      ></div>

      <div className="product-small-component__name">
        <h3 className="product-small-component__name-header">{name}</h3>
        <p className="product-small-component__name-price">${price}/day</p>
      </div>
    </div>
  )
}
