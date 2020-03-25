import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import '../components/all.sass'
import Layout from '../components/Layout'
import contentBlockPropTypes from '../components/TwoColumnContentBlock/contentBlockPropTypes'
import TrackHeroSection from '../components/TrackHeroSection/TrackHeroSection'
import HTMLContentSection from '../components/HTMLContentSection/HTMLContentSection'

export const TrackTemplate = ({
  title,
  description,
  mentorName,
  mentorSurname,
  mentorRole,
  mentorAbout,
  featuredImage,
  trackLogo,
  content,
}) => (
  <>
    <TrackHeroSection
      title={title}
      description={description}
      hasMentor={!!mentorName}
      mentor={`${mentorName} ${mentorSurname}`}
      mentorRole={mentorRole}
      mentorAbout={mentorAbout}
      featuredImage={featuredImage}
      trackLogo={trackLogo}
    />
    {content && <HTMLContentSection content={content} />}
  </>
)

TrackTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  subheading: PropTypes.string,
  contentItems: PropTypes.arrayOf(PropTypes.shape(contentBlockPropTypes)),
}

const TrackPage = ({ data }) => {
  const { frontmatter = {} } = data.markdownRemark
  const { mentor = {} } = data

  return (
    <Layout title={frontmatter.title}>
      <TrackTemplate
        title={frontmatter.title}
        description={frontmatter.description}
        hashtag={frontmatter.hashtag}
        mentorName={mentor ? mentor.frontmatter.name : undefined}
        mentorSurname={mentor ? mentor.frontmatter.surname : undefined}
        mentorRole={mentor ? mentor.frontmatter.role : undefined}
        mentorAbout={mentor ? mentor.frontmatter.about : undefined}
        featuredImage={frontmatter.featuredimage}
        trackLogo={frontmatter.trackLogo}
        content={data.markdownRemark.html}
      />
    </Layout>
  )
}

TrackPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default TrackPage

export const pageQuery = graphql`
  query TrackTemplate($slug: String!, $keyMentorId: String) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        description
        featuredimage
        hashtag
        keyMentor
        trackLogo
      }
    }
    mentor: markdownRemark(frontmatter: { personId: { eq: $keyMentorId } }) {
      frontmatter {
        name
        surname
        role
        about
      }
    }
  }
`
