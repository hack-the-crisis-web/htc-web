import React, { useState } from 'react'
import { graphql, StaticQuery } from 'gatsby'
import Section from '../Section/Section'
import WinnerHeader from '../WinnerHeader/WinnerHeader'
import WinnerCard from '../WinnerCard/WinnerCard'
import Dropdown from '../Dropdown/Dropdown'
import styles from './TrackWinnersSection.module.scss'

const TrackWinnersSection = ({ trackWinners, data }) => {
  const [openedDropdownIndex, setOpenedDropdownIndex] = useState(null)

  const toggleDropdown = index => () => {
    setOpenedDropdownIndex(openedDropdownIndex === index ? null : index)
  }

  const getTrackLogo = category => {
    const trackData = data.filter(
      track => track.node.frontmatter.title === category
    )
    return trackData[0].node.frontmatter.trackLogo
  }

  return (
    <Section>
      {trackWinners.map(({ trackWinner }, index) => (
        <Dropdown
          key={index}
          isOpen={openedDropdownIndex === index}
          title={trackWinner.category}
          img={getTrackLogo(trackWinner.category)}
          onClick={toggleDropdown(index)}
        >
          <hr></hr>
          <Section>
            <WinnerHeader
              small
              title="Top 3 teams"
              img={'img/apple-touch-icon.png'}
            />
            {trackWinner.teams.slice(0, 3).map((team, index) => (
              <WinnerCard
                key={index}
                full
                description={team.textContent}
                team={team.team}
                prize={team.prize}
                link={team.link}
              />
            ))}
            <div className={styles.teams}>
              <WinnerHeader
                small
                title="Top 4-15 teams"
                img={'img/apple-touch-icon.png'}
              />
              {trackWinner.teams.slice(3).map((team, index) => (
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
        </Dropdown>
      ))}
    </Section>
  )
}

export default props => (
  <StaticQuery
    query={graphql`
      query TrackWinnersSection {
        allMarkdownRemark(
          filter: { frontmatter: { templateKey: { eq: "tracklists" } } }
        ) {
          edges {
            node {
              frontmatter {
                title
                trackLogo
              }
            }
          }
        }
      }
    `}
    render={data => (
      <TrackWinnersSection data={data.allMarkdownRemark.edges} {...props} />
    )}
  />
)
