import React from 'react'
import classnames from 'classnames'
import { graphql, StaticQuery } from 'gatsby'
import '../all.sass'
import Section from '../Section/Section'
import SectionTitle from '../SectionTitle/SectionTitle'
import SectionDescription from '../SectionDescription/SectionDescription'
import TracklistsCard from '../TracklistsCard/TracklistsCard'
import styles from './TracklistsSection.module.scss'

const TracklistsSection = ({ data }) => {
  const { edges } = data.allMarkdownRemark

  return (
    <Section className="has-background-success">
      <div
        className={classnames(styles.container, 'container has-text-primary')}
      >
        <SectionTitle title="Tracklists" />
        <SectionDescription
          text="Placeat facere possimus, omnis voluptas assumenda est, omnis dolor
            repellendus.Mxime placeat facere possimus, omnis voluptas."
        />

        {edges.map(
          (
            {
              node: {
                frontmatter: { title, description, featuredimage },
              },
            },
            index
          ) => {
            return (
              <div
                key={index}
                className="column is-half-mobile is-half-tablet is-one-third-desktop"
              >
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
    </Section>
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
    render={data => <TracklistsSection data={data} />}
  />
)
