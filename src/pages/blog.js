import React from 'react'

import Layout from '../components/Layout'
import BlogRoll from '../components/BlogRoll/BlogRoll'

export default class NewsPage extends React.Component {
  render() {
    return (
      <Layout>
        <BlogRoll />
      </Layout>
    )
  }
}
