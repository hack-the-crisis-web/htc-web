import React from 'react'
import classnames from 'classnames'
import uuid from 'uuid'
import { graphql, StaticQuery } from 'gatsby'
import Section from '../Section/Section'
import styles from './Supporters.module.scss'
import '../all.sass'
import plusIcon from '../../img/plusicon.svg'

const Sponsors = ({ data, track = '' }) => {
  const { edges } = data.allMarkdownRemark

  return (
    <Section>
      <h2
        className={`is-size-4 has-text-black ${styles.header} is-family-secondary`}
      >
        Sponsors
      </h2>
      <div className="columns is-multiline is-mobile">
        {edges.map(
          ({
            node: {
              frontmatter: { name, link, image, templateKey, sponsoredTrack },
            },
          }) => {
            return (
              templateKey === 'sponsors' &&
              sponsoredTrack === track && (
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
        <div className="column is-one-quarter-desktop is-half-mobile is-half-tablet">
          <a
            href="mailto:hello@theglobalhack.com"
            className={classnames(styles.join, 'hover-effect')}
          >
            <img src={plusIcon} alt="Become a sponsor" />
            <span>Become a sponsor</span>
          </a>
        </div>
      </div>
    </Section>
  )
}

export default props => (
  <StaticQuery
    query={graphql`
      query Sponsors {
        allMarkdownRemark(
          filter: { frontmatter: { templateKey: { in: ["sponsors"] } } }
        ) {
          edges {
            node {
              frontmatter {
                templateKey
                name
                link
                image
                sponsoredTrack
              }
            }
          }
        }
      }
    `}
    render={data => <Sponsors data={data} {...props} />}
  />
)
