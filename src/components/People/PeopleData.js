import { graphql, StaticQuery } from 'gatsby'
import React from 'react'

const filterVisiblePersons = (data, type, hashtag = '') =>
  data.filter(
    ({ label, tracklist }) =>
      label === type &&
      (type !== 'mentor' || hashtag.includes(tracklist.toLowerCase()))
  )

const filterData = (data, type, hashtag) => {
  const people = data.allMarkdownRemark.edges.map(
    ({ node: { frontmatter } }) => ({
      ...frontmatter,
    })
  )
  return filterVisiblePersons(people, type, hashtag)
}

const PeopleData = ({ type, hashtag, children }) => (
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
              }
            }
          }
        }
      }
    `}
    render={data =>
      React.cloneElement(children, {
        data: filterData(data, type, hashtag),
      })
    }
  />
)

export default PeopleData
