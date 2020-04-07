import React from 'react'
import classnames from 'classnames'
import { Link } from 'gatsby'
import Button from '../Button/Button'
import styles from './BlogPostCard.module.scss'

const BlogPostCard = ({ link, image, title, date, intro }) => (
  <Link className={classnames(styles.card, 'hover-effect')} to={link}>
    {image && (
      <div
        className={styles.image}
        style={
          image
            ? {
                // very ugly, i know, but need it for now
                backgroundImage: `url('${image.replace(
                  '../../../static/',
                  '/'
                )}')`,
              }
            : {}
        }
      />
    )}
    {!!date && <p className={styles.date}>{date}</p>}
    {!!title && <p className={styles.title}>{title}</p>}
    {!!intro && <p className={styles.content}>{intro}</p>}
    <div className={styles.buttonWrapper}>
      <Button>Read more</Button>
    </div>
  </Link>
)

export default BlogPostCard
