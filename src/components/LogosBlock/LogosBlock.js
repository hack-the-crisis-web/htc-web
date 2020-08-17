import React from 'react'
import Img from 'gatsby-image'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import Section from '../Section/Section'
import styles from './LogosBlock.module.scss'
import '../all.sass'
import plusIcon from '../../img/plusicon.svg'

const LogoContainer = ({ children }) => (
  <div className="column is-one-quarter-desktop is-half-mobile is-half-tablet">
    {children}
  </div>
)

LogoContainer.propTypes = { children: PropTypes.node }

const LogosBlock = ({ title, items, buttonText }) =>
  // show empty list only if button is defined, otherwise don't show empty list
  !(!items.length && !buttonText) && (
    <Section>
      <div className="column">
        <h2
          className={`is-size-4 has-text-black ${styles.header} is-family-secondary`}
        >
          {title}
        </h2>
        <div className="columns is-multiline is-mobile">
          {items.map(({ slug, name, link, image }) => (
            <LogoContainer key={slug}>
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                {image && image.childImageSharp && (
                  <Img
                    imgStyle={{ objectFit: 'contain' }}
                    fluid={image.childImageSharp.fluid}
                    className={styles.logo}
                    alt={name}
                  />
                )}
              </a>
            </LogoContainer>
          ))}
          {!!buttonText && (
            <LogoContainer>
              <a
                href="mailto:hello@theglobalhack.com"
                className={classnames(styles.join, 'hover-effect')}
              >
                <img src={plusIcon} alt={buttonText} />
                <span>{buttonText}</span>
              </a>
            </LogoContainer>
          )}
        </div>
      </div>
    </Section>
  )

LogosBlock.propTypes = {
  title: PropTypes.string.isRequired,
  buttonText: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      slug: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
}

export default LogosBlock
