import React from 'react'
import '../all.sass'
import SectionTitle from '../SectionTitle/SectionTitle'
import SectionDescription from '../SectionDescription/SectionDescription'
import Section from '../Section/Section'
import PeopleBlock from './PeopleBlock'
import PeopleData from './PeopleData'

const TrackMentorsWithData = ({ data, description }) => {
  if (data.length === 0) return null
  return (
    <Section>
      <SectionTitle title="Mentors" />
      <SectionDescription text={description} />
      <div className="columns is-multiline">
        <PeopleBlock data={data} />
      </div>
    </Section>
  )
}
const TrackMentors = ({ hashtag, description }) => (
  <PeopleData type="mentor" hashtag={hashtag}>
    <TrackMentorsWithData description={description} />
  </PeopleData>
)

export default TrackMentors
