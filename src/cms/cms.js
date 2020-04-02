import CMS from 'netlify-cms-app'
import React from 'react'

import uuid from 'uuid/v4'
import uploadcare from 'netlify-cms-media-library-uploadcare'
import cloudinary from 'netlify-cms-media-library-cloudinary'

CMS.registerMediaLibrary(uploadcare)
CMS.registerMediaLibrary(cloudinary)

/**
 * Create the control widget, this will add a form element to the cms UI
 */

class IdControl extends React.Component {
  getInitialState = () => ({})

  componentDidMount = () => {
    if (!this.props.value) {
      this.props.onChange(uuid())
    }
  }

  handleChange = () => {
    this.props.onChange(uuid())
  }

  render() {
    return <p>{this.props.value}</p>
  }
}

class IdPreview extends React.Component {
  getInitialState = () => ({})

  componentDidMount = () => {
    if (!this.props.value) {
      this.props.onChange(uuid())
    }
  }

  handleChange = () => {
    this.props.onChange(uuid())
  }

  render() {
    return <p>ID: {this.props.value}</p>
  }
}

CMS.registerWidget('id', IdControl, IdPreview)
