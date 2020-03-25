import React from 'react'
import PropTypes from 'prop-types'
import AlternatingContentSection from './AlternatingContentSection'
import contentBlockPropTypes from './TwoColumnContentBlock/contentBlockPropTypes'
import TwoColumnContentBlock from './TwoColumnContentBlock/TwoColumnContentBlock'
import Section from './Section/Section'

const AlternatingContent = ({ contentItems, ...rest }) =>
  contentItems && !!contentItems.length ? (
    <Section>
      <AlternatingContentSection>
        {contentItems.map((item, index) => (
          <TwoColumnContentBlock {...item} {...rest} key={index} />
        ))}
      </AlternatingContentSection>
    </Section>
  ) : null

AlternatingContent.propTypes = {
  contentItems: PropTypes.arrayOf(PropTypes.shape(contentBlockPropTypes)),
  descriptionClassName: PropTypes.string,
  titleClassName: PropTypes.string,
}

export default AlternatingContent
