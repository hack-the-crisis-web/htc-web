import React from 'react'
import classnames from 'classnames'
import '../all.sass'
import Section from '../Section/Section'
import SectionTitle from '../SectionTitle/SectionTitle'
import SectionDescription from '../SectionDescription/SectionDescription'
import Button from '../Button/Button'
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
      <div className={classnames('container', styles.timelineWrapper)}>
        <div className={styles.dashed} />
        <div className={styles.timelineScrollable}>
          <Timeline items={items} />
        </div>
      </div>

      {!!ctaLabel && !!ctaUrl && (
        <div className={styles.cta}>
          <Button className={styles.button} href={ctaUrl}>
            {ctaLabel}
          </Button>
        </div>
      )}
    </div>
  </Section>
)

export default TimelineSection
