import { ReactElement } from 'react'
import { Star } from '../smallHostComponents/Star'
import { LastDays } from '../smallHostComponents/LastDays'
import { Host } from '../../../data/dataHost'
import { getTransactionsSmall } from '../smallHostComponents/getTransactionsSmall'
import { Link } from 'react-router-dom'
import { DetailsBtn } from '../smallHostComponents/DetailsBtn'

interface Props {
  host: Host
}

export const Dashboard = ({ host }: Props): ReactElement => {
  const transactions = getTransactionsSmall(host.ordersIDs)

  return (
    <div className="host-component">
      <div className="host-component__welcome">
        <div>
          <h1 className="host-component__welcome-header">
            Welcome {host.name}!
          </h1>

          <LastDays />

          <p className="host-component__welcome-price">${host.income}</p>
        </div>

        <DetailsBtn to={'/host/income'} />
      </div>

      <div className="host-component__review-score">
        <div>
          <h3 className="block-header">
            Review score
            <span className="star-space">
              <Star />
            </span>
            {host.reviewScore}
            <span className="review-score-block-grey">/5</span>
          </h3>
        </div>

        <DetailsBtn to={'/host/reviews'} />
      </div>

      <div className="host-component__listed-vans">
        <h3 className="host-component__listed-vans-header">Your listed vans</h3>

        <div className="host-component__listed-vans_vans">{transactions}</div>
      </div>
    </div>
  )
}