import React from 'react'
import classnames from 'classnames'
import styles from './SectionDescription.module.scss'

const SectionDescription = ({
  text,
  className,
  restrictWidth = true,
  marginBottom = 55,
  alignRight,
  children,
}) => (
  <div
    className={classnames(
      styles.content,
      { [styles.restrictWidth]: restrictWidth },
      { [styles.alignRight]: alignRight },
      className
    )}
    style={{ marginBottom: marginBottom }}
  >
    {!!text &&
      !!text.length &&
      text.split('\n\n').map((paragraph, i) => (
        <p className={styles.p} key={i}>
          {paragraph}
        </p>
      ))}
    {children && <p className={styles.p}>{children}</p>}
  </div>
)

export default SectionDescription
