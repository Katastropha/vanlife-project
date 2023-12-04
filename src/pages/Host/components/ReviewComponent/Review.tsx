import { ReactElement } from 'react'
import { Star } from '../../smallHostComponents/Star'
import { EmptyStar } from '../../smallHostComponents/EmptyStar'

import styles from './ReviewsComponent.module.css'

const getStars = (score: string) => {
  const num = Number(score)

  const emptyStar = 5 - num
  const result = []

  for (let i = 0; i < num; i++) {
    result.push(<Star />)
  }

  if (emptyStar) {
    for (let i = 0; i < emptyStar; i++) {
      result.push(<EmptyStar />)
    }
  }

  return result
}

type Props = {
  score: string
  name: string
  date: string
  text: string
}
export const Review = ({ score, name, date, text }: Props): ReactElement => {
  const scoreStars = getStars(score)

  return (
    <div className={styles['review']}>
      {scoreStars}
      <div className={styles['review__user']}>
        <p className={styles['user-name']}>{name}</p>
        <p className={styles['date-comment']}>{date}</p>
      </div>
      <p className={styles['review__text']}>{text}</p>
    </div>
  )
}
