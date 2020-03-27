import React from 'react'
import classnames from 'classnames'
import '../all.sass'
import Section from '../Section/Section'
import SectionTitle from '../SectionTitle/SectionTitle'
import SectionDescription from '../SectionDescription/SectionDescription'
import CustomLink from '../CustomLink/CustomLink'
import Timeline from './Timeline/Timeline'
import styles from './TimelineSection.module.scss'

const TimelineSection = ({ title, description, ctaLabel, ctaUrl, items }) => (
  <Section>
    <div className={classnames('container has-text-primary')}>
      {!!title && <SectionTitle title={title} />}
      {!!description && (
        <SectionDescription
          className={styles.description}
          text={description}
          marginBottom={45}
        />
      )}
      <div className={styles.timelineScrollable}>
        <Timeline items={items} />
      </div>
      {!!ctaLabel && !!ctaUrl && (
        <div className={styles.cta}>
          <CustomLink className={styles.button} to={ctaUrl}>
            {ctaLabel}
          </CustomLink>
        </div>
      )}
    </div>
  </Section>
)

export default TimelineSection
