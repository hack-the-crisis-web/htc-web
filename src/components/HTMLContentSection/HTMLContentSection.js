import React from 'react'
import classnames from 'classnames'
import Section from '../Section/Section'
import { HTMLContent } from '../Content'

export const HTMLContentSection = ({ content }) => (
  <Section>
    <div className={classnames('container has-text-primary')}>
      <HTMLContent className="content" content={content} />
    </div>
  </Section>
)

export default HTMLContentSection
