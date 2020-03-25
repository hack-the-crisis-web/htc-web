import React from 'react'
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
}) => (
  <div className={styles.card}>
    {!!image && (
      <div className={styles.imageContainer}>
        <img src={image.publicURL} alt={title} />
      </div>
    )}
    {!!step && <span className={styles.step}>{step}</span>}
    <h5 className="is-family-secondary">{title}</h5>
    <p>{description}</p>
    <Button className={styles.button} href={buttonUrl}>
      {buttonLabel}
    </Button>
  </div>
)

export default HowItWorksCard
