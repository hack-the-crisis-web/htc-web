import React from 'react'
import twitterColorIcon from '../../img/social/twitterColour.svg'
import styles from './TwitterFeedTitle.module.scss'

const TwitterFeedTitle = ({ children }) => (
  <div className={styles.newBlock}>
    <img alt="Twitter" src={twitterColorIcon} />
    <h2 className={styles.title}>{children}</h2>
  </div>
)

export default TwitterFeedTitle
