import React from 'react'
import '../all.sass'
import PeopleBlock from './PeopleBlock'
import SectionTitle from '../SectionTitle/SectionTitle'
import SectionDescription from '../SectionDescription/SectionDescription'

const TrackLeads = () => (
  <section className="section">
    <div className="container">
      <div className="columns">
        <div className="column is-10 is-offset-1">
          <SectionTitle title="Track leads" />
          <SectionDescription
            text="Mxime placeat facere possimus, omnis voluptas assumenda est, omnis
              dolor repellendus. Mxime placeat facere possimus, omnis voluptas
              assumenda est, omnis dolor repellendus."
          />
          <div className="columns is-multiline">
            <PeopleBlock type="track-lead" />
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default TrackLeads
