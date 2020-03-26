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
import TimelineSection from '../components/TimelineSection/TimelineSection'
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
    <TimelineSection
      title="Timeline"
      description="Pedit quo minus id quod maxime Est et expedita distinctio. Nam libero tempore, cum soluta nobis"
      ctaLabel="Full agenda"
      ctaUrl="/"
      items={[
        {
          image: 'https://via.placeholder.com/100.png/',
          title: 'Caption',
          date: '4. april',
          isActive: false,
        },
        {
          image: 'https://via.placeholder.com/120.png/',
          title: 'Caption two with long text',
          date: '6. april',
          isActive: true,
        },
        {
          image: 'https://via.placeholder.com/98.png/',
          title: 'Caption three',
          date: '7. april',
          isActive: false,
        },
        {
          image: 'https://via.placeholder.com/198.png/',
          title: 'Caption 4',
          date: '8. april',
          isActive: false,
        },
        {
          image: 'https://via.placeholder.com/88.png/',
          title: 'Caption 5',
          date: '9. april',
          isActive: false,
        },
        {
          image: 'https://via.placeholder.com/128.png/',
          title: 'Caption 6',
          date: '10. april',
          isActive: false,
        },
      ]}
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
