import React from 'react'
import uuid from 'uuid'
import { graphql, StaticQuery } from 'gatsby'
import styles from './Supporters.module.scss'
import '../all.sass'
import Section from '../Section/Section'

const Supporters = ({ data }) => {
  const { edges } = data.allMarkdownRemark

  return (
    <Section>
      <div className="column">
        <h2
          className={`is-size-4 has-text-black ${styles.header} is-family-secondary`}
        >
          Organising Partners
        </h2>
        <div className="columns is-multiline is-mobile">
          {edges.map(
            ({
              node: {
                frontmatter: { name, link, image, templateKey },
              },
              index,
            }) => {
              return (
                templateKey === 'supporters' && (
                  <div
                    key={uuid()}
                    className="column is-one-quarter-desktop is-half-mobile is-half-tablet"
                  >
                    <a
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.link}
                    >
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
        <div className="columns is-multiline is-mobile">
          {edges.map(
            ({
              node: {
                frontmatter: { name, link, image, templateKey },
              },
              index,
            }) => {
              return (
                templateKey === 'sponsors' && (
                  <div
                    key={uuid()}
                    className="column is-one-quarter-desktop is-half-mobile is-half-tablet"
                  >
                    <a
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.link}
                    >
                      <img className={styles.logo} src={image} alt={name} />
                    </a>
                  </div>
                )
              )
            }
          )}
        </div>
      </div>
    </Section>
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
