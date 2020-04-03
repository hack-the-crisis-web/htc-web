import { graphql, StaticQuery } from 'gatsby'
import React from 'react'

const filterVisiblePersons = (data, type, tracklist = '') =>
  data.filter(person => {
    return (
      person.label === type &&
      (type !== 'mentor' || person.tracklist === tracklist)
    )
  })

const filterData = (data, type, tracklist) => {
  const people = data.allMarkdownRemark.edges.map(
    ({ node: { frontmatter } }) => ({
      ...frontmatter,
    })
  )
  console.log(tracklist)
  return filterVisiblePersons(people, type, tracklist)
}

const PeopleData = ({ type, tracklist, children }) => (
  <StaticQuery
    query={graphql`
      query PeopleBlock {
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
      }
    `}
    render={data =>
      React.cloneElement(children, {
        data: filterData(data, type, tracklist),
      })
    }
  />
)

export default PeopleData
