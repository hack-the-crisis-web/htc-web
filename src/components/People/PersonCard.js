import React from 'react'
import '../all.sass'
import styles from './PersonCard.module.scss'

const selectClassname = type => {
  switch (type) {
    case 'tracklead':
      return styles.tracklead
    case 'mentor':
      return styles.mentor
    default:
      return styles.ourpeople
  }
}

const PersonCard = ({ person, type }) => {
  const { name, role } = person

  return (
    <div className={'column is-4'}>
      <div className={'tile is-parent '}>
        <div
          className={`tile is-child box notification has-text-white ${
            styles.persontile
          } ${selectClassname(type)}`}
        >
          <div className={`${styles.tiletext}`}>
            <div>
              <p className="title">{name}</p>
              <p className="subtitle ">{role}</p>
            </div>
            <p className="subtitle">#{type}</p>
          </div>
          <img
            src="https://www.nobackgroundimages.com/wp-content/uploads/2014/11/Image-02-300x239.jpg"
            height="30px"
            className={`${styles.personimage}`}
          />
        </div>
      </div>
    </div>
  )
}

export default PersonCard
