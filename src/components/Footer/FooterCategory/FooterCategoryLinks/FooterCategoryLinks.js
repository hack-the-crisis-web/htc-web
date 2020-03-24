import React from 'react'
import { Link } from 'gatsby'
import styles from './FooterCategoryLinks.module.scss'

const FooterCategoryLinks = ({ links }) => (
  <ul>
    {links.map(({ title, url }, index) => (
      <Link to={url} className={styles.link} title={title} key={index}>
        {title}
      </Link>
    ))}
  </ul>
)

export default FooterCategoryLinks
