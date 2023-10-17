import { Link } from 'react-router-dom'

export const HostNavigation = () => {
  return (
    <nav>
      <Link to="/host">Dashboard</Link>
      <Link to="/host/income">Income</Link>
      <Link to="/host/reviews">Reviews</Link>
    </nav>
  )
}
