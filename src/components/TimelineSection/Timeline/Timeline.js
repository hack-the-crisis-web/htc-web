import React from 'react'
import TimelineItem from './TimelineItem'
import styles from './Timeline.module.scss'

const Timeline = ({ items }) => (
  <div className={styles.timeline}>
    {items.map(({ image, title, date, isActive }, index) => (
      <TimelineItem
        key={index}
        image={image}
        title={title}
        date={date}
        isActive={isActive}
      />
    ))}
  </div>
)

export default Timeline
