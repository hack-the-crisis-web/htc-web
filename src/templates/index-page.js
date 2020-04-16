import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Sponsors from '../components/Supporters/Sponsors'
import Partners from '../components/Supporters/Partners'
import HeroSection from '../components/HeroSection/HeroSection'
import AlternatingContent from '../components/AlternatingContent'
import contentBlockPropTypes from '../components/TwoColumnContentBlock/contentBlockPropTypes'
import TrackLeads from '../components/People/TrackLeads'
import SupportingOrganisations from '../components/Supporters/SupportingOrganisations'
import NewsletterSection from '../components/NewsletterSection/NewsletterSection'
import BlogRoll from '../components/BlogRoll/BlogRoll'
import Section from '../components/Section/Section'
import SectionTitle from '../components/SectionTitle/SectionTitle'
import SectionDescription from '../components/SectionDescription/SectionDescription'

export const IndexPageTemplate = ({
  eventDate,
  title,
  subheading,
  contentItems,
  trackleadsDescription,
  heroImage,
  heroCTALeftText,
  heroCTALeftLink,
  heroCTARightText,
  heroCTARightLink,
  newsletterSection,
  newsTitle,
  newsDescription,
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
    <div className="has-background-danger">
      <AlternatingContent contentItems={contentItems}></AlternatingContent>
    </div>
    <div className="has-background-success">
      <Section>
        <SectionTitle title={newsTitle} />
        <SectionDescription text={newsDescription} />
        <BlogRoll limit={3} />
      </Section>
    </div>
    <TrackLeads description={trackleadsDescription} />
    <NewsletterSection newsletterContent={newsletterSection} />
    <Partners />
    <Sponsors title="Global partners" buttonText="Become a partner" />
    <SupportingOrganisations />
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
        tracklistDescription={frontmatter.tracklistDescription}
        timelineDescription={frontmatter.timelineDescription}
        heroImage={frontmatter.heroImage.publicURL}
        timeline={frontmatter.timeline}
        heroCTALeftText={frontmatter.heroCTALeftText}
        heroCTALeftLink={frontmatter.heroCTALeftLink}
        heroCTARightText={frontmatter.heroCTARightText}
        heroCTARightLink={frontmatter.heroCTARightLink}
        newsletterSection={frontmatter.newsletterSection}
        newsTitle={frontmatter.newsTitle}
        newsDescription={frontmatter.newsDescription}
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
        newsTitle
        newsDescription
        trackleadsDescription
        heroImage {
          publicURL
        }
        heroCTALeftText
        heroCTALeftLink
        heroCTARightText
        heroCTARightLink
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
        newsletterSection {
          title
          textContent
          image {
            publicURL
          }
          inputPlaceholder
          buttonText
          buttonsDisabled
        }
      }
    }
  }
`
