import React from 'react'
import PropTypes from 'prop-types'
import { graphql, StaticQuery } from 'gatsby'
import LogosBlock from '../LogosBlock/LogosBlock'

const TrackOrganisers = ({ title, trackTitle }) => (
  <StaticQuery
    query={graphql`
      query TrackOrganisers {
        allMarkdownRemark(
          filter: { frontmatter: { templateKey: { in: ["trackOrganisers"] } } }
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                name
                link
                image {
                  childImageSharp {
                    fluid {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
                sponsoredTrack
              }
            }
          }
        }
      }
    `}
    render={data => (
      <LogosBlock
        title={title}
        items={data.allMarkdownRemark.edges
          .map(({ node }) => ({
            slug: node.fields.slug,
            ...node.frontmatter,
          }))
          .filter(({ sponsoredTrack }) => sponsoredTrack === trackTitle)}
      />
    )}
  />
)

TrackOrganisers.propTypes = {
  title: PropTypes.string.isRequired,
  trackTitle: PropTypes.string.isRequired,
}

export default TrackOrganisers
