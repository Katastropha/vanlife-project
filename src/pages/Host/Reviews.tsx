import { ReactElement } from 'react'
import { Host } from '../../data/dataHost'
import { LastDays } from './smallHostComponents/LastDays'
import { Review } from './smallHostComponents/Review'

interface Props {
  host: Host
}

export const Reviews = ({ host }: Props): ReactElement => {
  const reviews = host.reviews
  return (
    <div className="host-component host-component-reviews">
      <div className="host-reviews__header">
        <h2 className="host-reviews__header-introduce">Your reviews</h2>
        <LastDays />
      </div>
      <div
        className="img"
        style={{
          backgroundImage: `url(${host.graph})`,
          backgroundColor: 'white',
        }}
      ></div>
      <div className="host-reviews__reviews">
        <h3 className="host-reviews__reviews-header-small">
          Reviews({reviews.length})
        </h3>
        {reviews.map((obj) => {
          return (
            <Review
              score={obj.rating}
              name={obj.name}
              date={obj.date}
              text={obj.text}
            />
          )
        })}
      </div>
    </div>
  )
}
