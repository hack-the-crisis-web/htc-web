import React from 'react'
import '../all.sass'
import styles from './PersonCard.module.scss'

const selectClassname = label => {
  switch (label) {
    case 'track-lead':
      return styles.tracklead
    case 'mentor':
      return styles.mentor
    default:
      return styles.ourpeople
  }
}

const PersonCard = ({ name, photo, surname, role, tracklist, label }) => (
  <div className={'column is-4'}>
    <div className={'tile is-parent '}>
      <div
        className={`tile is-child box notification has-text-white hover-effect ${
          styles.persontile
        } ${selectClassname(label)}`}
      >
        <div className={`${styles.tiletext}`}>
          <div>
            <p className={`title ${styles.name}`}>{`${name} ${surname}`}</p>
            <p className={`subtitle ${styles.description}`}>{role}</p>
          </div>
          {!!tracklist && (
            <p className={`subtitle ${styles.description}`}>
              #{tracklist.toLowerCase()}
            </p>
          )}
        </div>
        {!!photo && (
          <img
            src={photo}
            alt={`${name} ${surname}`}
            className={`${styles.personimage}`}
          />
        )}
      </div>
    </div>
  </div>
)

export default PersonCard
