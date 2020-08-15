import React from 'react'
import PropTypes from 'prop-types'
import { graphql, StaticQuery } from 'gatsby'
import BlogPostCard from '../BlogPostCard/BlogPostCard'

const BlogRoll = ({ data, limit = -1 }) => {
  const { edges } = data.allMarkdownRemark

  return (
    <div className={'columns is-multiline is-mobile'}>
      {edges.slice(0, limit).map(({ node: post }) => {
        return (
          <div
            key={post.id}
            className="column is-full-mobile is-full-tablet is-half-desktop"
          >
            <BlogPostCard
              title={post.frontmatter.title}
              image={post.frontmatter.featuredimage}
              alt={post.frontmatter.title}
              // dirty hack, but I rather do that, than do some changes now in submodules and netlify pipeline
              link={post.fields.slug.replace('blog~Updated upstream', 'news')}
              date={post.frontmatter.date}
              intro={post.excerpt}
              author={post.frontmatter.author}
            />
          </div>
        )
      })}
    </div>
  )
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default props => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 350)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                date(formatString: "MMMM DD, YYYY")
                featuredimage {
                  childImageSharp {
                    fluid {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
                author
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <BlogRoll data={data} count={count} {...props} />}
  />
)
