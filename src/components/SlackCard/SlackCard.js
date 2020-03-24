import React from 'react'
import styles from './SlackCard.module.scss'

const SlackCard = ({ text, image }) => (
  <div className={styles.card}>
    <img src={image} />
    {text && <p>{text}</p>}
  </div>
)

export default SlackCard
