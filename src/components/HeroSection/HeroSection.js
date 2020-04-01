import React from 'react'
import classNames from 'classnames'
import Button from '../Button/Button'
import styles from './HeroSection.module.scss'
import '../all.sass'

const HeroSection = ({
  title,
  subheading,
  eventDate,
  backgroundImage,
  heroCTALeftText,
  heroCTALeftLink,
  heroCTARightText,
  heroCTARightLink,
}) => {
  const showLeftButton = !!heroCTALeftLink && !!heroCTALeftText
  const showRightButton = !!heroCTARightLink && !!heroCTARightText
  return (
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
              {showLeftButton && (
                <Button href={heroCTALeftLink} className={styles.btn}>
                  {heroCTALeftText}
                </Button>
              )}
              {showRightButton && (
                <Button
                  href={heroCTARightLink}
                  btnStyle="outline"
                  className={styles.btn}
                >
                  {heroCTARightText}
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
