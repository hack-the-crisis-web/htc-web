import React from 'react'
import TracklistsCard from '../TracklistsCard/TracklistsCard'

import styles from './TracklistsSection.module.scss'

const TracklistsSection = props => (
  <div className="container has-background-info has-text-primary">
    <h5 className="header-medium">Tracklists</h5>
    <div>
      <p>
        Placeat facere possimus, omnis voluptas assumenda est, omnis dolor
        repellendus.Mxime placeat facere possimus, omnis voluptas.
      </p>
      <div className={styles.cardsWrapper}>
        {[...Array(12).keys()].map(index => (
          <TracklistsCard
            key={index}
            title="Education"
            text="Impedit quo minus id quod maxime Est et expedita distinctio. Nam libero.impedit quo mi"
            image="https://bulma.io/images/placeholders/128x128.png"
            slack={120}
            twitter={32}
          />
        ))}
      </div>
    </div>
  </div>
)

export default TracklistsSection
