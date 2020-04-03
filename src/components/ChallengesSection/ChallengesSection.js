import React from 'react'
import classnames from 'classnames'
import '../all.sass'
import Section from '../Section/Section'
import SectionTitle from '../SectionTitle/SectionTitle'
import SectionDescription from '../SectionDescription/SectionDescription'
import ChallengeCard from './ChallengeCard'
import styles from './ChallengesSection.module.scss'

const ChallengesSection = ({
  challengesTitle,
  challengesDescription,
  challenges,
}) => {
  const hasChallenges = challenges != null && challenges.length > 0
  if (!challengesTitle && !challengesDescription && !hasChallenges) {
    return null
  }
  return (
    <div id="challenges" className={styles.container}>
      <Section>
        <div className="container">
          {challengesTitle && <SectionTitle title={challengesTitle} />}
          {challengesDescription && (
            <SectionDescription text={challengesDescription} />
          )}
          {hasChallenges && (
            <div className="columns is-multiline">
              {challenges.map(
                (
                  { title, description, logo, logoTitle, linkTitle, linkUrl },
                  index
                ) => (
                  <div
                    key={index}
                    className={classnames(
                      'column is-full-mobile is-full-tablet is-half-desktop'
                    )}
                  >
                    <ChallengeCard
                      title={title}
                      description={description}
                      logo={logo}
                      logoTitle={logoTitle}
                      linkTitle={linkTitle}
                      linkUrl={linkUrl}
                    />
                  </div>
                )
              )}
            </div>
          )}
        </div>
      </Section>
    </div>
  )
}

export default ChallengesSection
