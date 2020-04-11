import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import AlternatingContent from '../components/AlternatingContent'
import WinnersSection from '../components/WinnersSection/WinnersSection'
import TrackWinnersSection from '../components/TrackWinnersDropdown/TrackWinnersDropdown'

export const ResultsPageTemplate = ({
  overallWinner,
  contentItems,
  trackWinners,
}) => {
  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <AlternatingContent
              addMarginBottom={false}
              contentItems={contentItems}
            ></AlternatingContent>
            <WinnersSection items={overallWinner} />
            <TrackWinnersSection trackWinners={trackWinners} />
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
        title={post.frontmatter.title}
        contentItems={post.frontmatter.contentItems}
        overallWinner={post.frontmatter.overallWinner}
        trackWinners={post.frontmatter.trackWinners}
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
        overallWinner {
          title
          team
          prize
          textContent
          link
          image {
            publicURL
          }
        }
        trackWinners {
          trackWinner {
            title
            category
            teams {
              team
              prize
              textContent
              link
            }
          }
        }
      }
    }
  }
`
