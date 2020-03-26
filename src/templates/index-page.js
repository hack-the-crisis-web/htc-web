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
import JoinUsSection from '../components/JoinUsSection/JoinUsSection'

export const IndexPageTemplate = ({
  eventDate,
  title,
  subheading,
  contentItems,
  howItWorksItems,
  howItWorksDescription,
  tracklistDescription,
  trackleadsDescription,
  heroImage,
}) => (
  <>
    <HeroSection
      backgroundImage={heroImage}
      title={title}
      subheading={subheading}
      eventDate={eventDate}
    />
    <AlternatingContent contentItems={contentItems}></AlternatingContent>
    <HowItWorksSection
      description={howItWorksDescription}
      items={howItWorksItems}
    />
    <TracklistsSection description={tracklistDescription} />
    <TrackLeads description={trackleadsDescription} />
    <JoinUsSection />
    <Supporters />
  </>
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
    <Layout title="Home">
      <IndexPageTemplate
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        eventDate={frontmatter.eventDate}
        contentItems={frontmatter.contentItems}
        howItWorksItems={frontmatter.howItWorksItems}
        howItWorksDescription={frontmatter.howItWorksDescription}
        tracklistDescription={frontmatter.tracklistDescription}
        trackleadsDescription={frontmatter.trackleadsDescription}
        heroImage={frontmatter.heroImage.publicURL}
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
        heroImage {
          publicURL
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
`
