import React from 'react'
import { Link, graphql, StaticQuery } from 'gatsby'
import '../../all.sass'
import Brand from '../../Brand/Brand'
import ContactInfo from '../ContactInfo/ContactInfo'
import FooterCategory from '../FooterCategory/FooterCategory'
import styles from './FooterMenuRow.module.scss'

const FooterMenuRow = ({ data }) => {
  console.log(data)
  return (
    <div className={`columns is-flex-touch is-desktop ${styles.menuRow}`}>
      <div className="column is-one-third-desktop is-one-quarter-widescreen">
        <Link to="/" className={styles.homeLink} title="Global Hack">
          <Brand />
        </Link>
        <ContactInfo />
      </div>
      <div className="column is-one-quarter-widescreen" />
      <div className="column is-one-third-desktop is-one-quarter-widescreen">
        <FooterCategory
          title="Global Hack"
          linkColumns={[
            [
              { title: 'Home', url: '/' },
              { title: 'Mentors', url: '/' },
              { title: 'Join us', url: '/' },
              { title: 'Agenda', url: '/' },
              { title: 'FAQ', url: '/' },
            ],
          ]}
        />
        <FooterCategory
          title="Generals"
          linkColumns={[
            [
              { title: 'Press kit', url: '/' },
              { title: 'Privacy Policy', url: '/' },
              { title: 'Terms of Service', url: '/' },
            ],
          ]}
        />
      </div>
      <div className="column is-one-third-desktop is-one-quarter-widescreen">
        <FooterCategory
          title="Tracks"
          linkColumns={[
            [
              { title: 'Relationships', url: '/' },
              { title: 'Media', url: '/' },
              { title: 'Health', url: '/' },
              { title: 'Economy', url: '/' },
            ],
            [
              { title: 'Education', url: '/' },
              { title: 'Environment', url: '/' },
              { title: 'Content', url: '/' },
              { title: 'Event', url: '/' },
            ],
            [
              { title: 'Music and Art', url: '/' },
              { title: 'Culture', url: '/' },
              { title: 'Content', url: '/' },
              { title: 'Event', url: '/' },
            ],
          ]}
        />
      </div>
    </div>
  )
}

export default () => (
  <StaticQuery
    query={graphql`
      query FooterMenuRow {
        allMarkdownRemark(
          filter: { frontmatter: { templateKey: { eq: "tracklists" } } }
        ) {
          edges {
            node {
              frontmatter {
                title
              }
            }
          }
        }
      }
    `}
    render={data => <FooterMenuRow data={data.allMarkdownRemark.edges} />}
  />
)
