import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import TracklistsSection from '../components/TracklistsSection/TracklistsSection'
import HowItWorksSection from '../components/HowItWorksSection/HowItWorksSection'
import Sponsors from '../components/Supporters/Sponsors'
import Partners from '../components/Supporters/Partners'
import HeroSection from '../components/HeroSection/HeroSection'
import AlternatingContent from '../components/AlternatingContent'
import contentBlockPropTypes from '../components/TwoColumnContentBlock/contentBlockPropTypes'
import TrackLeads from '../components/People/TrackLeads'
import TimelineSection from '../components/TimelineSection/TimelineSection'
import '../components/all.sass'
import JoinUsSection from '../components/JoinUsSection/JoinUsSection'
import sectionItemPropTypes from '../components/JoinUsSection/sectionItemPropTypes'

export const IndexPageTemplate = ({
  eventDate,
  title,
  subheading,
  contentItems,
  howItWorksItems,
  howItWorksDescription,
  tracklistDescription,
  trackleadsDescription,
  timelineDescription,
  heroImage,
  timeline,
  heroCTALeftText,
  heroCTALeftLink,
  heroCTARightText,
  heroCTARightLink,
  sectionItems,
}) => (
  <>
    <HeroSection
      backgroundImage={heroImage}
      title={title}
      subheading={subheading}
      eventDate={eventDate}
      heroCTALeftText={heroCTALeftText}
      heroCTALeftLink={heroCTALeftLink}
      heroCTARightText={heroCTARightText}
      heroCTARightLink={heroCTARightLink}
    />
    <HowItWorksSection
      description={howItWorksDescription}
      items={howItWorksItems}
    />
    <TimelineSection
      title="Timeline"
      description={timelineDescription}
      ctaLabel="Full agenda"
      ctaUrl="/agenda"
      items={timeline}
    />
    <TracklistsSection description={tracklistDescription} />
    <TrackLeads description={trackleadsDescription} />
    <AlternatingContent contentItems={contentItems}></AlternatingContent>
    <JoinUsSection sectionItems={sectionItems} />
    <Partners />
    <Sponsors />
  </>
)

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  subheading: PropTypes.string,
  contentItems: PropTypes.arrayOf(PropTypes.shape(contentBlockPropTypes)),
  sectionItems: PropTypes.arrayOf(PropTypes.shape(sectionItemPropTypes)),
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
        timelineDescription={frontmatter.timelineDescription}
        heroImage={frontmatter.heroImage.publicURL}
        timeline={frontmatter.timeline}
        heroCTALeftText={frontmatter.heroCTALeftText}
        heroCTALeftLink={frontmatter.heroCTALeftLink}
        heroCTARightText={frontmatter.heroCTARightText}
        heroCTARightLink={frontmatter.heroCTARightLink}
        sectionItems={frontmatter.sectionItems}
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
        timelineDescription
        timeline {
          image {
            publicURL
          }
          title
          date
          isActive
        }
        heroImage {
          publicURL
        }
        heroCTALeftText
        heroCTALeftLink
        heroCTARightText
        heroCTARightLink
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
        sectionItems {
          title
          textContent
          image {
            publicURL
          }
          buttons {
            ctaText
            ctaLink
          }
        }
      }
    }
  }
`
