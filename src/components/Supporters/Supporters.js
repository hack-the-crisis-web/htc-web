import React from 'react'
import uuid from 'uuid'
import { graphql, StaticQuery } from 'gatsby'
import styles from './Supporters.module.scss'
import '../all.sass'

const Supporters = ({ data }) => {
  const { edges } = data.allMarkdownRemark

  return (
    <div className="column">
      <h2
        className={`is-size-4 has-text-black ${styles.header} is-family-secondary`}
      >
        Huge thanks folks
      </h2>
      <div className="columns is-multiline">
        {edges.map(
          ({
            node: {
              frontmatter: { name, link, image, templateKey },
            },
            index,
          }) => {
            return (
              templateKey === 'supporters' && (
                <div key={uuid()} className="column is-3">
                  <a href={link} target="_blank" className={styles.link}>
                    <img className={styles.logo} src={image} alt={name} />
                  </a>
                </div>
              )
            )
          }
        )}
      </div>
      <h2
        className={`is-size-4 has-text-black ${styles.header} is-family-secondary`}
      >
        Sponsors
      </h2>
      <div className="columns is-multiline">
        {edges.map(
          ({
            node: {
              frontmatter: { name, link, image, templateKey },
            },
            index,
          }) => {
            return (
              templateKey === 'sponsors' && (
                <div key={uuid()} className="column is-3">
                  <a href={link} target="_blank" className={styles.link}>
                    <img className={styles.logo} src={image} alt={name} />
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
