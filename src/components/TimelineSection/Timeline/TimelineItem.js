import React from 'react'
import classnames from 'classnames'
import styles from './Timeline.module.scss'

const TimelineItem = ({ image, title, date, isActive }) => (
  <div className={classnames(styles.item, { [styles.active]: isActive })}>
    <img src={image} alt={title} />
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
