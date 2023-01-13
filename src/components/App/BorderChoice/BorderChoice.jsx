import React from "react";

// assets
import styles from './BorderChoice.module.scss'

const BorderChoice = (activeListItem) => {
  return (
    <div className={styles.borderChoice}>
      <div className={`${styles.choice} choice`}>
        <span>{activeListItem}</span>
        <img src='../../../assets/img/icons/icon-select.svg' alt='' />
      </div>
    </div>
  )
}

export default BorderChoice;