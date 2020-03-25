import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'

import contentBlockPropTypes from '../components/TwoColumnContentBlock/contentBlockPropTypes'
import '../components/all.sass'

export const TrackTemplate = ({ title, description, hashtag, pageContext }) => (
  <div>
    TrackTemplate
    {console.log(pageContext)}
    <h1>{title}</h1>
    <h1>{description}</h1>
    <h1>{hashtag}</h1>
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

  return (
    <Layout>
      <TrackTemplate
        title={frontmatter.title}
        description={frontmatter.description}
        hashtag={frontmatter.hashtag}
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
  query TrackTemplate($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        description
        featuredimage
        hashtag
        keyMentor
      }
    }
  }
`
