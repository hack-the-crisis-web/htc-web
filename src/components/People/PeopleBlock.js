import React from 'react'
import { StaticQuery } from 'gatsby'

import '../all.sass'
import PersonCard from './PersonCard'

const PeopleBlock = ({ data, type }) => (
  <>
    {data.map(
      ({
        node: {
          frontmatter: { name, surname, role, photo, label, tracklist },
        },
        index,
      }) => (
        <>
          {label === type && (
            <PersonCard
              name={name}
              photo={photo}
              surname={surname}
              role={role}
              tracklist={tracklist}
              label={label}
              key={index}
            />
          )}
        </>
      )
    )}
  </>
)

export default props => (
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
    render={data => (
      <PeopleBlock data={data.allMarkdownRemark.edges} {...props} />
    )}
  />
)
