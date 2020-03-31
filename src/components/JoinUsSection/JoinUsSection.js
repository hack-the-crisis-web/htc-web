import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import styles from './JoinUsSection.module.scss'

import Section from '../Section/Section'
import Button from '../Button/Button'
import SectionTitle from '../SectionTitle/SectionTitle'
import SectionDescription from '../SectionDescription/SectionDescription'

const JoinUsSection = ({ sectionItems }) => {
  return sectionItems && sectionItems.length
    ? sectionItems.map((item, index) => {
        const reversed = index % 2 == 0
        return (
          <div
            key={index}
            className={classNames(styles.joinUsWrapper, {
              'has-background-danger': reversed,
              [styles.reversed]: !reversed,
            })}
          >
            {reversed && item.image && (
              <img src={item.image.publicURL} alt="" />
            )}
            <Section>
              {item.title && <SectionTitle title={item.title} />}
              {item.textContent && (
                <SectionDescription
                  text={item.textContent}
                  alignRight={!reversed}
                />
              )}
              {item.buttons && (
                <div className={classNames(styles.buttonWrapper)}>
                  {item.buttons.map((button, index) => (
                    <Button key={index} href={button.ctaLink}>
                      {button.ctaText}
                    </Button>
                  ))}
                </div>
              )}
            </Section>
            {!reversed && item.image && (
              <img src={item.image.publicURL} alt="" />
            )}
          </div>
        )
      })
    : null
}

JoinUsSection.propTypes = {
  Buttons: PropTypes.node,
}

export default JoinUsSection
