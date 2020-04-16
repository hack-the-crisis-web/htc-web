import React from 'react'

import Layout from '../components/Layout'
import NewsSection from '../components/NewsSection/NewsSection'

export default class NewsPage extends React.Component {
  render() {
    return (
      <Layout>
        <NewsSection />
      </Layout>
    )
  }
}
