import React, { useEffect, useState } from "react";

// assets
import styles from './BorderChoice.module.scss'
import select from '../../../../assets/images/icons/icon-select.svg';


export const BorderChoice = (
  {
    openList,
    activeList,
    // activeItemList,
  }) => {

  return (
    <div className={`${styles.borderChoice} ${activeList ? styles.active : ''} `}
         onClick={() => openList()}>
      <div className={`${styles.choice} ${activeList ? styles.active : ''}`}>
        <span></span>
        <img src={select} alt='iconSelect' />
      </div>
    </div>
  )
}


