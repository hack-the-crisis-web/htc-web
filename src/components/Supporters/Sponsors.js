import React from 'react'
import PropTypes from 'prop-types'
import { graphql, StaticQuery } from 'gatsby'
import LogosBlock from '../LogosBlock/LogosBlock'

const sponsorQuery = graphql`
  query Sponsors {
    allMarkdownRemark(
      filter: { frontmatter: { templateKey: { in: ["sponsors"] } } }
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
              publicURL
            }
            sponsoredTrack
          }
        }
      }
    }
  }
`

const Sponsors = ({ title, buttonText, trackTitle = '' }) => (
  <StaticQuery
    query={sponsorQuery}
    render={data => {
      // filter data according to trackTitle
      const unfilteredItems = data.allMarkdownRemark.edges.map(({ node }) => ({
        slug: node.fields.slug,
        ...node.frontmatter,
      }))
      const items = unfilteredItems.filter(
        ({ sponsoredTrack }) => sponsoredTrack === trackTitle
      )
      return <LogosBlock title={title} buttonText={buttonText} items={items} />
    }}
  />
)

Sponsors.propTypes = {
  title: PropTypes.string.isRequired,
  buttonText: PropTypes.string,
  trackTitle: PropTypes.string,
}

export default Sponsors
