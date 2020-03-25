import { StaticQuery } from 'gatsby'
import React from 'react'

export const filterVisiblePersons = (data, type, hashtag = '') => {
  return data.filter(({ label, tracklist }) => {
    if (label === type) {
      if (type === 'mentor') {
        return hashtag.includes(tracklist.toLowerCase())
      }
      return true
    }
    return false
  })
}

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
