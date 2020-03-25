import React from 'react'
import { Link } from 'gatsby'
import classnames from 'classnames'
import styles from './CustomLink.module.scss'
import checkIfInternalLink from '../checkIfInternalLink'

const CustomLink = ({ children, to, light }) => {
  const isInternal = checkIfInternalLink(to)

  const linkContent = (
    <>
      <span className={styles.text}>{children}</span>
      <span className={styles.arrow}>&gt;</span>
    </>
  )

  const linkClasses = classnames(styles.customLink, {
    [styles['light']]: light,
  })

  return isInternal ? (
    <Link className={linkClasses} to={to}>
      {linkContent}
    </Link>
  ) : (
    <a className={linkClasses} href={to}>
      {linkContent}
    </a>
  )
}

export default CustomLink
