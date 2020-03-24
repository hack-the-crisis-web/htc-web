import React from 'react'
import { Link } from 'gatsby'
import styles from './CustomLink.module.scss'

const CustomLink = ({ children, to }) => (
  <Link className={styles.customLink} to={to}>
    <span className={styles.text}>{children}</span>
    <span className={styles.arrow}>&gt;</span>
  </Link>
)

export default CustomLink
