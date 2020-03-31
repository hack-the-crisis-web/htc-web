import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const HowItWorksPageTemplate = ({
  title,
  content,
  contentComponent,
}) => {
  const PageContent = contentComponent || Content

  return (
    <>
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

HowItWorksPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  timelineItems: PropTypes.arrayOf(PropTypes.object),
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const HowItWorksPage = ({ data }) => {
  const { agendaMarkdown: post } = data

  return (
    <Layout title="Agenda">
      <HowItWorksPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  )
}

HowItWorksPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default HowItWorksPage

export const howItWorksPageQuery = graphql`
  query HowItWorksPage($id: String!) {
    agendaMarkdown: markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
