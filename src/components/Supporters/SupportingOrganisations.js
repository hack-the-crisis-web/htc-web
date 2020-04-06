import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import LogosBlock from '../LogosBlock/LogosBlock'

export default () => (
  <StaticQuery
    query={graphql`
      query SupportingOrganisations {
        allMarkdownRemark(
          filter: {
            frontmatter: { templateKey: { in: ["supportingOrganisations"] } }
          }
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                name
                link
                image
              }
            }
          }
        }
      }
    `}
    render={data => (
      <LogosBlock
        title="Supporting organisations"
        items={data.allMarkdownRemark.edges.map(({ node }) => ({
          slug: node.fields.slug,
          ...node.frontmatter,
        }))}
      />
    )}
  />
)
