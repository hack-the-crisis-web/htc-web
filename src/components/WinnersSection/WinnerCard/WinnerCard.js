import React from 'react'
import classnames from 'classnames'
import '../../all.sass'
import styles from './WinnerCard.module.scss'

const WinnerCard = ({ image, title, description, team, category }) => (
  <div className="columns">
    {!!image && (
      <div className={classnames('column', styles.imageContainer)}>
        <img src={image.publicURL} className="column" alt={title} />
      </div>
    )}
    <div className={classnames(styles.card, 'column is-7')}>
      <h5 className={styles.title}>{title}</h5>
      <h5 className={styles.category}>{category}</h5>
      <h5 className={styles.team}>{team}</h5>
      <p>{description}</p>
    </div>
  </div>
)

export default WinnerCard
