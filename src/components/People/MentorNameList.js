import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

const MentorNameList = ({ tracklistTitle }) => {
  const [mentors, setMentors] = useState([])

  useEffect(() => {
    fetch(
      '/.netlify/functions/hello?tracklist=' +
        encodeURIComponent(tracklistTitle)
    ).then(response => {
      console.info(response)
      response.json()
    })
  }, [])

  return (
    <div>
      <ul>
        {mentors.map(m => (
          <li key={m.name}>{m.name}</li>
        ))}
      </ul>
    </div>
  )
}

MentorNameList.propTypes = {
  tracklistTitle: PropTypes.string.isRequired,
}

export default MentorNameList
