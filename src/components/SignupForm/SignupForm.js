import React, { useState } from 'react'
import addToMailchimp from 'gatsby-plugin-mailchimp'
import Button from '../Button/Button'
import styles from './SignupForm.module.scss'
import classNames from 'classnames'

const SignupForm = ({ placeholder, buttonText, disabled }) => {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)

  const onChangeHandler = e => {
    setEmail(e.target.value)
  }

  const handleSubmit = async e => {
    e.preventDefault()
    setLoading(true)
    try {
      const result = await addToMailchimp(email)
      if (result && result.msg) {
        setMessage(result.msg)
      }
    } catch (err) {
      setMessage('Something went wrong, try again later')
    }

    setLoading(false)
  }

  return (
    <>
      <form className={styles.form}>
        <input
          className={classNames('input', styles.input)}
          type="email"
          onChange={onChangeHandler}
          value={email}
          placeholder={placeholder}
          required
        />
        <Button
          isLoading={loading}
          type="submit"
          disabled={disabled || !email.trim() || loading}
          onClick={handleSubmit}
        >
          {buttonText}
        </Button>
      </form>
      {message && <p className={styles.infoMessage}>{message}</p>}
    </>
  )
}

export default SignupForm
