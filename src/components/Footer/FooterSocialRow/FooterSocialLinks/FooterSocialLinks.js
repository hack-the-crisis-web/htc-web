import React from 'react'
import SocialIconLink from '../../../SocialIconLink/SocialIconLink'
import styles from './FooterSocialLinks.module.scss'

export const FooterSocialLinks = () => (
  <div className={styles.links}>
    <div className={styles.link}>
      <SocialIconLink
        type="slack"
        color="black"
        href="http://theglobalhack.com/slack"
      />
    </div>
    <div className={styles.link}>
      <SocialIconLink
        type="facebook"
        color="black"
        href="https://www.facebook.com/theglobalhack/"
      />
    </div>
    <div className={styles.link}>
      <SocialIconLink
        type="twitter"
        color="black"
        href="https://twitter.com/theglobalhack"
      />
    </div>
  </div>
)

export default FooterSocialLinks
