import React from 'react'
import { Link } from 'gatsby'
import classNames from 'classnames'
import styles from './CustomLink.module.scss'

const CustomLink = ({ children, to, light }) => {
  return (
    <Link
      className={classNames(styles.customLink, {
        [styles['light']]: light,
      })}
      to={to}
    >
      <span className={styles.text}>{children}</span>
      <span className={styles.arrow}>&gt;</span>
    </Link>
  )
}

export default CustomLink
