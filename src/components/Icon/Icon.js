import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import styles from './Icon.module.scss'
const files = require.context('!svg-sprite-loader!./assets', false, /.*\.svg$/)
files.keys().forEach(files)

export default function Icon({ type, size }) {
  const classList = classNames(styles.icon, {
    [styles[size]]: size,
  })

  return (
    <svg className={classList}>
      <use xlinkHref={`#${type}`}></use>
    </svg>
  )
}

Icon.propTypes = {
  type: PropTypes.string,
  size: PropTypes.oneOf(['xxs', 'xs', 'sm', 'smd', 'md', 'lg', 'xl', 'xxxl']),
}
