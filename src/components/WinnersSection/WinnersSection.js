import React from 'react'
import classnames from 'classnames'
import '../all.sass'
import Section from '../Section/Section'
import WinnerCard from '../WinnerCard/WinnerCard'
import WinnerHeader from '../WinnerHeader/WinnerHeader'
import styles from './WinnersSection.module.scss'

const WinnersSection = ({ items }) => {
  return items[0].team === '' ? null : (
    <Section>
      <WinnerHeader img="/img/apple-touch-icon.png" title="Overall winner" />
      {items.map(({ title, textContent, image, prize, team, link }, index) => (
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
            prize={prize}
            team={team}
            link={link}
          />
        </div>
      ))}
    </Section>
  )
}

export default WinnersSection
