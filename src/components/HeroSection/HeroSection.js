import React from 'react'
import classNames from 'classnames'
import Button from '../Button/Button'
import styles from './HeroSection.module.scss'
import '../all.sass'
// waiting for slack integration
// import Icon from '../Icon/Icon'
// import SlackCard from '../SlackCard/SlackCard'
// import CustomLink from '../CustomLink/CustomLink'
// import SlackIcon from '../../img/social/slackColour.svg'

const HeroSection = ({ title, subheading, eventDate }) => (
  <>
    <section className={classNames('section', styles.heroWrapper)}>
      <div className="container">
        <div className="columns">
          <div className="column is-7 is-offset-1">
            <h4>{eventDate}</h4>
            <h1 className="is-family-secondary">{title}</h1>
            <h3 className="is-family-secondary">{subheading}</h3>
            <div className={styles.buttonWrapper}>
              <Button>Tell me more</Button>
              <Button btnStyle="outline">Join slack</Button>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* waiting for slack integration */}
    {/* <div className="container columns">
      <div>
        <div className={styles.iconWrapper}>
          <Icon src={SlackIcon} type="slack-colour" size="smd" />
          <p className="header-medium">News</p>
        </div>
        <CustomLink light to="/">
          Join slack for more
        </CustomLink>
      </div>
      <div className="columns">
        <SlackCard
          className="has-text-primary"
          text="Pedit quo minus id quod maxime Est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime Est et expedita distinctio"
          image="https://bulma.io/images/placeholders/128x128.png"
        />
      </div>
    </div> */}
  </>
)

export default HeroSection
