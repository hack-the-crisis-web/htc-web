import React from 'react'
import classNames from 'classnames'
import styles from './SlackCard.module.scss'

const SlackCard = ({ text, image, className }) => (
  <div  className={classNames(styles.card, className)}>
    <img src={image} />
    {text && <p>{text}</p>}
  </div>
)

export default SlackCard
