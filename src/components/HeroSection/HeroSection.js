import React from 'react'
import classNames from 'classnames'
import Button from '../Button/Button'
import styles from './HeroSection.module.scss'
import '../all.sass'

const HeroSection = ({ title, subheading, eventDate, backgroundImage }) => (
  <section
    className={classNames('section', styles.heroWrapper)}
    style={
      backgroundImage ? { backgroundImage: `url('${backgroundImage}')` } : {}
    }
  >
    <div className={classNames('container', styles.heroContainer)}>
      <div className="columns">
        <div className="column is-7 is-offset-1">
          <h4>{eventDate}</h4>
          <h1 className="is-family-secondary">{title}</h1>
          <h3 className="is-family-secondary">{subheading}</h3>
          <div className={styles.buttonWrapper}>
            <Button href="#how-it-works">Let's hack</Button>
            <Button
              external
              href="https://theglobalhack.slack.com/"
              className={styles.joinButton}
              btnStyle="outline"
              target="_blank"
            >
              Join slack
            </Button>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default HeroSection
