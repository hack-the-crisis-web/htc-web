import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import TimelineSection from '../components/TimelineSection/TimelineSection'
import HowItWorksSection from '../components/HowItWorksSection/HowItWorksSection'
import TracklistsSection from '../components/TracklistsSection/TracklistsSection'
import SectionTitle from '../components/SectionTitle/SectionTitle'

export const HowItWorksPageTemplate = ({
  content,
  contentComponent,
  timelineItems,
  timelineDescription,
  howItWorksItems,
  howItWorksDescription,
  tracklistDescription,
}) => {
  const PageContent = contentComponent || Content

  return (
    <>
      <HowItWorksSection
        description={howItWorksDescription}
        items={howItWorksItems}
      />
      <TracklistsSection description={tracklistDescription} />
      <TimelineSection
        title={'Timeline'}
        items={timelineItems}
        description={timelineDescription}
      />
      <section className="section section--gradient">
        <div className="container">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="columns">
                <div className="column is-8">
                  <div className="section" style={{ paddingTop: 0 }}>
                    <SectionTitle title="Agenda" />
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
    <Layout title="How it works">
      <HowItWorksPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
        timelineItems={post.frontmatter.timeline}
        timelineDescription={post.frontmatter.timelineDescription}
        howItWorksItems={post.frontmatter.howItWorksItems}
        howItWorksDescription={post.frontmatter.howItWorksDescription}
        trackleadsDescription={post.frontmatter.trackleadsDescription}
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
        howItWorksDescription
        tracklistDescription
        timelineDescription
        timeline {
          image {
            publicURL
          }
          title
          date
          isActive
        }
        howItWorksItems {
          title
          textContent
          image {
            id
            publicURL
          }
          ctaText
          ctaLink
          isActive
        }
      }
    }
  }
`
