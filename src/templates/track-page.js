import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'

import contentBlockPropTypes from '../components/TwoColumnContentBlock/contentBlockPropTypes'
import '../components/all.sass'

export const TrackTemplate = ({
  title,
  description,
  hashtag,
  mentorName,
  mentorSurname,
  mentorRole,
  mentorAbout,
}) => (
  <div>
    TrackTemplate
    <h1>{title}</h1>
    <h1>{description}</h1>
    <h1>{hashtag}</h1>
    <h1>{mentorName}</h1>
    <h1>{mentorSurname}</h1>
    <h1>{mentorRole}</h1>
    <h1>{mentorAbout}</h1>
  </div>
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

  console.log(mentor)

  return (
    <Layout>
      <TrackTemplate
        title={frontmatter.title}
        description={frontmatter.description}
        hashtag={frontmatter.hashtag}
        mentorName={mentor.frontmatter.name}
        mentorSurname={mentor.frontmatter.surname}
        mentorRole={mentor.frontmatter.role}
        mentorAbout={mentor.frontmatter.about}
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
  query TrackTemplate($slug: String!, $keyMentorId: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        description
        featuredimage
        hashtag
        keyMentor
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
