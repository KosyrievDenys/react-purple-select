import React, { useState } from "react";

// assets
import styles from './InternalLists.module.scss';
import select from "../../../../../assets/images/icons/icon-select.svg";
import folder from "../../../../../assets/images/icons/folder.svg";
import pinkCheckMark from "../../../../../assets/images/icons/pink-check-mark.svg";

export const InternalLists = ({ arrList1 }) => {

const [activeList, setActiveList] = useState(false);
  console.log()
  return (
    activeList && <ul className={styles.internalLists}>
      {arrList1[1].map((arr) => (
        <li
          key={arr}
          className={`selected-item ${styles.selectedItem}`}>
          <div className='selected-block'>
            <div className='selected-folder'>
              <img className='selected-icon' src={select} alt='' />
              <img className='icon-second' src={folder} alt='' />
              <span>{`${arrList1[0]}/`}</span>
              <span className='selected-text'>{arr}</span>
            </div>
            <img className='selected-icon-check' src={pinkCheckMark} alt='' />
          </div>
        </li>
      ))}
    </ul>
  )
}