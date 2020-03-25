import React from 'react'
import '../all.sass'
import PersonCard from './PersonCard'

const PeopleBlock = ({ data }) =>
  data.map(({ name, surname, role, photo, label, tracklist }, index) => (
    <PersonCard
      key={index}
      name={name}
      photo={photo}
      surname={surname}
      role={role}
      tracklist={tracklist}
      label={label}
    />
  ))

export default PeopleBlock
