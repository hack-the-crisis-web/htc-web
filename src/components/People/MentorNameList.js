import React from 'react'
import PropTypes from 'prop-types'
import Section from '../Section/Section'
import avatar from '../../img/placeholders/avatar.png'

import styles from './PersonCard.module.scss'

const MentorNameList = ({ tracklistTitle, mentors }) => {
  return (
    <Section>
      <p className={styles.mentorListTitle}>We have planty more fish.</p>
      <ul className={styles.mentorList}>
        {mentors.map((mentor, index) =>
          mentor[1] !== '' &&
          mentor[3] !== '' &&
          mentor[4] !== '' &&
          mentor[4] === tracklistTitle ? (
            <li className={styles.mentorData} key={index}>
              <img src={avatar} className={styles.mentorImage} alt="avatar" />
              <div>
                <p className={styles.mentorName}>{mentor[1].toLowerCase()}</p>
                <p className={styles.mentorRole}>{mentor[3]}</p>
              </div>
            </li>
          ) : null
        )}
      </ul>
    </Section>
  )
}

MentorNameList.propTypes = {
  tracklistTitle: PropTypes.string.isRequired,
}

export default MentorNameList
