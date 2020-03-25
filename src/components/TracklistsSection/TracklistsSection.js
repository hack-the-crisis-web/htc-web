import React from 'react'
import classnames from 'classnames'
import { graphql, StaticQuery } from 'gatsby'
import '../all.sass'
import Section from '../Section/Section'
import SectionTitle from '../SectionTitle/SectionTitle'
import SectionDescription from '../SectionDescription/SectionDescription'
import TracklistsCard from '../TracklistsCard/TracklistsCard'

const TracklistsSection = ({ data }) => {
  return (
    <div className="has-background-success">
      <Section>
        <div className={classnames('container has-text-primary')}>
          <SectionTitle title="Tracklists" />
          <SectionDescription
            text="Placeat facere possimus, omnis voluptas assumenda est, omnis dolor
            repellendus.Mxime placeat facere possimus, omnis voluptas."
          />
          <div className={classnames('columns is-multiline')}>
            {data.map(
              (
                {
                  node: {
                    frontmatter: { title, description, featuredimage },
                  },
                },
                index
              ) => {
                return (
                  <div key={index} className="column is-4">
                    <TracklistsCard
                      url="/"
                      title={title}
                      text={description}
                      image={featuredimage}
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

export default () => (
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
                featuredimage
              }
            }
          }
        }
      }
    `}
    render={data => <TracklistsSection data={data.allMarkdownRemark.edges} />}
  />
)
