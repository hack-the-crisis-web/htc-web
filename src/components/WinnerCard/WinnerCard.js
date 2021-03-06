import React from 'react'
import Img from 'gatsby-image'
import classnames from 'classnames'
import CustomLink from '../CustomLink/CustomLink'
import styles from './WinnerCard.module.scss'

const WinnerCard = ({
  image,
  title,
  description,
  team,
  prize,
  link,
  full,
  trackWinner,
}) => (
  <div className="columns">
    {!!image && (
      <div className={classnames('column', styles.imageContainer)}>
        {image && image.childImageSharp && (
          <Img
            className="column"
            imgStyle={{ objectFit: 'contain' }}
            fluid={image.childImageSharp.fluid}
            alt={title}
          />
        )}
      </div>
    )}
    <div className={classnames(styles.card, { 'column is-7': !full })}>
      <h5 className={styles.team}>{team}</h5>
      {trackWinner && <h5 className={styles.trackWinner}>TRACK WINNER</h5>}
      {prize && <h5 className={styles.prize}>{prize}</h5>}
      {description && <p className={styles.description}>{description}</p>}
      {link && <CustomLink to={link}>Find out more</CustomLink>}
    </div>
  </div>
)

export default WinnerCard
