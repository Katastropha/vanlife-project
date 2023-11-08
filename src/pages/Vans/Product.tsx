import { ReactElement } from 'react'
import { Link } from 'react-router-dom'

type ProductProps = {
  id: number
  name: string
  price: number
  type: string
  imageUrl: string
}

export const Product = ({
  id,
  name,
  price,
  type,
  imageUrl,
}: ProductProps): ReactElement => {
  return (
    <Link to={`/vans/${id}`}>
      <div className="van-product">
        <div
          className="product-van__img"
          style={{ backgroundImage: `url(${imageUrl})` }}
        ></div>

        <div className="product-van__info">
          <h3 className="van-name">{name}</h3>

          <span className="van-prise">
            ${price}
            <span className="van-price-small">/day</span>
          </span>
        </div>

        <button className={`product-van__btn ${type}`}>{type}</button>
      </div>
    </Link>
  )
}
