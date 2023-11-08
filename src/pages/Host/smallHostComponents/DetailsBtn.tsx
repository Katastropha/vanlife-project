import { Link } from 'react-router-dom'

type Props = {
  to: string
}

export const DetailsBtn = ({ to }: Props) => {
  return (
    <Link className="btn-details" to={to}>
      Details
    </Link>
  )
}
