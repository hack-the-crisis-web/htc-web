import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import LogosBlock from '../LogosBlock/LogosBlock'

export default () => (
  <StaticQuery
    query={graphql`
      query Partners {
        allMarkdownRemark(
          filter: { frontmatter: { templateKey: { in: ["supporters"] } } }
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
        title="Organising partners"
        items={data.allMarkdownRemark.edges.map(({ node }) => ({
          slug: node.fields.slug,
          ...node.frontmatter,
        }))}
      />
    )}
  />
)
