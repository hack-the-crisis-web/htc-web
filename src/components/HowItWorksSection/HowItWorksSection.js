import React from 'react'
import classnames from 'classnames'
import '../all.sass'
import Section from '../Section/Section'
import SectionTitle from '../SectionTitle/SectionTitle'
import SectionDescription from '../SectionDescription/SectionDescription'
import HowItWorksCard from './HowItWorksCard/HowItWorksCard'
import styles from './HowItWorksSection.module.scss'

const HowItWorksSection = ({ items, description }) => (
  <div id="how-it-works" className="has-background-danger">
    <Section>
      <div className={classnames('container has-text-primary')}>
        <SectionTitle title="How it works" />
        <SectionDescription className={styles.description} text={description} />
        <div className={classnames(styles.cards, 'columns is-multiline')}>
          {items.map(
            (
              { title, textContent, image, ctaText, ctaLink, isActive },
              index
            ) => (
              <div
                key={index}
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
                  isActive={isActive}
                />
              </div>
            )
          )}
        </div>
      </div>
    </Section>
  </div>
)

export default HowItWorksSection
