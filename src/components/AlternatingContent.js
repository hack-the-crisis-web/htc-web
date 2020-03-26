import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import AlternatingContentSection from './AlternatingContentSection'
import contentBlockPropTypes from './TwoColumnContentBlock/contentBlockPropTypes'
import TwoColumnContentBlock from './TwoColumnContentBlock/TwoColumnContentBlock'
import Section from './Section/Section'

const AlternatingContent = ({ inSection = true, contentItems, ...rest }) => {
  const Wrapper = inSection ? Section : Fragment

  return contentItems && !!contentItems.length ? (
    <Wrapper>
      <AlternatingContentSection>
        {contentItems.map((item, index) => (
          <TwoColumnContentBlock {...item} {...rest} key={index} />
        ))}
      </AlternatingContentSection>
    </Wrapper>
  ) : null
}

AlternatingContent.propTypes = {
  contentItems: PropTypes.arrayOf(PropTypes.shape(contentBlockPropTypes)),
  descriptionClassName: PropTypes.string,
  titleClassName: PropTypes.string,
}

export default AlternatingContent
