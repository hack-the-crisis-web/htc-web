import React from 'react'
import '../all.sass'
import PeopleBlock from './PeopleBlock'
import SectionTitle from '../SectionTitle/SectionTitle'
import SectionDescription from '../SectionDescription/SectionDescription'
import Section from '../Section/Section'
import PeopleData from './PeopleData'

const TrackLeadsWithData = ({ data, description }) => {
  if (data.length === 0) return null
  return (
    <Section>
      <SectionTitle title="Track leads" />
      <SectionDescription text={description} />
      <div className="columns is-multiline">
        <PeopleBlock data={data} />
      </div>
    </Section>
  )
}

const TrackLeads = ({ description }) => (
  <PeopleData type="track-lead">
    <TrackLeadsWithData description={description} />
  </PeopleData>
)

export default TrackLeads
