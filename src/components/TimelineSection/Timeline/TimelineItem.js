import React from 'react'
import Img from 'gatsby-image'
import classnames from 'classnames'
import styles from './Timeline.module.scss'

const TimelineItem = ({ image, title, date, isActive }) => (
  <div className={classnames(styles.item, { [styles.active]: isActive })}>
    {image && image.childImageSharp && (
      <Img
        fluid={image.childImageSharp.fluid}
        alt={title}
        className={styles.img}
      />
    )}
    <div className={styles.title}>{title}</div>
    {date && (
      <div className={styles.date}>
        {new Date(date + 'T00:00:00.000Z').toLocaleDateString('en-GB', {
          day: 'numeric',
          month: 'long',
          timeZone: 'UTC',
        })}
      </div>
    )}
  </div>
)

export default TimelineItem
