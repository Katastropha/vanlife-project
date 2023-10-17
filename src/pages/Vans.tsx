import { ReactElement, useState, useEffect } from 'react'
import { Product } from '../components/Product'

import { IVans, initialVans } from '../data'

const Vans = (): ReactElement => {
  const [vansForRent, setVansForRent] = useState(initialVans)
  const vans = vansForRent.map((el): ReactElement => {
    console.log(el.id)
    return (
      <Product
        key={el.id}
        id={el.id}
        name={el.name}
        price={el.price}
        type={el.type}
        imageUrl={el.imageUrl}
      />
    )
  })

  useEffect(() => {
    console.log(vansForRent)
  }, [vansForRent])

  const getFilteredVans = (str: string): void => {
    setVansForRent(() =>
      initialVans.filter((el) => {
        return el.type === str
      })
    )
  }

  return (
    <div className="content vans-component">
      <div className="vans-component__filter">
        <button
          className="van-filter-btn"
          onClick={() => {
            console.log('simple')
            getFilteredVans('simple')
          }}
        >
          simple
        </button>

        <button
          className="van-filter-btn"
          onClick={() => {
            console.log('rugged')
            getFilteredVans('rugged')
          }}
        >
          rugged
        </button>

        <button
          className="van-filter-btn"
          onClick={() => {
            console.log('luxury')
            getFilteredVans('luxury')
          }}
        >
          luxury
        </button>
      </div>
      <div className="vans-component__items">{vans}</div>
    </div>
  )
}

export default Vans
