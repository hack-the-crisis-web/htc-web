import React from 'react'
import Img from 'gatsby-image'
import classnames from 'classnames'
import { Link } from 'gatsby'
import Button from '../Button/Button'
import styles from './BlogPostCard.module.scss'

const BlogPostCard = ({ link, image, title, date, intro, author }) => (
  <Link className={classnames(styles.card, 'hover-effect')} to={link}>
    {image && image.childImageSharp && (
      <Img
        className={styles.image}
        imgStyle={{ objectFit: 'cover' }}
        fluid={image.childImageSharp.fluid}
        alt={`${title} `}
      />
    )}
    {!!date && <p className={styles.date}>{date}</p>}
    {!!title && <p className={styles.title}>{title}</p>}
    {!!author && <p className={styles.author}>{author}</p>}
    {!!intro && <p className={styles.content}>{intro}</p>}
    <div className={styles.buttonWrapper}>
      <Button>Read more</Button>
    </div>
  </Link>
)

export default BlogPostCard
