import { ReactElement } from 'react'
import { NavLink } from 'react-router-dom'

import styles from './NavigationSmallComponent.module.css'

export const NavigationSmall = (): ReactElement => {
  return (
    <div className="navigation-small">
      <NavLink to="/host" end className="navigation-small__option">
        Dashboard
      </NavLink>
      <NavLink to="/host/income" className="navigation-small__option">
        Income
      </NavLink>
      <NavLink to="/host/hostVans" className="navigation-small__option">
        Vans
      </NavLink>
      <NavLink to="/host/reviews" className="navigation-small__option">
        Reviews
      </NavLink>
    </div>
  )
}
