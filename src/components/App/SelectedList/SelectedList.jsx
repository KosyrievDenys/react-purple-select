import React from "react";
import styles from './SelectedList.module.scss'

const SelectedList = (arrList) => {
  return (
      <ul className='selected-list external-list'>
    arrList.map((el, id) => {
        <li className='selected-item external-item'>
          <div className='selected-block'>
            <div className='selected-folder'>
              <img className='selected-icon' src='../../../assets/img/icons/icon-select.svg' alt='' />
              <img className='icon-second' src='../../../assets/img/icons/folder.svg' alt='' />
              <span className='selected-text'>el[id][0]</span>
            </div>
            <img className='selected-icon-check' src='../../../assets/img/icons/pink-check-mark.svg' alt='' />
          </div>

        </li>
    })
      </ul>
  )
}

export default SelectedList;