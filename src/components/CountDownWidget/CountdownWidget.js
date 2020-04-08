import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import styles from './CountdownWidget.module.scss'
import clockIcon from '../../img/clock.svg'

const calculateTimeToEvent = eventTime => {
  const now = Date.now()
  const eventDate = Date.parse(eventTime)
  return eventDate - now
}

class CountDownWidget extends React.Component {
  state = { timeToEvent: 0 }
  ticker = null

  setTime() {
    this.setState({ timeToEvent: calculateTimeToEvent(this.props.eventTime) })
  }

  componentDidMount() {
    this.setTime()
    this.ticker = setInterval(60000, this.setTime)
  }

  componenetWillUnmount() {
    clearInterval(this.ticker)
  }

  render() {
    const hourLengthInMS = 60 * 60 * 1000
    const dayLengthInMS = 24 * hourLengthInMS
    const days = Math.floor(this.state.timeToEvent / dayLengthInMS)
    const hours = Math.floor(
      (this.state.timeToEvent - days * dayLengthInMS) / hourLengthInMS
    )
    const totalHours = Math.floor(this.state.timeToEvent / hourLengthInMS)
    const totalMinutes = Math.floor(
      (this.state.timeToEvent / hourLengthInMS) * 60
    )

    const shouldShowWidget =
      (days > 0 && hours >= 0) || (days === 0 && hours >= 0 && totalMinutes > 0)
    // const dayString =
    //   days !== 0 ? `${days} ${days !== 1 ? 'days' : 'day'}` : '< 1 day'
    // const hourString =
    //   days === 0 ? `${hours} ${hours !== 1 ? 'hours' : 'hour'}` : ''

    const totalHoursString = `${totalHours} ${
      totalHours !== 1 ? 'hours' : 'hour'
    }`
    const totalMinutesString = `${totalMinutes} ${
      totalMinutes !== 1 ? 'minutes' : 'minute'
    }`

    const toWhatString = 'till hackathon'

    return (
      <div
        className={classnames(
          'navbar-item',
          styles.widget,
          this.props.className
        )}
      >
        {shouldShowWidget && (
          <>
            <img className={styles.icon} alt="time to event" src={clockIcon} />
            <span className={styles.text}>{`${
              totalHours === 0 ? totalMinutesString : totalHoursString
            } ${toWhatString}`}</span>
          </>
        )}
      </div>
    )
  }
}

CountDownWidget.propTypes = {
  eventTime: PropTypes.string.isRequired,
  className: PropTypes.string,
}

export default CountDownWidget
