import React from 'react'
import classnames from 'classnames'
import '../all.sass'
import styles from './SectionTitle.module.scss'

const SectionTitle = ({ title }) => (
  <h2 className={classnames('is-family-secondary', styles.title)}>{title}</h2>
)

export default SectionTitle
