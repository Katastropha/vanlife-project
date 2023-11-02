import { ReactElement } from 'react'

interface Props {
  vanImage: string
  vanName: string
  vanPrice: string | number
}

export const HostOrderDetailSmall = ({
  vanImage,
  vanName,
  vanPrice,
}: Props): ReactElement => {
  return (
    <div className="host-component-van">
      <div
        className="host-component-van__order-img"
        style={{ backgroundImage: `url(${vanImage})` }}
      >
        {' '}
      </div>

      <div className="host-component-van__order-info">
        <h3 className="order-name">{vanName}</h3>
        <p className="order-price">${vanPrice}/day</p>
      </div>
    </div>
  )
}
