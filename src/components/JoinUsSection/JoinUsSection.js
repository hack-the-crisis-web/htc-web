import React from 'react'
import classNames from 'classnames'

import styles from './JoinUsSection.module.scss'

import Section from '../Section/Section'
import SectionTitle from '../SectionTitle/SectionTitle'
import SectionDescription from '../SectionDescription/SectionDescription'
import Button from '../Button/Button'
import JoinUsImage from '../../../static/img/join-us-section.png'

const JoinUsSection = () => (
  <div className={classNames('has-background-danger', styles.joinUsWrapper)}>
    <Section>
      <SectionTitle title="Every hand counts" />
      <SectionDescription text="Organizing a fully online global hackathon takes a lot! We need both volunteers and mentors to help make this happen" />
      <div className={classNames(styles.buttonWrapper)}>
        <Button href="/join">Join us</Button>
        <Button
          external
          href="https://forms.gle/zD5L9frVyf5Pzr956"
          rel="noopener"
          target="_blank"
        >
          Join as a mentor
        </Button>
      </div>
    </Section>
    <img src={JoinUsImage} alt="Join us" />
  </div>
)

export default JoinUsSection
