import { graphql, StaticQuery } from 'gatsby'
import React from 'react'
import getSingleHashtag from '../getSingleHashtag'

const filterVisiblePersons = (data, type, tracklist = '', hashtag) =>
  data
    .filter(person => {
      return (
        person.label === type &&
        (type !== 'mentor' || person.tracklist === tracklist)
      )
    })
    .map(item => ({
      ...item,
      hashtag: hashtag ? getSingleHashtag(hashtag) : undefined,
    }))

const filterData = (data, type, tracklist, hashtag) => {
  const people = data.allMarkdownRemark.edges.map(
    ({ node: { frontmatter } }) => ({
      ...frontmatter,
    })
  )
  return filterVisiblePersons(people, type, tracklist, hashtag)
}

const PeopleData = ({ type, tracklist, hashtag, children }) => (
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
                photo {
                  childImageSharp {
                    fluid {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
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
        data: filterData(data, type, tracklist, hashtag),
      })
    }
  />
)

export default PeopleData
