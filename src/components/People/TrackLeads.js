import React from 'react'
import '../all.sass'
import PeopleBlock from './PeopleBlock'
import SectionTitle from '../SectionTitle/SectionTitle'
import SectionDescription from '../SectionDescription/SectionDescription'
import Section from '../Section/Section'

const TrackLeads = ({ description }) => (
  <Section>
    <SectionTitle title="Track leads" />
    <SectionDescription text={description} />
    <div className="columns is-multiline">
      <PeopleBlock type="track-lead" />
    </div>
  </Section>
)

export default TrackLeads
