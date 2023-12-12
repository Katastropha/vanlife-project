import { ReactElement } from 'react'
import { Star } from '../../components/StarComponent/Star'
import { LastDays } from '../../components/LastDaysComponent/LastDays'
import { Host } from '../../../../data/dataHost'
import { TransactionsSmallComponent } from '../../components/TransactionsSmallComponent'
import { DetailsBtn } from '../../components/DetailsBtnComponent/DetailsBtn'

interface Props {
  host: Host
}

import styles from './DashboardContainer.module.css'
console.log('Dashboard is here!')
export const Dashboard = ({ host }: Props): ReactElement => {
  const transactions = TransactionsSmallComponent(host.ordersIDs)

  return (
    <div className={styles['host-component']}>
      <div className={styles['host-component__welcome']}>
        <div>
          <h1 className={styles['host-component__welcome-header']}>
            Welcome {host.name}!
          </h1>

          <LastDays />

          <p className={styles['host-component__welcome-price']}>
            ${host.income}
          </p>
        </div>

        <DetailsBtn to={'/host/income'} />
      </div>

      <div className={styles['host-component__review-score']}>
        <div>
          <h3 className={styles['block-header']}>Review score</h3>

          <span className={styles['header-space-score']}>
            <Star />
            {host.reviewScore}
          </span>

          <span className={styles['review-score-block-grey']}>/5</span>
        </div>

        <DetailsBtn to={'/host/reviews'} />
      </div>

      <div className={styles['host-component__listed-vans']}>
        <h3 className={styles['host-component__listed-vans-header']}>
          Your listed vans
        </h3>

        <div className={styles['host-component__listed-vans_vans']}>
          {transactions}
        </div>
      </div>
    </div>
  )
}
