import React from 'react'
import styles from './TracklistsCard.module.scss'

const TracklistsCard = ({ text, image, title, twitter, slack }) => (
  <div className={styles.card}>
    <img src={image} />
    {title && <p className={styles.title}>{title}</p>}
    {text && <p>{text}</p>}
  </div>
)

export default TracklistsCard
