import { ReactElement } from 'react'
import { Host } from '../../../../data/dataHost'
import { LastDays } from '../../smallHostComponents/LastDays'
import { Review } from '../../components/ReviewComponent'

import styles from './ReviewsContainer.module.css'
interface Props {
  host: Host
}

export const Reviews = ({ host }: Props): ReactElement => {
  const reviews = host.reviews
  return (
    <div className={styles['host-component']}>
      <div className={styles['host-reviews__header']}>
        <h2 className={styles['host-reviews__header-introduce']}>
          Your reviews
        </h2>
        <LastDays />
      </div>
      <div
        className={styles['img']}
        style={{
          backgroundImage: `url(${host.graph})`,
          backgroundColor: 'white',
        }}
      ></div>
      <div className={styles['host-reviews__reviews']}>
        <h3 className={styles['host-reviews__reviews-header-small']}>
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
