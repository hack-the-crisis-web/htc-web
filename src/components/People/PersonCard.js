import React from 'react'
import Img from 'gatsby-image'
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

const PersonCard = ({
  name,
  photo,
  surname,
  role,
  tracklist,
  hashtag,
  label,
  about,
  linkedin,
}) => {
  const isLink = label === 'mentor' && linkedin
  const Element = isLink ? 'a' : 'div'

  return (
    <Element className={'column is-4'} href={isLink ? linkedin : undefined}>
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
            {!!tracklist && !!hashtag && (
              <p className={`subtitle ${styles.description}`}>{hashtag}</p>
            )}
            {label === 'our-people' && !!about && (
              <a
                href={`mailto:${about}`}
                className={`subtitle ${styles.description}`}
              >
                {about}
              </a>
            )}
          </div>
          {photo && photo.childImageSharp && (
            <Img
              className={styles.personimage}
              style={{ position: 'absolute' }}
              imgStyle={{
                objectFit: 'contain',
                objectPosition: '100% 100%',
              }}
              fluid={photo.childImageSharp.fluid}
              alt={`${name} ${surname}`}
            />
          )}
        </div>
      </div>
    </Element>
  )
}

export default PersonCard
