import React from 'react'
import classNames from 'classnames'

import styles from './NewsletterSection.module.scss'

import Section from '../Section/Section'
import SectionTitle from '../SectionTitle/SectionTitle'
import SectionDescription from '../SectionDescription/SectionDescription'
import SignupForm from '../SignupForm/SignupForm'

const NewsletterSection = ({ newsletterContent }) => {
  return (
    <div className={classNames(styles.sectionWrapper, 'has-background-danger')}>
      <Section>
        <SectionTitle title={newsletterContent.title} />
        <SectionDescription text={newsletterContent.textContent} />

        <SignupForm
          placeholder={newsletterContent.inputPlaceholder}
          buttonText={newsletterContent.buttonText}
          disabled={newsletterContent.buttonsDisabled}
        />
      </Section>
      {newsletterContent && newsletterContent.image && (
        <img src={newsletterContent.image.publicURL} alt="" />
      )}
    </div>
  )
}

export default NewsletterSection
