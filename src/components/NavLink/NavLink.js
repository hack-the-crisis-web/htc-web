import React from 'react'
import classnames from 'classnames'
import { Link } from 'gatsby'

const NavLink = ({ to, className, children }) => (
  <Link to={to} className={classnames('hover-effect-small', className)}>
    {children}
  </Link>
)

export default NavLink
