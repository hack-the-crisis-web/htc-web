import React from 'react'
import classnames from 'classnames'
import { graphql, StaticQuery } from 'gatsby'
import '../all.sass'
import Section from '../Section/Section'
import SectionTitle from '../SectionTitle/SectionTitle'
import SectionDescription from '../SectionDescription/SectionDescription'
import TracklistsCard from '../TracklistsCard/TracklistsCard'

const TracklistsSection = ({ data, description }) => {
  return (
    <div id="tracklists" className="has-background-success">
      <Section>
        <div className={classnames('container has-text-primary')}>
          <SectionTitle title="Tracks" />
          <SectionDescription text={description} />
          <div className={classnames('columns is-multiline is-mobile')}>
            {data.map(
              (
                {
                  node: {
                    frontmatter: { title, description, trackLogo, hashtag },
                  },
                },
                index
              ) => {
                return (
                  <div
                    key={index}
                    className="column is-full-mobile is-half-tablet is-one-third-desktop"
                  >
                    <TracklistsCard
                      url={title
                        .toLowerCase()
                        .replace(/[^\w ]+/g, '')
                        .replace(/ +/g, '-')}
                      title={title}
                      text={description}
                      image={trackLogo}
                      hashtag={hashtag}
                    />
                  </div>
                )
              }
            )}
          </div>
        </div>
      </Section>
    </div>
  )
}

export default props => (
  <StaticQuery
    query={graphql`
      query TracklistsSection {
        allMarkdownRemark(
          filter: { frontmatter: { templateKey: { eq: "tracklists" } } }
        ) {
          edges {
            node {
              frontmatter {
                title
                description
                trackLogo {
                  childImageSharp {
                    fluid {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
                hashtag
              }
            }
          }
        }
      }
    `}
    render={data => (
      <TracklistsSection data={data.allMarkdownRemark.edges} {...props} />
    )}
  />
)
