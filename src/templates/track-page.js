import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import '../components/all.sass'
import Layout from '../components/Layout'
import contentBlockPropTypes from '../components/TwoColumnContentBlock/contentBlockPropTypes'
import TrackHeroSection from '../components/TrackHeroSection/TrackHeroSection'
import HTMLContentSection from '../components/HTMLContentSection/HTMLContentSection'
import Sponsors from '../components/Supporters/Sponsors'
import TrackMentors from '../components/People/TrackMentors'
import TwitterFeed from '../components/TwitterFeed/TwitterFeed'
import parseTwitterWidgetCode from '../components/parseTwitterWidgetCode'
import Section from '../components/Section/Section'
import TwitterFeedTitle from '../components/TwitterFeed/TwitterFeedTitle'
import TrackOrganisers from '../components/Supporters/TrackOrganisers'

export const TrackTemplate = ({
  title,
  description,
  hashtag,
  mentorName,
  mentorSurname,
  mentorRole,
  mentorAbout,
  featuredImage,
  trackLogo,
  content,
  widgetCode,
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
    {!!parseTwitterWidgetCode(widgetCode) && (
      <Section>
        <TwitterFeedTitle>{hashtag}</TwitterFeedTitle>
        <TwitterFeed {...parseTwitterWidgetCode(widgetCode)} />
      </Section>
    )}
    <TrackMentors
      hashtag={hashtag}
      description="These experts will be available to you throughout the event to mentor you in case you're stuck or need a second opinion."
    />
    <TrackOrganisers trackTitle={title} title={'Track organisers'} />
    <Sponsors
      trackTitle={title}
      title={'Sponsors'}
      buttonText={'Become a track sponsor'}
    />
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
        widgetCode={frontmatter.widgetCode}
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
        widgetCode
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
