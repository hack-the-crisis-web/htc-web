import React from 'react'
import PropTypes from 'prop-types'
import AlternatingContentSection from './AlternatingContentSection'
import contentBlockPropTypes from './TwoColumnContentBlock/contentBlockPropTypes'
import TwoColumnContentBlock from './TwoColumnContentBlock/TwoColumnContentBlock'

const AlternatingContent = ({ contentItems }) =>
  contentItems && !!contentItems.length ? (
    <AlternatingContentSection>
      {contentItems.map((item, index) => (
        <TwoColumnContentBlock {...item} key={index} />
      ))}
    </AlternatingContentSection>
  ) : null

AlternatingContent.propTypes = {
  contentItems: PropTypes.arrayOf(PropTypes.shape(contentBlockPropTypes)),
}

export default AlternatingContent
