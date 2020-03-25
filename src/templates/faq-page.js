import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import SectionTitle from '../components/SectionTitle/SectionTitle'
import AlternatingContent from '../components/AlternatingContent'
import SectionDescription from '../components/SectionDescription/SectionDescription'
import contentBlockPropTypes from '../components/TwoColumnContentBlock/contentBlockPropTypes'

export const FAQPageTemplate = ({ title, content, contentItems }) => (
  <section className="section">
    <div className="container">
      <SectionTitle title={title}></SectionTitle>
      <SectionDescription text={content}></SectionDescription>
    </div>
    <AlternatingContent contentItems={contentItems}></AlternatingContent>
  </section>
)

FAQPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  contentItems: PropTypes.arrayOf(PropTypes.shape(contentBlockPropTypes)),
}

const FAQPage = ({ data }) => {
  const {
    markdownRemark: { frontmatter: payload },
  } = data

  return (
    <Layout>
      <FAQPageTemplate
        title={payload.title}
        description={payload.description}
        contentItems={payload.contentItems}
      />
    </Layout>
  )
}

FAQPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default FAQPage

export const faqPageQuery = graphql`
  query FAQPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "faq-page" } }) {
      frontmatter {
        title
        description
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
