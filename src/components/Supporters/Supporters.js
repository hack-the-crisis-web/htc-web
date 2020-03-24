import React from 'react'
import { graphql } from 'gatsby'

import styles from './Supporters.module.scss'

const Supporters = ({ data }) => {
  const {
    frontmatter: { partners, sponsors },
  } = data.markdownRemark

  return (
    <div className="column">
      <h2
        className={`has-text-centered is-size-3 has-text-black ${styles.header}`}
      >
        Organizing partners
      </h2>
      <div className="columns">
        {partners.map(({ image, name, link }) => (
          <div className="column">
            <a href={link} target="_blank">
              <figure class="image is-3by1" height="45px" width="156px">
                <img src={image} height="45px" width="156px" alt={name} />
              </figure>
            </a>
          </div>
        ))}
      </div>
      <h2
        className={`has-text-centered is-size-3 has-text-black ${styles.header}`}
      >
        Sponsors
      </h2>
      <div className="columns">
        {sponsors.map(({ image, name, link }) => (
          <div className="column">
            <a href={link} target="_blank">
              <figure class="image is-3by1" height="45px" width="156px">
                <img src={image} height="45px" width="156px" alt={name} />
              </figure>
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Supporters

export const supportersQuery = graphql`
  query Supporters {
    markdownRemark(frontmatter: { templateKey: { eq: "supporters" } }) {
      frontmatter {
        partners {
          name
          image {
            childImageSharp {
              fluid(maxWidth: 155, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          link
        }
        sponsors {
          name
          image {
            childImageSharp {
              fluid(maxWidth: 155, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          link
        }
      }
    }
  }
`
