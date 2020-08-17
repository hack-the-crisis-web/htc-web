import React from 'react'
import styles from './FooterCopyright.module.scss'

export const FooterCopyright = () => (
  <div className={styles.links}>
    <span className={styles.copyright}>
      This event is brought to you by The Global Hack. All rights reserved.
    </span>
  </div>
)

export default FooterCopyright
