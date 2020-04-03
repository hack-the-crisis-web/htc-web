import React from 'react'
import classnames from 'classnames'
import '../all.sass'
import Section from '../Section/Section'
import Button from '../Button/Button'
import styles from './TrackCallToActionSection.module.scss'

const TrackCallToActionSection = ({ ctaDescription, ctaText, ctaUrl }) => {
  if (!ctaDescription) {
    return null
  }

  return (
    <div className={styles.container}>
      <Section>
        <div className="container">
          <div
            className={classnames(
              'is-family-secondary has-text-black',
              styles.description
            )}
          >
            {ctaDescription}
          </div>
          {!!ctaText && !!ctaUrl && (
            <div className={styles.cta}>
              <Button className={styles.button} href={ctaUrl} target="_blank">
                {ctaText}
              </Button>
            </div>
          )}
        </div>
      </Section>
    </div>
  )
}

export default TrackCallToActionSection
