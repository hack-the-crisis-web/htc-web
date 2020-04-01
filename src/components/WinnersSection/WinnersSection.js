import React from 'react'
import classnames from 'classnames'
import '../all.sass'
import Section from '../Section/Section'
import WinnerCard from './WinnerCard/WinnerCard'
import styles from './WinnersSection.module.scss'

const WinnersSection = ({ items }) => (
  <Section>
    {items.map(({ title, textContent, image, category, team }, index) => (
      <div
        key={index}
        className={classnames(
          styles.column,
          'column is-full-mobile is-full-tablet'
        )}
      >
        <WinnerCard
          image={image}
          title={title}
          description={textContent}
          category={category}
          team={team}
        />
      </div>
    ))}
  </Section>
)

export default WinnersSection
