import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import LogosBlock from '../LogosBlock/LogosBlock'

export default () => (
  <StaticQuery
    query={graphql`
      query CommunityPartners {
        allMarkdownRemark(
          filter: { frontmatter: { templateKey: { in: ["communityPartner"] } } }
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
              }
            }
          }
        }
      }
    `}
    render={data => (
      <LogosBlock
        title="Community Partners"
        items={data.allMarkdownRemark.edges.map(({ node }) => ({
          slug: node.fields.slug,
          ...node.frontmatter,
        }))}
      />
    )}
  />
)
