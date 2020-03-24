import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import './all.sass'

const AlternatingContentSection = ({ children }) => (
  <section className={classnames('section', 'alternateSection')}>
    {children}
  </section>
)

AlternatingContentSection.propTypes = { children: PropTypes.node }

export default AlternatingContentSection
