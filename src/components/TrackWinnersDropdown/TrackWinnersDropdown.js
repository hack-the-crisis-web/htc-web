import React, { useState } from 'react'
import { graphql, StaticQuery } from 'gatsby'
import Section from '../Section/Section'
import WinnerHeader from '../WinnerHeader/WinnerHeader'
import WinnerCard from '../WinnerCard/WinnerCard'
import Dropdown from '../Dropdown/Dropdown'
import styles from './TrackWinnersDropdown.module.scss'

const TrackWinnersDropdown = ({ trackWinners, data }) => {
  const [openedDropdownIndex, setOpenedDropdownIndex] = useState(null)

  if (trackWinners.length === 1 && trackWinners[0].trackWinner.category === '')
    return null

  const toggleDropdown = index => () => {
    setOpenedDropdownIndex(openedDropdownIndex === index ? null : index)
  }

  const getTrackLogo = category => {
    const trackData = data.filter(
      track => track.node.frontmatter.title === category
    )
    return trackData[0] ? trackData[0].node.frontmatter.trackLogo : ''
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
              img={'/img/apple-touch-icon.png'}
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
                img={'/img/apple-touch-icon.png'}
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
      query TrackWinnersDropdown {
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
      <TrackWinnersDropdown data={data.allMarkdownRemark.edges} {...props} />
    )}
  />
)
