import React from 'react'
import Button from '../Button/Button'
import Icon from '../Icon/Icon'
import Card from '../SlackCard/SlackCard'
import CustomLink from '../CustomLink/CustomLink'

import styles from './HeroSection.module.scss'

const HeroSection = ({ title, subheading, eventDate }) => (
  <div className={styles.heroWrapper}>
    <h4>{eventDate}</h4>
    <h1>{title}</h1>
    <h3>{subheading}</h3>
    <div className={styles.buttonWrapper}>
      <Button>Tell me more</Button>
      <Button btnStyle="outline">Submit idea</Button>
    </div>
    <div className="container columns">
      <div>
        <div className={styles.iconWrapper}>
          <Icon type="slack" size="smd" />
          <p className="header-medium">News</p>
        </div>
        <CustomLink to="/">Join slack for more</CustomLink>
      </div>
      <div className="columns">
        <Card
          text="Pedit quo minus id quod maxime Est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime Est et expedita distinctio"
          image="https://bulma.io/images/placeholders/128x128.png"
        />
      </div>
    </div>
  </div>
)

export default HeroSection
