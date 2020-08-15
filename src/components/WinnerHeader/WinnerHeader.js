import React from 'react'
import Img from 'gatsby-image'
import classnames from 'classnames'
import styles from './WinnerHeader.module.scss'

const WinnerHeader = ({ img, title, small, withoutMargin }) => (
  <div
    className={classnames(styles.header, {
      [styles.small]: small,
      [styles.withoutMargin]: withoutMargin,
    })}
  >
    {typeof img === 'string' ? (
      <img alt={title} src={img} className={styles.img} />
    ) : (
      img.map((logo, index) => (
        <Img
          className={styles.img}
          fluid={logo.childImageSharp.fluid}
          key={index}
          alt={title}
        />
      ))
    )}
    <h2>{title}</h2>
  </div>
)

export default WinnerHeader
