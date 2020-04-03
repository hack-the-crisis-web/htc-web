import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Section from '../components/Section/Section'
import SectionTitle from '../components/SectionTitle/SectionTitle'
import SectionDescription from '../components/SectionDescription/SectionDescription'
import CustomLink from '../components/CustomLink/CustomLink'

export const SlackPageTemplate = ({
  title,
  description,
  slackURL,
  linkText,
}) => {
  useEffect(() => {
    window.location.replace(slackURL)
  }, [slackURL])

  return (
    <Section>
      <SectionTitle title={title} />
      <SectionDescription text={description} marginBottom={20} />
      <CustomLink to={slackURL}>{linkText}</CustomLink>
    </Section>
  )
}

SlackPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  linkText: PropTypes.string.isRequired,
  slackURL: PropTypes.string.isRequired,
}

const SlackPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout title={post.frontmatter.title}>
      <SlackPageTemplate
        title={post.frontmatter.title}
        slackURL={post.frontmatter.slackURL}
        linkText={post.frontmatter.linkText}
        description={post.frontmatter.description}
      />
    </Layout>
  )
}

SlackPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default SlackPage

export const slackPageQuery = graphql`
  query SlackPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        description
        linkText
        slackURL
      }
    }
  }
`
