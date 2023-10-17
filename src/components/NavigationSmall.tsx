import { ReactElement } from 'react'
import { NavLink } from 'react-router-dom'

export const NavigationSmall = (): ReactElement => {
  return (
    <div className="navigation-small">
      <NavLink
        to="/host"
        className={(isActive): string => {
          return `navigation-small__option ${!isActive && 'active'}`
        }}
      >
        Dashboard
      </NavLink>
      <NavLink
        to="/host/income"
        className={(isActive): string => {
          return `navigation-small__option ${!isActive && 'active'}`
        }}
      >
        Income
      </NavLink>
      <NavLink
        to="/host/hostVans"
        className={(isActive): string => {
          return `navigation-small__option ${!isActive && 'active'}`
        }}
      >
        Vans
      </NavLink>
      <NavLink
        to="/host/reviews"
        className={(isActive): string => {
          return `navigation-small__option ${!isActive && 'active'}`
        }}
      >
        Reviews
      </NavLink>
    </div>
  )
}
