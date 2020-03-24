import React from 'react'
import styles from './SectionDescription.module.scss'

const SectionDescription = ({ text }) => (
  <p className={styles.content}>{text}</p>
)

export default SectionDescription
