import React from 'react'
import classnames from 'classnames'
import { Link } from 'gatsby'
import styles from './TracklistsCard.module.scss'
import { TRACK_LIST_CARD_SHARE } from '../sharedStrings'

const TracklistsCard = ({ url, text, image, title, hashtag }) => (
  <Link className={classnames(styles.card, 'hover-effect')} to={url}>
    <img alt={title} src={image} />
    {!!title && <p className={styles.title}>{title}</p>}
    {!!text && <p className={styles.content}>{text}</p>}
    <div className={styles.footer}>
      {TRACK_LIST_CARD_SHARE}
      {hashtag}
    </div>
  </Link>
)

export default TracklistsCard
