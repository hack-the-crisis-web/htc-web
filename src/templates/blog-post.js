import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import CustomLink from '../components/CustomLink/CustomLink'
import HeroSection from '../components/HeroSection/HeroSection'

export const BlogPostTemplate = ({
  content,
  contentComponent,
  description,
  title,
  helmet,
  date,
  backgroundImage,
  author,
}) => {
  const PostContent = contentComponent || Content

  return (
    <>
      {backgroundImage && (
        <HeroSection
          backgroundImage={backgroundImage}
          title={title}
          eventDate={date}
          subheading={author}
        />
      )}
      <section className="section">
        {helmet || ''}
        <div className="container content">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <CustomLink to="/news" reversed>
                Back
              </CustomLink>
              {!backgroundImage && (
                <>
                  <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
                    {title}
                  </h1>
                  <p>{date}</p>
                </>
              )}
              <section className="section">
                <h3>{description}</h3>
              </section>
              <PostContent content={content} />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
  author: PropTypes.string,
}

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data

  const backgroundImage = post.frontmatter.featuredimage.replace(
    '../../../static/',
    '/'
  )

  return (
    <Layout>
      <BlogPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        backgroundImage={backgroundImage}
        author={post.frontmatter.author}
        helmet={
          <Helmet titleTemplate="%s | News">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
            <meta
              name="image"
              content={`https://theglobalhack.com/${backgroundImage}`}
            />
            <meta
              property="og:url"
              content={`https://theglobalhack.com${post.fields.slug.replace(
                'blog~Updated upstream',
                'news'
              )}`}
            />
            <meta
              property="og:title"
              content={`${post.frontmatter.title} | The Global Hack`}
            />
            <meta
              property="og:description"
              content={post.frontmatter.description}
            />
            <meta
              property="og:image"
              content={`https://theglobalhack.com/${backgroundImage}`}
            />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:creator" content="@theglobalhack" />
            <meta
              name="twitter:title"
              content={`${post.frontmatter.title} | The Global Hack`}
            />
            <meta
              name="twitter:description"
              content={post.frontmatter.description}
            />
            )}
            <meta
              name="twitter:image"
              content={`https://theglobalhack.com/${backgroundImage}`}
            />
          </Helmet>
        }
        date={post.frontmatter.date}
        title={post.frontmatter.title}
      />
    </Layout>
  )
}

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      fields {
        slug
      }
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        featuredimage
        author
      }
    }
  }
`
