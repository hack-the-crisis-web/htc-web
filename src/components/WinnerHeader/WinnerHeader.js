import React from 'react'
import classnames from 'classnames'
import styles from './WinnerHeader.module.scss'

const WinnerHeader = ({ img, title, small, withoutMargin }) => (
  <div
    className={classnames(styles.header, {
      [styles.small]: small,
      [styles.withoutMargin]: withoutMargin,
    })}
  >
    <img alt={title} src={img} />
    <h2>{title}</h2>
  </div>
)

export default WinnerHeader
