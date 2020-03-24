import React from 'react'
import '../all.sass'
import styles from './TrackLeads.module.scss'
import PersonCard from './PersonCard'

const people = [
  { name: 'Jim', type: 'tracklead', role: 'Director' },
  { name: 'Jim', type: 'tracklead', role: 'Director' },
  { name: 'Jim', type: 'tracklead', role: 'Director' },
  { name: 'Jim', type: 'tracklead', role: 'Director' },
  { name: 'Jim', type: 'tracklead', role: 'Director' },
]

const TrackLeads = () => (
  <section className="section">
    <div className="container">
      <div className="columns">
        <div className="column is-10 is-offset-1">
          <h3 className="title">Track leads</h3>
          <p className={`${styles.description}`}>
            Mxime placeat facere possimus, omnis voluptas assumenda est, omnis
            dolor repellendus. Mxime placeat facere possimus, omnis voluptas
            assumenda est, omnis dolor repellendus.
          </p>
          <div className="columns is-multiline">
            {people.map(person => (
              <PersonCard person={person} type="tracklead" />
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default TrackLeads
