import React from 'react'
import Section from '../Section/Section'
import SectionTitle from '../SectionTitle/SectionTitle'
import SectionDescription from '../SectionDescription/SectionDescription'
import BlogRoll from '../BlogRoll/BlogRoll'

const NewsSection = ({ title, description, blogPostLimit, children }) => {
  return (
    <div id="blogRoll" className="has-background-success">
      <Section>
        <div className={'container has-text-primary'}>
          <SectionTitle title={title} />
          <SectionDescription text={description}>{children}</SectionDescription>
          <BlogRoll limit={blogPostLimit} />
        </div>
      </Section>
    </div>
  )
}

export default NewsSection
