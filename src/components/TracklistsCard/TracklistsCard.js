import React from 'react'
import Icon from '../Icon/Icon'
import styles from './TracklistsCard.module.scss'

const TracklistsCard = ({ text, image, title, twitter, slack }) => (
  <div className={styles.card}>
    <img src={image} />
    {title && <p className={styles.title}>{title}</p>}
    {text && <p>{text}</p>}
    <div className={styles.footer}>
      {twitter && (
        <div className={styles.iconWrapper}>
          <Icon type="eye" size="xxs" />
          <span>{twitter}</span>
        </div>
      )}
      {slack && (
        <div className={styles.iconWrapper}>
          <Icon type="slack" size="xxs" />
          <span>{slack}</span>
        </div>
      )}
    </div>
  </div>
)

export default TracklistsCard
