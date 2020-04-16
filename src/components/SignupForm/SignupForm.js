import React from 'react'
import Button from '../Button/Button'
import styles from './SignupForm.module.scss'
import classNames from 'classnames'

const SignupForm = ({ placeholder, buttonText, disabled }) => {
  return (
    <form className={styles.form}>
      <input
        className={classNames('input', styles.input)}
        type="email"
        placeholder={placeholder}
        required
      />
      <Button disabled={disabled}>{buttonText}</Button>
    </form>
  )
}

export default SignupForm
