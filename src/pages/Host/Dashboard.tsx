import { ReactElement } from 'react'
import { Star } from './smallHostComponents/Star'
import { LastDays } from './smallHostComponents/LastDays'
// import { IVans, initialVans } from '../../data'
// import { Order } from '../../components/Order'

// const getListOfRentedItems = (arr: number[], data: IVans[]): IVans[] => {
//   const result = arr.map((vanId) => {
//     return data.find((item) => {
//       return item.id === vanId
//     })
//   })

//   return result
// }

// let orders = listOfVansId.length ? getListOfRentedItems(listOfVansId, initialVans).map(el => {
//   return <Order
//     imageUrl={el.imageUrl}
//     name={el.name}
//     price={el.price}

//   />
// }) :

type DashboardProps = {
  name: string
  income?: number
  reviewScore?: number
  listOfVansId?: number[]
}

export const Dashboard = ({
  name,
  income = 0,
  reviewScore = 0,
}: DashboardProps): ReactElement => {
  return (
    <div className="host-component">
      <div className="host-component__welcome">
        <div>
          <h1 className="host-component__welcome-header">Welcome {name}!</h1>

          <LastDays />

          <p className="host-component__welcome-price">${income}</p>
        </div>
        <button
          onClick={() => {
            console.log('Income last 30 days')
          }}
          className="btn-details"
        >
          Details
        </button>
      </div>

      <div className="host-component__review-score">
        <div>
          <h3 className="block-header">
            Review score
            <Star />
            {reviewScore}
            <span className="review-score-block-grey">/5</span>
          </h3>
        </div>

        <button
          onClick={() => {
            console.log('Reviews')
          }}
          className="btn-details"
        >
          Details
        </button>
      </div>

      <div className="host-component__listed-vans">
        <h3 className="host-component__listed-vans-header">Your listed vans</h3>
        <div className="host-component__listed-vans_vans">{}ggggg</div>
      </div>
    </div>
  )
}
