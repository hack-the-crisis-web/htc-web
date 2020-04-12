import React from 'react'
import Section from '../Section/Section'
import WinnerHeader from '../WinnerHeader/WinnerHeader'
import WinnerCard from '../WinnerCard/WinnerCard'
import SectionTitle from '../SectionTitle/SectionTitle'
import styles from './TrackWinnersSection.module.scss'

const TrackWinnersSection = ({ trackWinners }) => {
  return trackWinners ? (
    <div className={styles.container}>
      <Section>
        <SectionTitle title="We have the winners!" />

        <Section>
          <WinnerHeader title="Top 3 teams" img={'/img/apple-touch-icon.png'} />
          {trackWinners.trackWinner.teams.slice(0, 3).map((team, index) => (
            <WinnerCard
              key={index}
              full
              description={team.textContent}
              team={team.team}
              prize={team.prize}
              link={team.link}
            />
          ))}
        </Section>
        <Section>
          <div className={styles.teams}>
            <WinnerHeader title="Finalists" img={'/img/bronze.png'} />
            {trackWinners.trackWinner.teams.slice(3).map((team, index) => (
              <WinnerCard
                key={index}
                full
                description={team.textContent}
                team={team.team}
                prize={team.prize}
                link={team.link}
              />
            ))}
          </div>
        </Section>
      </Section>
    </div>
  ) : null
}

export default TrackWinnersSection
