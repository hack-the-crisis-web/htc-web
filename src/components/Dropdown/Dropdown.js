import React from 'react'
import classNames from 'classnames'
import styles from './Dropdown.module.scss'
import WinnerHeader from '../WinnerHeader/WinnerHeader'

const Dropdown = ({ title, isOpen, children, onClick, img }) => {
  return (
    <div className={styles.dropdownWrapper}>
      <div
        tabIndex={0}
        role="button"
        onClick={onClick}
        onKeyPress={onClick}
        className={styles.dropdown}
      >
        <WinnerHeader withoutMargin title={title} img={img} />
        <div
          className={classNames(styles.arrow, {
            [styles.isOpen]: isOpen,
          })}
        />
      </div>
      {isOpen && <div>{children}</div>}
    </div>
  )
}

export default Dropdown
