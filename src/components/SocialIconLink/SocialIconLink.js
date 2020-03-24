import React from 'react'
import facebookWhiteIcon from '../../img/social/facebookWhite.svg'
import facebookBlackIcon from '../../img/social/facebookBlack.svg'
import twitterWhiteIcon from '../../img/social/twitterWhite.svg'
import twitterBlackIcon from '../../img/social/twitterBlack.svg'
import styles from './SocialIconLink.module.scss'

const getFacebookIcon = color => {
  switch (color) {
    case 'black':
      return facebookBlackIcon
    case 'white':
    default:
      return facebookWhiteIcon
  }
}

const getTwitterIcon = color => {
  switch (color) {
    case 'black':
      return twitterBlackIcon
    case 'white':
    default:
      return twitterWhiteIcon
  }
}

const getImgPropsForIconType = (type, color) => {
  switch (type) {
    case 'slack':
      return { alt: 'slack', src: getFacebookIcon(color) }
    case 'guaana':
      return { alt: 'guaana', src: getFacebookIcon(color) }
    case 'garage48':
      return { alt: 'garage48', src: getFacebookIcon(color) }
    case 'facebook':
      return { alt: 'facebook', src: getFacebookIcon(color) }
    case 'twitter':
      return { alt: 'twitter', src: getTwitterIcon(color) }
    default:
      return {}
  }
}

const SocialIconLink = ({ type, href, color = 'white' }) => (
  <a className={styles.noDecoration} href={href} target="_blank">
    <img
      {...getImgPropsForIconType(type, color)}
      style={{ width: '20px', height: '20px' }}
    />
  </a>
)

export default SocialIconLink
