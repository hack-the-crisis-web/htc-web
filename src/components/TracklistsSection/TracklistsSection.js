import React from 'react'
import classnames from 'classnames'
import '../all.sass'
import Section from '../Section/Section'
import SectionTitle from '../SectionTitle/SectionTitle'
import SectionDescription from '../SectionDescription/SectionDescription'
import TracklistsCard from '../TracklistsCard/TracklistsCard'
import styles from './TracklistsSection.module.scss'

const TracklistsSection = () => (
  <Section className="has-background-success">
    <div className={classnames(styles.container, 'container has-text-primary')}>
      <SectionTitle title="Tracklists" />
      <SectionDescription
        text="Placeat facere possimus, omnis voluptas assumenda est, omnis dolor
          repellendus.Mxime placeat facere possimus, omnis voluptas."
      />
      <div
        className={classnames(
          styles.cardsWrapper,
          'columns is-multiline is-mobile is-desktop'
        )}
      >
        {[...Array(12).keys()].map(index => (
          <div className="column is-half-mobile is-half-tablet is-one-third-desktop">
            <TracklistsCard
              key={index}
              url="/"
              title="Education"
              text="Impedit quo minus id quod maxime Est et expedita distinctio. Nam libero.impedit quo mi"
              image="https://bulma.io/images/placeholders/128x128.png"
            />
          </div>
        ))}
      </div>
    </div>
  </Section>
)

export default TracklistsSection
