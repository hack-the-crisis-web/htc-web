import React from 'react'
import styles from './ContactInfo.module.scss'

const ContactInfo = () => (
  <div className={styles.contact}>
    <a className={styles.link} href="mailto:general@globalhack.ee">
      general@globalhack.ee
    </a>
    <a className={styles.link} href="tel:+327345097">
      +327 345 097
    </a>
  </div>
)

export default ContactInfo
