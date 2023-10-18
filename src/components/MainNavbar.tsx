import { ReactElement } from 'react'
import { NavLink } from 'react-router-dom'
import './components.css'

export const MainNavbar = (): ReactElement => {
  return (
    <nav className="nav">
      <div>
        {' '}
        <NavLink
          className={() => {
            return 'nav_logo-link'
          }}
          to="/"
        >
          #VanLife
        </NavLink>
      </div>
      <div>
        <NavLink className="nav_link" to="host">
          Host
        </NavLink>
        <NavLink className="nav_link" to="/about">
          About
        </NavLink>
        <NavLink className="nav_link" to="vans">
          Vans
        </NavLink>
      </div>
    </nav>
  )
}
