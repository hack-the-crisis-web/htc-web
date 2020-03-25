import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import TracklistsSection from '../components/TracklistsSection/TracklistsSection'
import HowItWorksSection from '../components/HowItWorksSection/HowItWorksSection'
import Supporters from '../components/Supporters/Supporters'
import HeroSection from '../components/HeroSection/HeroSection'
import AlternatingContent from '../components/AlternatingContent'
import contentBlockPropTypes from '../components/TwoColumnContentBlock/contentBlockPropTypes'
import TrackLeads from '../components/People/TrackLeads'
import '../components/all.sass'

export const IndexPageTemplate = ({
  eventDate,
  title,
  subheading,
  contentItems,
  howItWorksDescription,
  tracklistDescription,
  trackleadsDescription,
}) => (
  <div>
    <HeroSection title={title} subheading={subheading} eventDate={eventDate} />
    <AlternatingContent contentItems={contentItems}></AlternatingContent>
    <HowItWorksSection items={contentItems} />
    <TracklistsSection />
    <TrackLeads />

    <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <Supporters />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
)

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  subheading: PropTypes.string,
  contentItems: PropTypes.arrayOf(PropTypes.shape(contentBlockPropTypes)),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        eventDate={frontmatter.eventDate}
        contentItems={frontmatter.contentItems}
        howItWorksDescription={frontmatter.howItWorksDescription}
        tracklistDescription={frontmatter.tracklistDescription}
        trackleadsDescription={frontmatter.trackleadsDescription}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        subheading
        eventDate
        howItWorksDescription
        tracklistDescription
        trackleadsDescription
        contentItems {
          title
          textContent
          image
          ctaText
          ctaLink
        }
      }
    }
  }
`
