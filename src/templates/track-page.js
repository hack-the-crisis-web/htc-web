import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'

import contentBlockPropTypes from '../components/TwoColumnContentBlock/contentBlockPropTypes'
import '../components/all.sass'

export const TrackTemplate = ({}) => <div>TrackTemplate</div>

TrackTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  subheading: PropTypes.string,
  contentItems: PropTypes.arrayOf(PropTypes.shape(contentBlockPropTypes)),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <TrackTemplate />
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
  query TrackTemplate {
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
