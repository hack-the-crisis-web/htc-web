import React from 'react'
import Layout from '../components/Layout'
import AlternatingContent from '../components/AlternatingContent'

const NotFoundPage = () => (
  <Layout>
    <AlternatingContent
      contentItems={[{ title: 'Page not found' }]}
    ></AlternatingContent>
  </Layout>
)

export default NotFoundPage
