import CMS from 'netlify-cms-app'
import cms from 'netlify-cms'

import uuid from 'uuid/v4'
import uploadcare from 'netlify-cms-media-library-uploadcare'
import cloudinary from 'netlify-cms-media-library-cloudinary'

CMS.registerMediaLibrary(uploadcare)
CMS.registerMediaLibrary(cloudinary)

/**
 * Create the control widget, this will add a form element to the cms UI
 */
const IdControl = window.createClass({
  getInitialState: function() {
    return {}
  },
  componentDidMount: function() {
    if (!this.props.value) {
      this.props.onChange(uuid())
    }
  },
  handleChange() {
    this.props.onChange(uuid())
  },
  render: function() {
    return window.h('p', null, `${this.props.value}`)
  },
})

const IdPreview = window.createClass({
  getInitialState: function() {
    return {}
  },
  render: function() {
    return window.h('p', null, `ID: ${this.props.value}`)
  },
})

cms.registerWidget('id', IdControl, IdPreview)
