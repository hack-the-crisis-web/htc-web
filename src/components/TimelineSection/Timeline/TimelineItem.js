import React from 'react'
import classnames from 'classnames'
import styles from './Timeline.module.scss'

const TimelineItem = ({ image, title, date, isActive }) => (
  <div className={classnames(styles.item, { [styles.active]: isActive })}>
    <img src={image} alt={title} />
    <div className={styles.title}>{title}</div>
    <div className={styles.date}>
      {new Date(date).toLocaleDateString('default', {
        day: 'numeric',
        month: 'long',
      })}
    </div>
  </div>
)

export default TimelineItem