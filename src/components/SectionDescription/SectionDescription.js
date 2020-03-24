import React from 'react'
import classnames from 'classnames'
import styles from './SectionDescription.module.scss'

const SectionDescription = ({
  text,
  className,
  restrictWidth = true,
  marginBottom = 55,
}) => (
  <p
    className={classnames(
      styles.content,
      restrictWidth && styles.restrictWidth,
      className
    )}
    style={{ marginBottom: marginBottom }}
  >
    {text}
  </p>
)

export default SectionDescription
