import { ReactElement } from 'react'

export const Order = (
  name: string,
  price: number,
  imageUrl: string
): ReactElement => {
  return (
    <div>
      <div className="" style={{ backgroundImage: `url(${imageUrl})` }}></div>
      <div>
        <h4>{name}</h4>
        <p>{price}</p>
      </div>

      <button
        onClick={() => {
          console.log('View Order Details')
        }}
      >
        Edit
      </button>
    </div>
  )
}
