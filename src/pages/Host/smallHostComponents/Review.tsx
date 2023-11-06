import { ReactElement } from 'react'
import { Star } from './Star'
import { EmptyStar } from './EmptyStar'

const getStars = (score: string): ReactElement => {
  if (score === '5') {
    return (
      <div className="review__score">
        <Star />
        <Star />
        <Star />
        <Star />
        <Star />
      </div>
    )
  } else if (score === '4') {
    return (
      <div className="review__score">
        <Star />
        <Star />
        <Star />
        <Star />
        <EmptyStar />
      </div>
    )
  } else if (score === '3') {
    return (
      <div className="review__score">
        <Star />
        <Star />
        <Star />
        <EmptyStar />
        <EmptyStar />
      </div>
    )
  } else if (score === '2') {
    return (
      <div className="review__score">
        <Star />
        <Star />
        <EmptyStar />
        <EmptyStar />
        <EmptyStar />
      </div>
    )
  } else if (score === '1') {
    return (
      <div className="review__score">
        <Star />
        <EmptyStar />
        <EmptyStar />
        <EmptyStar />
        <EmptyStar />
      </div>
    )
  } else {
    return (
      <div className="review__score">
        <EmptyStar />
        <EmptyStar />
        <EmptyStar />
        <EmptyStar />
        <EmptyStar />
      </div>
    )
  }
}

type Props = {
  score: string
  name: string
  date: string
  text: string
}

export const Review = ({ score, name, date, text }: Props) => {
  const scoreStars = getStars(score)

  return (
    <div className="review">
      {scoreStars}
      <div className="review__user">
        <p className="user-name">{name}</p>
        <p className="date-comment">{date}</p>
      </div>
      <p className="review__text">{text}</p>
    </div>
  )
}
