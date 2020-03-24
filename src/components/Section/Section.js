import React from 'react'
import classnames from 'classnames'
import styles from './Section.module.scss'

const Section = ({ className, children }) => (
  <section className={classnames('section', styles.section, className)}>
    {children}
  </section>
)

export default Section
