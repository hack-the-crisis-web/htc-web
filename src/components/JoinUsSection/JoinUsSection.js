import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import styles from './JoinUsSection.module.scss'

import Section from '../Section/Section'
import SectionTitle from '../SectionTitle/SectionTitle'
import SectionDescription from '../SectionDescription/SectionDescription'
import JoinUsImage from '../../../static/img/join-us-section.png'

const JoinUsSection = ({ Buttons }) => (
  <div className={classNames('has-background-danger', styles.joinUsWrapper)}>
    <Section>
      <SectionTitle title="Every hand counts" />
      <SectionDescription text="Organizing a fully online global hackathon takes a lot! We need both volunteers and mentors to help make this happen" />
      <div className={classNames(styles.buttonWrapper)}>{Buttons}</div>
    </Section>
    <img src={JoinUsImage} alt="Join us" />
  </div>
)

JoinUsSection.propTypes = {
  Buttons: PropTypes.node,
}

export default JoinUsSection
