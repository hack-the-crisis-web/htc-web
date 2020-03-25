import React from 'react'
import classNames from 'classnames'
import styles from './FooterCreditsRow.module.scss'
import '../../all.sass'
import mooncascadeLogo from '../../../../static/img/logo-mooncascade.svg'
import brandmanualLogo from '../../../../static/img/logo-bm.svg'

const FooterCreditsRow = () => (
  <div className={classNames('has-background-black', 'has-text-grey')}>
    <div className={classNames(styles.creditsContainer)}>
      <div className={classNames(styles.creditsInnerContainer)}>
        <div className={classNames(styles.creditsContent)}>
          <p>designed by:</p>

          <a href="https://thebrandmanual.com/" target="_blank">
            <img src={brandmanualLogo} alt="Brand manual" />
          </a>
        </div>
        <div className={classNames(styles.creditsContent)}>
          <p>developed by:</p>

          <a
            className={classNames(styles.imageLink)}
            href="https://mooncascade.com/"
            target="_blank"
          >
            <img src={mooncascadeLogo} alt="Mooncascade" />
          </a>
        </div>
      </div>
    </div>
  </div>
)

export default FooterCreditsRow
