import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import AlternatingContent from '../components/AlternatingContent'
import JoinUsSection from '../components/JoinUsSection/JoinUsSection'
import contentBlockPropTypes from '../components/TwoColumnContentBlock/contentBlockPropTypes'
import sectionItemPropTypes from '../components/JoinUsSection/sectionItemPropTypes'
import OurPeople from '../components/People/OurPeople'

export const JoinPageTemplate = ({
  contentItems,
  sectionItems,
  trackleadsDescription,
  ourPeopleTitle,
}) => (
  <>
    <JoinUsSection sectionItems={sectionItems} />
    <div className="section">
      <AlternatingContent contentItems={contentItems}></AlternatingContent>
      <OurPeople description={trackleadsDescription} title={ourPeopleTitle} />
    </div>
  </>
)

JoinPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  contentItems: PropTypes.arrayOf(PropTypes.shape(contentBlockPropTypes)),
  sectionItems: PropTypes.arrayOf(PropTypes.shape(sectionItemPropTypes)),
}

const JoinPage = ({ data }) => {
  const {
    markdownRemark: { frontmatter: payload },
  } = data

  return (
    <Layout title="Join us">
      <JoinPageTemplate
        title={payload.title}
        contentItems={payload.contentItems}
        sectionItems={payload.sectionItems}
        ourPeopleTitle={payload.ourPeopleTitle}
      />
    </Layout>
  )
}

JoinPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default JoinPage

export const joinPageQuery = graphql`
  query JoinPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "join-page" } }) {
      frontmatter {
        title
        ourPeopleTitle
        contentItems {
          title
          textContent
          image {
            publicURL
          }
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
