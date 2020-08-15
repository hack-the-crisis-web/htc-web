import React from 'react'
import Img from 'gatsby-image'
import classnames from 'classnames'
import { toHTML } from '../remarkToHTML'
import { HTMLContent } from '../Content'
import styles from './ChallengesSection.module.scss'

const ChallengeCard = ({
  title,
  description,
  logo,
  logoTitle,
  linkTitle,
  linkUrl,
}) => (
  <div className={styles.card}>
    {logo && logo.childImageSharp && (
      <Img
        fluid={logo.childImageSharp.fluid}
        alt={logoTitle}
        className={styles.logo}
      />
    )}
    {logoTitle && (
      <p className={classnames(styles.text, styles.logoTitle)}>{logoTitle}</p>
    )}
    <h4 className={classnames('has-text-primary', styles.title)}>{title}</h4>
    <HTMLContent className={styles.text} content={toHTML(description)} />
    {linkTitle && linkUrl && (
      <a
        href={linkUrl}
        className={classnames('has-text-primary', styles.link)}
        target="_blank"
      >
        <span>{linkTitle}</span>
        <span className={styles.arrow} />
      </a>
    )}
  </div>
)

export default ChallengeCard
