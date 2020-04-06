import React from 'react'
import PropTypes from 'prop-types'
import Section from '../Section/Section'

import styles from './PersonCard.module.scss'

const MentorNameList = ({ tracklistTitle, mentors }) => {
  if (mentors.length === 0) return null
  const filteredMentors = mentors.filter(
    mentor =>
      mentor[1] !== '' &&
      mentor[3] !== '' &&
      mentor[4] !== '' &&
      mentor[4] === tracklistTitle
  )
  if (filteredMentors.length === 0) return null

  return (
    <Section>
      <p className={styles.mentorListTitle}>We have planty more fish.</p>
      <ul className={styles.mentorList}>
        {filteredMentors.map((mentor, index) => (
          <li className={styles.mentorData} key={index}>
            <p className={styles.mentorName}>{mentor[1].toLowerCase()}</p>
            <p className={styles.mentorRole}>{mentor[3]}</p>
          </li>
        ))}
      </ul>
    </Section>
  )
}

MentorNameList.propTypes = {
  tracklistTitle: PropTypes.string.isRequired,
}

export default MentorNameList
