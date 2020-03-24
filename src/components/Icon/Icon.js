import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import styles from './Icon.module.scss'

export default function Icon({ src, size }) {
  const classList = classNames(styles.icon, {
    [styles[size]]: size,
  })
  return <img alt="" className={classList} src={src}></img>
}

Icon.propTypes = {
  src: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['xxs', 'xs', 'sm', 'smd', 'md', 'lg', 'xl', 'xxxl']),
}
