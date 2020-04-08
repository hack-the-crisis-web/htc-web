import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import TimelineSection from '../components/TimelineSection/TimelineSection'

export const AgendaPageTemplate = ({
  title,
  content,
  contentComponent,
  timelineItems,
  timelineDescription,
}) => {
  const PageContent = contentComponent || Content

  return (
    <>
      <section className="section section--gradient">
        <div className="container">
          <TimelineSection
            title={'Agenda'}
            items={timelineItems}
            description={timelineDescription}
          />
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="columns">
                <div className="column is-8">
                  <div className="section" style={{ paddingTop: 0 }}>
                    <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                      {title}
                    </h2>
                    <PageContent className="content" content={content} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

AgendaPageTemplate.propTypes = {
  content: PropTypes.string,
  timelineItems: PropTypes.arrayOf(PropTypes.object),
  contentComponent: PropTypes.func,
}

const AgendaPage = ({ data }) => {
  const { agendaMarkdown: post, indexMarkdown } = data

  return (
    <Layout title="Agenda">
      <AgendaPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
        timelineItems={indexMarkdown.frontmatter.timeline}
        timelineDescription={indexMarkdown.frontmatter.timelineDescription}
      />
    </Layout>
  )
}

AgendaPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default AgendaPage

export const aboutPageQuery = graphql`
  query AgendaPage($id: String!) {
    agendaMarkdown: markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
    indexMarkdown: markdownRemark(
      frontmatter: { templateKey: { eq: "index-page" } }
    ) {
      frontmatter {
        timelineDescription
        timeline {
          image {
            publicURL
          }
          title
          date
          isActive
        }
      }
    }
  }
`
