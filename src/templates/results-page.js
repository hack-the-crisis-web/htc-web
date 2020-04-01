import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import AlternatingContent from '../components/AlternatingContent'
import WinnersSection from '../components/WinnersSection/WinnersSection'

export const ResultsPageTemplate = ({ winners, contentItems }) => {
  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <AlternatingContent
              contentItems={contentItems}
            ></AlternatingContent>
            {console.log(winners)}
            <WinnersSection items={winners} />
          </div>
        </div>
      </div>
    </section>
  )
}

ResultsPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const ResultsPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout title="Results">
      <ResultsPageTemplate
        contentItems={post.frontmatter.contentItems}
        winners={post.frontmatter.winners}
      />
    </Layout>
  )
}

ResultsPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default ResultsPage

export const resultsPageQuery = graphql`
  query ResultsPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        contentItems {
          title
          image {
            publicURL
          }
          ctaText
          ctaLink
          textContent
        }
        winners {
          title
          team
          category
          textContent
          image {
            publicURL
          }
        }
      }
    }
  }
`
