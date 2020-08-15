import React from 'react'
import Img from 'gatsby-image'
import classNames from 'classnames'
import Button from '../Button/Button'
import styles from './HeroSection.module.scss'
import '../all.sass'
import sendFBTrackingEvent from '../SEO/sendFBTrackingEvent'

const HeroSection = ({
  title,
  subheading,
  eventDate,
  backgroundImage,
  heroCTALeftText,
  heroCTALeftLink,
  heroCTARightText,
  heroCTARightLink,
  centerHero = false,
}) => {
  const showLeftButton = !!heroCTALeftLink && !!heroCTALeftText
  const showRightButton = !!heroCTARightLink && !!heroCTARightText
  return (
    <section
      className={classNames('section', styles.heroWrapper, {
        [styles.centerHero]: centerHero,
      })}
    >
      {backgroundImage && backgroundImage.childImageSharp && (
        <Img
          className={styles.heroBackground}
          fluid={backgroundImage.childImageSharp.fluid}
          alt=""
          style={{ position: 'absolute' }}
          imgStyle={{ objectFit: 'cover', objectPosition: '50% 0%' }}
        />
      )}
      <div className={classNames('container', styles.heroContainer)}>
        <div className="columns">
          <div className="column is-7 is-offset-1">
            <h4>{eventDate}</h4>
            <h1 className="is-family-secondary">{title}</h1>
            {subheading && (
              <h3 className="is-family-secondary">{subheading}</h3>
            )}
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
                  onClick={() => {
                    sendFBTrackingEvent('Lead')
                  }}
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
