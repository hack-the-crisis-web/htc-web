import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import styles from './Supporters.module.scss'

const Supporters = ({ data }) => {
  const { edges } = data.allMarkdownRemark

  return (
    <div className="column">
      <h2
        className={`has-text-centered is-size-3 has-text-black ${styles.header}`}
      >
        Organizing partners
      </h2>
      <div className="columns">
        {edges.map(
          ({
            node: {
              frontmatter: { name, link, image, templateKey },
            },
          }) => {
            return (
              templateKey === 'supporters' && (
                <div key={name} className="column">
                  <a href={link} target="_blank">
                    <figure
                      className="image is-3by1"
                      height="45px"
                      width="156px"
                    >
                      <img src={image} height="45px" width="156px" alt={name} />
                    </figure>
                  </a>
                </div>
              )
            )
          }
        )}
      </div>
      <h2
        className={`has-text-centered is-size-3 has-text-black ${styles.header}`}
      >
        Sponsors
      </h2>
      <div className="columns">
        {edges.map(
          ({
            node: {
              frontmatter: { name, link, image, templateKey },
            },
          }) => {
            return (
              templateKey === 'sponsors' && (
                <div key={name} className="column">
                  <a href={link} target="_blank">
                    <figure
                      className="image is-3by1"
                      height="45px"
                      width="156px"
                    >
                      <img src={image} height="45px" width="156px" alt={name} />
                    </figure>
                  </a>
                </div>
              )
            )
          }
        )}
      </div>
    </div>
  )
}

export default () => (
  <StaticQuery
    query={graphql`
      query Supporters {
        allMarkdownRemark(
          filter: {
            frontmatter: { templateKey: { in: ["supporters", "sponsors"] } }
          }
        ) {
          edges {
            node {
              frontmatter {
                templateKey
                name
                link
                image
              }
            }
          }
        }
      }
    `}
    render={data => <Supporters data={data} />}
  />
)
