import React from 'react'
import classnames from 'classnames'
import '../all.sass'
import Section from '../Section/Section'
import SectionTitle from '../SectionTitle/SectionTitle'
import SectionDescription from '../SectionDescription/SectionDescription'
import HowItWorksCard from './HowItWorksCard/HowItWorksCard'
import styles from './HowItWorksSection.module.scss'

const HowItWorksSection = ({ items }) => (
  <Section className="has-background-danger">
    <div className={classnames(styles.container, 'container has-text-primary')}>
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
        {items.map(({ title, textContent, image, ctaText, ctaLink }) => (
          <div
            className={classnames(
              styles.column,
              'column is-full-mobile is-full-tablet is-one-third-desktop'
            )}
          >
            <HowItWorksCard
              image={image}
              title={title}
              description={textContent}
              buttonLabel={ctaText}
              buttonUrl={ctaLink}
            />
          </div>
        ))}
      </div>
    </div>
  </Section>
)

export default HowItWorksSection
