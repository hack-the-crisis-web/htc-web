import React from 'react'
import classnames from 'classnames'
import '../../components/all.sass'
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
            <img alt={hasMentor ? mentor : title} src={featuredImage} />
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
                KEY MENTOR
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
          <img alt={hasMentor ? mentor : title} src={featuredImage} />
        </div>
      </div>
    </Section>
  </div>
)

export default TrackHeroSection
