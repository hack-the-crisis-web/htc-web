import React from 'react'

import Layout from '../components/Layout'
import NewsSection from '../components/NewsSection/NewsSection'

export default class NewsPage extends React.Component {
  render() {
    return (
      <Layout>
        <NewsSection
          title="The Daily Splash"
          description="Global tech community leads the movement gathering over 53 countries, over 5000 ideas and hundreds of professionals over the world. We fight against coronavirus. We work on solutions. We do it to change the world."
        >
          Access to media kits in{' '}
          <a
            href="https://docs.google.com/document/d/18CVv9BYzZvyzoDo-VwDI2wo0znWzrVLq8_TpUpP3LFQ/edit"
            target="_blank"
          >
            English
          </a>
          ,{' '}
          <a
            href="https://docs.google.com/document/d/1kkqSUkIX1_sZkgMnzRRtloeA9TH5VsbdbqUJV6vECjA/edit"
            target="_blank"
          >
            French
          </a>
          ,{' '}
          <a
            href="https://docs.google.com/document/d/1hi6OoJFNEEh1a5yqawIV_ZjtsWoaQmMWcWIv_aqVRT8/edit"
            target="_blank"
          >
            German
          </a>
          ,{' '}
          <a
            href="https://docs.google.com/document/d/1mK6glnkisoxMYgB7HA0pkjHkN1an0p9pVyPd6zJOxww/edit"
            target="_blank"
          >
            Russian
          </a>{' '}
          or{' '}
          <a
            href="https://docs.google.com/document/d/1gNe35aU9UV8vJGZJJ_G_luiCBP_MQXosKizdr7CV73c/edit"
            target="_blank"
          >
            Spanish
          </a>
        </NewsSection>
      </Layout>
    )
  }
}
