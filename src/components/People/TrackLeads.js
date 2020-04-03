import React from 'react'
import '../all.sass'
import PeopleBlock from './PeopleBlock'
import SectionTitle from '../SectionTitle/SectionTitle'
import SectionDescription from '../SectionDescription/SectionDescription'
import Section from '../Section/Section'
import { StaticQuery, graphql } from 'gatsby'
import getSingleHashtag from '../getSingleHashtag'

const TrackLeadsWithData = ({ data, tracklists, description }) => {
  // filter out leads
  const leads = data.filter(p => p.label === 'track-lead')
  if (leads.length === 0) return null

  // try to find hashtags for the leads from tracklists
  const leadsWithHashtags = leads.map(lead => {
    const searchedTrack = tracklists.find(track => {
      return track.title === lead.tracklist
    })
    return {
      ...lead,
      hashtag: searchedTrack
        ? getSingleHashtag(searchedTrack.hashtag)
        : undefined,
    }
  })

  return (
    <Section>
      <SectionTitle title="Track leads" />
      <SectionDescription text={description} />
      <div className="columns is-multiline">
        <PeopleBlock data={leadsWithHashtags} />
      </div>
    </Section>
  )
}

const TrackLeads = ({ description }) => (
  <StaticQuery
    query={graphql`
      query TrackLeads {
        allMarkdownRemark(
          filter: { frontmatter: { templateKey: { eq: "person" } } }
        ) {
          edges {
            node {
              frontmatter {
                name
                surname
                role
                photo
                label
                tracklist
                about
                linkedin
              }
            }
          }
        }
        tracklists: allMarkdownRemark(
          filter: { frontmatter: { templateKey: { eq: "tracklists" } } }
        ) {
          edges {
            node {
              frontmatter {
                title
                hashtag
              }
            }
          }
        }
      }
    `}
    render={data => (
      <TrackLeadsWithData
        description={description}
        tracklists={data.tracklists.edges.map(({ node }) => node.frontmatter)}
        data={data.allMarkdownRemark.edges.map(({ node }) => node.frontmatter)}
      />
    )}
  />
)

export default TrackLeads
