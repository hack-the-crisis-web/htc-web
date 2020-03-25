import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import './all.sass'

const AlternatingContentSection = ({ children }) => (
  <div className={classnames('alternateSection')}>{children}</div>
)

AlternatingContentSection.propTypes = { children: PropTypes.node }

export default AlternatingContentSection
