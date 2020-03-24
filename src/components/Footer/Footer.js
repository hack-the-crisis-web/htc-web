import React from 'react'
import FooterMenuRow from './FooterMenuRow/FooterMenuRow'
import FooterSocialRow from './FooterSocialRow/FooterSocialRow'
import styles from './Footer.module.scss'

class Footer extends React.Component {
  render() {
    return (
      <footer className={`footer ${styles.footer}`}>
        <FooterMenuRow />
        <FooterSocialRow />
      </footer>
    )
  }
}

export default Footer
