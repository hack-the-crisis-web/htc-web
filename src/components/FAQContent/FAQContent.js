import React from 'react'
import PropTypes from 'prop-types'
import AlternatingContent from '../AlternatingContent'
import styles from './FAQContent.module.scss'
import contentBlockPropTypes from '../TwoColumnContentBlock/contentBlockPropTypes'

const FAQContent = props => (
  <AlternatingContent
    {...props}
    descriptionClassName={styles.faqDescription}
    titleClassName={styles.faqTitle}
  />
)

FAQContent.propTypes = {
  contentItems: PropTypes.arrayOf(PropTypes.shape(contentBlockPropTypes)),
}

export default FAQContent
