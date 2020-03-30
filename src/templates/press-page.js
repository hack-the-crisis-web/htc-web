import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import Timeline from '../components/TimelineSection/Timeline/Timeline'
import AlternatingContent from '../components/AlternatingContent'

export const PressPageTemplate = ({
  title,
  content,
  contentComponent,
  components,
}) => {
  const PageContent = contentComponent || Content
  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="columns">
              <div className="column is-8">
                <div className="section">
                  <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                    {title}
                  </h2>
                  {components.map(item => {
                    if (item.timeline !== null) {
                      return <Timeline items={item.timeline} />
                    }
                    if (item.contentItems !== null) {
                      return (
                        <AlternatingContent
                          contentItems={item.contentItems}
                        ></AlternatingContent>
                      )
                    }
                  })}
                  <PageContent className="content" content={content} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

PressPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const PressPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout title="Press">
      <PressPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
        components={post.frontmatter.components}
      />
    </Layout>
  )
}

PressPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default PressPage

export const pressPageQuery = graphql`
  query PressPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        components {
          timeline {
            title
            isActive
            date
            image {
              id
              publicURL
            }
          }
          contentItems {
            title
            textContent
            image {
              id
              publicURL
            }
            ctaText
            ctaLink
          }
        }
      }
    }
  }
`

//
