import React from 'react'
import classnames from 'classnames'
import Section from '../Section/Section'
import SectionTitle from '../SectionTitle/SectionTitle'
import { HTMLContent } from '../Content'

export const HTMLContentSection = ({ title, content }) => (
  <Section>
    <div className={classnames('container has-text-primary')}>
      <SectionTitle title={title} />
      <HTMLContent className="content" content={content} />
    </div>
  </Section>
)

export default HTMLContentSection
