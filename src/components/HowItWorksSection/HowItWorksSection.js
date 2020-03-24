import React from 'react'
import classNames from 'classnames'
import Button from '../Button/Button'
import styles from './HowItWorksSection.module.scss'

const IdeaCard = () => (
  <div className={styles.card}>
    <img src="https://via.placeholder.com/300.png/" />
    <h5>1. Share your ideas</h5>
    <p>
      Pedit quo minus id quod maxime Est et expedita distinctio. Nam libero
      tempore, cum soluta nobis es.
    </p>
    <Button>See Tracklists</Button>
  </div>
)

const HowItWorksSection = props => (
  <div className="container">
    <div className={classNames('has-text-primary', styles.wrapper)}>
      <h5 className="header-medium">How it works</h5>
      <p>
        Pedit quo minus id quod maxime Est et expedita distinctio. Nam libero
        tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo.
      </p>

      <div className="columns">
        <div class="column">
          <IdeaCard />
        </div>
        <div class="column">
          <IdeaCard />
        </div>
        <div class="column">
          <IdeaCard />
        </div>
      </div>
    </div>
  </div>
)

export default HowItWorksSection
