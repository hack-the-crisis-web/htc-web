import React from 'react'
import Img from 'gatsby-image'
import classnames from 'classnames'
import '../../all.sass'
import Button from '../../Button/Button'
import styles from './HowItWorksCard.module.scss'

const HowItWorksCard = ({
  image,
  step,
  title,
  description,
  buttonLabel,
  buttonUrl,
  isActive,
}) => (
  <div className={classnames(styles.card, 'column is-10')}>
    {image && image.childImageSharp && (
      <div className={styles.imageContainer}>
        <Img
          className={styles.img}
          imgStyle={{ objectFit: 'contain' }}
          fluid={image.childImageSharp.fluid}
          alt={title}
        />
      </div>
    )}
    {!!step && <span className={styles.step}>{step}</span>}
    <h5 className="is-family-secondary">{title}</h5>
    <p>{description}</p>
    <Button className={styles.button} href={buttonUrl} disabled={!isActive}>
      {buttonLabel}
    </Button>
  </div>
)

export default HowItWorksCard
