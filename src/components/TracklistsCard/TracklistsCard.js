import React from 'react'
import Img from 'gatsby-image'
import classnames from 'classnames'
import { Link } from 'gatsby'
import styles from './TracklistsCard.module.scss'

const TracklistsCard = ({ url, text, image, title, hashtag }) => (
  <Link className={classnames(styles.card, 'hover-effect')} to={url}>
    {image && image.childImageSharp && (
      <Img
        className={styles.img}
        fluid={image.childImageSharp.fluid}
        alt={title}
      />
    )}
    {!!title && <p className={styles.title}>{title}</p>}
    {!!text && <p className={styles.content}>{text}</p>}
  </Link>
)

export default TracklistsCard
