import React from 'react'
import Img from 'gatsby-image'
import classnames from 'classnames'
import Section from '../Section/Section'
import styles from './TrackHeroSection.module.scss'

const TrackHeroSection = ({
  title,
  description,
  hasMentor,
  mentor,
  mentorRole,
  mentorAbout,
  featuredImage,
  trackLogo,
}) => (
  <div className={styles.bg}>
    <Section>
      <div className={classnames('container', styles.container)}>
        <div className={styles.details}>
          <div className={classnames(styles.text, styles.titleHeading)}>
            TRACK
          </div>
          <h1 className={classnames('is-family-secondary', styles.title)}>
            {title}
          </h1>
          <div
            className={classnames('is-hidden-tablet', styles.responsiveImage)}
          >
            {(featuredImage || trackLogo) && (
              <Img
                className={styles.img}
                fluid={
                  featuredImage
                    ? featuredImage.childImageSharp.fluid
                    : trackLogo.childImageSharp.fluid
                }
                alt={hasMentor ? mentor : title}
              />
            )}
            {featuredImage && trackLogo && (
              <Img
                style={{ position: 'absolute' }}
                className={styles.trackLogo}
                fluid={trackLogo.childImageSharp.fluid}
                alt={title}
              />
            )}
          </div>
          <div
            className={classnames(
              'is-hidden-mobile',
              styles.text,
              styles.description
            )}
          >
            {description}
          </div>
          {hasMentor && (
            <>
              <div className={classnames(styles.text, styles.mentorHeading)}>
                TRACK LEAD
              </div>
              <h2 className={classnames('is-family-secondary', styles.mentor)}>
                {mentor}
              </h2>
              <div className={classnames(styles.text, styles.mentorRole)}>
                {mentorRole}
              </div>
              <div className={styles.text}>{mentorAbout}</div>
            </>
          )}
        </div>
        <div className={classnames('is-hidden-mobile', styles.image)}>
          {(featuredImage || trackLogo) && (
            <Img
              imgStyle={{ objectFit: 'fit', objectPosition: '100% 100%' }}
              fluid={
                featuredImage
                  ? featuredImage.childImageSharp.fluid
                  : trackLogo.childImageSharp.fluid
              }
              alt={hasMentor ? mentor : title}
            />
          )}
          {featuredImage && trackLogo && (
            <Img
              style={{ position: 'absolute' }}
              imgStyle={{ objectFit: 'fit', objectPosition: '100% 100%' }}
              className={styles.trackLogo}
              fluid={trackLogo.childImageSharp.fluid}
              alt={title}
            />
          )}
        </div>
      </div>
    </Section>
  </div>
)

export default TrackHeroSection
