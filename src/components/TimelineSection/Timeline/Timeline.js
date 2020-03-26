import React from 'react'
import TimelineItem from './TimelineItem'
import styles from './Timeline.module.scss'

const Timeline = ({ items }) => (
  <div className={styles.timeline}>
    <div className={styles.dashed} />
    {items.map(({ image, title, date, isActive }) => (
      <TimelineItem
        image={image}
        title={title}
        date={date}
        isActive={isActive}
      />
    ))}
  </div>
)

export default Timeline
