import React from 'react'
import PropTypes from 'prop-types'
import { graphql, StaticQuery } from 'gatsby'
import BlogPostCard from '../BlogPostCard/BlogPostCard'
import Section from '../Section/Section'
import SectionTitle from '../SectionTitle/SectionTitle'
import SectionDescription from '../SectionDescription/SectionDescription'

class BlogRoll extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <div id="blogRoll" className="has-background-success">
        <Section>
          <div className={'container has-text-primary'}>
            <SectionTitle title="The Daily Splash" />
            <SectionDescription
              text={
                'Global tech community leads the movement gathering over 53 countries, over 5000 ideas and hundreds of professionals over the world. We fight against coronavirus. We work on solutions. We do it to change the world.'
              }
            >
              Access to media kits in{' '}
              <a
                href="https://docs.google.com/document/d/18CVv9BYzZvyzoDo-VwDI2wo0znWzrVLq8_TpUpP3LFQ/edit"
                target="_blank"
              >
                English
              </a>
              ,{' '}
              <a
                href="https://docs.google.com/document/d/1kkqSUkIX1_sZkgMnzRRtloeA9TH5VsbdbqUJV6vECjA/edit"
                target="_blank"
              >
                French
              </a>
              ,{' '}
              <a
                href="https://docs.google.com/document/d/1hi6OoJFNEEh1a5yqawIV_ZjtsWoaQmMWcWIv_aqVRT8/edit"
                target="_blank"
              >
                German
              </a>
              ,{' '}
              <a
                href="https://docs.google.com/document/d/1mK6glnkisoxMYgB7HA0pkjHkN1an0p9pVyPd6zJOxww/edit"
                target="_blank"
              >
                Russian
              </a>{' '}
              or{' '}
              <a
                href="https://docs.google.com/document/d/1gNe35aU9UV8vJGZJJ_G_luiCBP_MQXosKizdr7CV73c/edit"
                target="_blank"
              >
                Spanish
              </a>
            </SectionDescription>
            <div className={'columns is-multiline is-mobile'}>
              {posts &&
                posts.map(({ node: post }) => {
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
                        link={post.fields.slug.replace(
                          'blog~Updated upstream',
                          'news'
                        )}
                        date={post.frontmatter.date}
                        intro={post.excerpt}
                        author={post.frontmatter.author}
                      />
                    </div>
                  )
                })}
            </div>
          </div>
        </Section>
      </div>
    )
  }
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
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
                featuredimage
                author
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
)
