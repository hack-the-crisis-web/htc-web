import React from 'react'
import classnames from 'classnames'
import '../all.sass'
import Section from '../Section/Section'
import SectionTitle from '../SectionTitle/SectionTitle'
import SectionDescription from '../SectionDescription/SectionDescription'
import HowItWorksCard from './HowItWorksCard/HowItWorksCard'
import styles from './HowItWorksSection.module.scss'

const HowItWorksSection = items => {
  console.log(items)
  return (
    <Section className="has-background-danger">
      <div
        className={classnames(styles.container, 'container has-text-primary')}
      >
        <SectionTitle title="How it works" />
        <SectionDescription
          className={styles.description}
          text="Pedit quo minus id quod maxime Est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo."
        />
        <div
          className={classnames(
            styles.cards,
            'columns is-multiline is-mobile is-desktop'
          )}
        >
          {[
            {
              image: 'https://via.placeholder.com/216.png/',
              step: '1.',
              title: 'Share ideas',
              description:
                'Pedit quo minus id quod maxime Est et expedita distinctio. Nam libero tempore, cum soluta nobis es.',
              buttonLabel: 'TRACKLISTS',
              buttonUrl: '/',
            },
            {
              image: 'https://via.placeholder.com/261.png/',
              step: '2.',
              title: 'Start hacking',
              description:
                'Pedit quo minus id quod maxime Est et expedita distinctio. Nam libero tempore, cum soluta nobis es.',
              buttonLabel: 'SLACK',
              buttonUrl: '/',
            },
            {
              image: 'https://via.placeholder.com/237.png/',
              step: '3.',
              title: 'Register team',
              description:
                'Pedit quo minus id quod maxime Est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo.',
              buttonLabel: 'GUAANA',
              buttonUrl: '/',
            },
          ].map(
            ({ image, step, title, description, buttonLabel, buttonUrl }) => (
              <div
                className={classnames(
                  styles.column,
                  'column is-full-mobile is-full-tablet is-one-third-desktop'
                )}
              >
                <HowItWorksCard
                  image={image}
                  step={step}
                  title={title}
                  description={description}
                  buttonLabel={buttonLabel}
                  buttonUrl={buttonUrl}
                />
              </div>
            )
          )}
        </div>
      </div>
    </Section>
  )
}

export default HowItWorksSection
