import React from 'react'
import '../all.sass'
import PersonCard from './PersonCard'

const PeopleBlock = ({ data }) =>
  data.map(
    (
      {
        name,
        surname,
        role,
        photo,
        label,
        tracklist,
        hashtag,
        about,
        linkedin,
      },
      index
    ) => (
      <PersonCard
        key={index}
        name={name}
        photo={photo}
        surname={surname}
        role={role}
        tracklist={tracklist}
        hashtag={hashtag}
        label={label}
        about={about}
        linkedin={linkedin}
      />
    )
  )

export default PeopleBlock
