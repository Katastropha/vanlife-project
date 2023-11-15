import { ReactElement } from 'react'
import { Link } from 'react-router-dom'
import './home.css'

// TODO: add css modules
// TODO: rename Home to HomeComponent

const Home = (): ReactElement => {
  console.log('home')
  return (
    <div className="content home-component">
      <h1 className="home_header">
        You got the travel plans, we got the travel vans.
      </h1>

      <p className="home_text">
        Add adventure to your life by joining the #vanlife movement. Rent the
        perfect van to make your perfect road trip.
      </p>

      <Link className="home_btn" to={'/vans'}>
        Find your van
      </Link>
    </div>
  )
}

export default Home
