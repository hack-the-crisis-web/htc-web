import React from 'react'
import SocialIconLink from '../../../SocialIconLink/SocialIconLink'
import styles from './FooterCopyright.module.scss'

export const FooterCopyright = () => (
  <div className={styles.links}>
    <SocialIconLink type="garage48" color="black" href="https://garage48.org" />
    <span className={styles.copyright}>
      This event is brough to you by Garage48. © 2020. All right reserved.
    </span>
  </div>
)

export default FooterCopyright
