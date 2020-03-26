import React from 'react'
import '../all.sass'
import PeopleBlock from './PeopleBlock'
import SectionTitle from '../SectionTitle/SectionTitle'
import SectionDescription from '../SectionDescription/SectionDescription'
import Section from '../Section/Section'
import PeopleData from './PeopleData'

const OurPeopleWithData = ({ data, description, ourPeopleTitle }) => {
  if (data.length === 0) return null
  return (
    <Section>
      <SectionTitle title={ourPeopleTitle} />
      {description && <SectionDescription text={description} />}
      <div className="columns is-multiline">
        <PeopleBlock data={data} />
      </div>
    </Section>
  )
}

const OurPeople = ({ description }) => (
  <PeopleData type="our-people">
    <OurPeopleWithData description={description} />
  </PeopleData>
)

export default OurPeople
