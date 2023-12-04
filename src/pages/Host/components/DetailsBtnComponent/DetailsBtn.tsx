import { Link } from 'react-router-dom'
import styles from './DetailsBtnComponent.module.css'
type Props = {
  to: string
}

export const DetailsBtn = ({ to }: Props) => {
  return (
    <Link className={styles['btn-details']} to={to}>
      Details
    </Link>
  )
}
