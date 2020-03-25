import React from 'react'
import { Helmet } from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import { withPrefix } from 'gatsby'

const SEO = ({ title, description, pathname }) => (
  <StaticQuery
    query={query}
    render={({
      site: {
        siteMetadata: { defaultTitle, defaultDescription, siteUrl },
      },
    }) => {
      const seo = {
        title: title || defaultTitle,
        description: description || defaultDescription,
        url: `${siteUrl}${pathname || '/'}`,
      }

      return (
        <>
          <Helmet title={seo.title}>
            <meta name="description" content={seo.description} />
            <meta
              name="image"
              content={`${withPrefix('/')}img/g48_crisis-cover.jpg`}
            />
            {seo.url && <meta property="og:url" content={seo.url} />}
            {seo.title && <meta property="og:title" content={seo.title} />}
            {seo.description && (
              <meta property="og:description" content={seo.description} />
            )}
            {seo.image && (
              <meta
                property="og:image"
                content={`${withPrefix('/')}img/g48_crisis-cover.jpg`}
              />
            )}
            <meta name="twitter:card" content="summary_large_image" />
            {seo.title && <meta name="twitter:title" content={seo.title} />}
            {seo.description && (
              <meta name="twitter:description" content={seo.description} />
            )}
            {seo.image && (
              <meta
                name="twitter:image"
                content={`${withPrefix('/')}img/g48_crisis-cover.jpg`}
              />
            )}
            <link
              rel="apple-touch-icon"
              sizes="180x180"
              href={`${withPrefix('/')}img/apple-touch-icon.png`}
            />
            <link
              rel="icon"
              type="image/png"
              href={`${withPrefix('/')}img/favicon-32x32.png`}
              sizes="32x32"
            />
            <link
              rel="icon"
              type="image/png"
              href={`${withPrefix('/')}img/favicon-16x16.png`}
              sizes="16x16"
            />

            <link
              rel="mask-icon"
              href={`${withPrefix('/')}img/safari-pinned-tab.svg`}
              color="#ff4400"
            />
            <meta
              property="og:image"
              content={`${withPrefix('/')}img/g48_crisis-cover.jpg`}
            />
          </Helmet>
        </>
      )
    }}
  />
)

export default SEO

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        defaultDescription: description
        siteUrl: url
      }
    }
  }
`
