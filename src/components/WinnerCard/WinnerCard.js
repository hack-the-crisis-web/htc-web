import React from 'react'
import classnames from 'classnames'
import CustomLink from '../CustomLink/CustomLink'
import styles from './WinnerCard.module.scss'

const WinnerCard = ({ image, title, description, team, prize, link, full }) => (
  <div className="columns">
    {!!image && (
      <div className={classnames('column', styles.imageContainer)}>
        <img src={image.publicURL} className="column" alt={title} />
      </div>
    )}
    <div className={classnames(styles.card, { 'column is-7': !full })}>
      <h5 className={styles.team}>{team}</h5>
      {prize && <h5 className={styles.prize}>{prize}</h5>}
      {description && <p className={styles.description}>{description}</p>}
      {link && <CustomLink to={link}>Find out more</CustomLink>}
    </div>
  </div>
)

export default WinnerCard
