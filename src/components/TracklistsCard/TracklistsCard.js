import React from 'react'
import { Link } from 'gatsby'
import styles from './TracklistsCard.module.scss'

const TracklistsCard = ({ url, text, image, title }) => (
  <Link className={styles.card} to={url}>
    <img alt={title} src={image} />
    {title && <p className={styles.title}>{title}</p>}
    {text && <p className={styles.content}>{text}</p>}
  </Link>
)

export default TracklistsCard
