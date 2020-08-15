import React from 'react'
import Img from 'gatsby-image'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import contentBlockPropTypes from './contentBlockPropTypes'
import SectionTitle from '../SectionTitle/SectionTitle'
import SectionDescription from '../SectionDescription/SectionDescription'
import CustomLink from '../CustomLink/CustomLink'
import styles from './TwoColumnContentBlock.module.scss'

const TwoColumnContentBlock = ({
  title,
  textContent,
  image,
  ctaText,
  ctaLink,
  twoColumnClassName,
  titleClassName,
  descriptionClassName,
  addMarginBottom = true,
}) => {
  const shouldRenderCTA = !!ctaText && !!ctaLink
  return (
    <div
      className={classnames('container', twoColumnClassName, {
        [styles.bottomMargin]: addMarginBottom,
      })}
    >
      <div
        className={classnames(
          'columns',
          'is-variable',
          'is-8',
          !image && styles.notAlternatingColumn
        )}
      >
        {!!image && image.childImageSharp && (
          <div className="column">
            <Img fluid={image.childImageSharp.fluid} />
          </div>
        )}
        <div className={classnames('column', !image && 'is-8')}>
          {!!title && <SectionTitle title={title} className={titleClassName} />}
          {!!textContent && (
            <SectionDescription
              className={descriptionClassName}
              text={textContent}
              restrictWidth={false}
              marginBottom={25}
            />
          )}
          {shouldRenderCTA && <CustomLink to={ctaLink}>{ctaText}</CustomLink>}
        </div>
      </div>
    </div>
  )
}

TwoColumnContentBlock.propTypes = {
  ...contentBlockPropTypes,
  titleClassName: PropTypes.string,
  descriptionClassName: PropTypes.string,
}

export default TwoColumnContentBlock
