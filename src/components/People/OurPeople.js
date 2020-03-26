import React from 'react'
import '../all.sass'
import PeopleBlock from './PeopleBlock'
import SectionTitle from '../SectionTitle/SectionTitle'
import SectionDescription from '../SectionDescription/SectionDescription'
import Section from '../Section/Section'
import PeopleData from './PeopleData'

const OurPeopleWithData = ({ data, description, title }) => {
  if (data.length === 0) return null
  return (
    <Section>
      <SectionTitle title={title} />
      {description && <SectionDescription text={description} />}
      <div className="columns is-multiline">
        <PeopleBlock data={data} />
      </div>
    </Section>
  )
}

const OurPeople = ({ description, title }) => (
  <PeopleData type="our-people">
    <OurPeopleWithData description={description} title={title} />
  </PeopleData>
)

export default OurPeople
