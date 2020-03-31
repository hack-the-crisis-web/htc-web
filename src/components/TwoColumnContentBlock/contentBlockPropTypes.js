import PropTypes from 'prop-types'

const contentBlockPropTypes = {
  title: PropTypes.string,
  textContent: PropTypes.string,
  image: PropTypes.shape({ id: PropTypes.string, publicURL: PropTypes.string }),
  ctaText: PropTypes.string,
  ctaLink: PropTypes.string,
}

export default contentBlockPropTypes
