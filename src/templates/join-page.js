import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import AlternatingContent from '../components/AlternatingContent'
import JoinUsSection from '../components/JoinUsSection/JoinUsSection'
import Button from '../components/Button/Button'
import contentBlockPropTypes from '../components/TwoColumnContentBlock/contentBlockPropTypes'
import OurPeople from '../components/People/OurPeople'

export const JoinPageTemplate = ({
  contentItems,
  trackleadsDescription,
  ourPeopleTitle,
}) => (
  <>
    <JoinUsSection
      Buttons={
        <>
          <Button external href="mailto:hello@theglobalhack.com">
            Join as organiser
          </Button>
          <Button
            external
            href="https://forms.gle/zD5L9frVyf5Pzr956"
            rel="noopener"
            target="_blank"
          >
            Join as a mentor
          </Button>
        </>
      }
    />
    <div className="section">
      <AlternatingContent contentItems={contentItems}></AlternatingContent>
      <OurPeople description={trackleadsDescription} title={ourPeopleTitle} />
    </div>
  </>
)

JoinPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  contentItems: PropTypes.arrayOf(PropTypes.shape(contentBlockPropTypes)),
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
      }
    }
  }
`
