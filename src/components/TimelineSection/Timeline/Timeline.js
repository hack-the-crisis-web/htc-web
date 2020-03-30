import React from 'react'
import TimelineItem from './TimelineItem'
import styles from './Timeline.module.scss'

const Timeline = ({ items }) => (
  <div className={styles.timeline}>
    {items.map(({ image, title, date, isActive }) => (
      <TimelineItem
        image={image.publicURL}
        title={title}
        date={date}
        isActive={isActive}
      />
    ))}
  </div>
)

export default Timeline
