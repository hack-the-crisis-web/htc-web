import React from 'react'
import SocialIconLink from '../../../SocialIconLink/SocialIconLink'
import styles from './FooterSocialLinks.module.scss'

export const FooterSocialLinks = () => (
  <div className={styles.links}>
    <div className={styles.link}>
      <SocialIconLink type="slack" color="black" href="https://slack.com" />
    </div>
    <div className={styles.link}>
      <SocialIconLink type="guaana" color="black" href="https://guaana.com" />
    </div>
    <div className={styles.link}>
      <SocialIconLink
        type="facebook"
        color="black"
        href="https://facebook.com"
      />
    </div>
    <div className={styles.link}>
      <SocialIconLink type="twitter" color="black" href="https://twitter.com" />
    </div>
  </div>
)

export default FooterSocialLinks
