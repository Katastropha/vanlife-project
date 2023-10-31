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
    <div>
      <div
        className="host-component-vans__order-img"
        style={{ backgroundImage: `url(${vanImage})` }}
      >
        {' '}
      </div>

      <div className="host-component-vans__order-info">
        <h3 className="">{vanName}</h3>
        <p className="">${vanPrice}/day</p>
      </div>
    </div>
  )
}
