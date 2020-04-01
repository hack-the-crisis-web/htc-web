import PropTypes from 'prop-types'

const sectionItemPropTypes = {
  title: PropTypes.string,
  textContent: PropTypes.string,
  image: PropTypes.shape({ id: PropTypes.string, publicURL: PropTypes.string }),
  buttons: PropTypes.arrayOf(
    PropTypes.shape({ ctaText: PropTypes.string, ctaLink: PropTypes.string })
  ),
}

export default sectionItemPropTypes
