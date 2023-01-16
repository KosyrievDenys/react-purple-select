import React, { useEffect, useState } from "react";

// components
import { InternalLists } from "./InternalLists/InternalLists";

// assets
import styles from './SelectedList.module.scss'
import select from '../../../../assets/images/icons/icon-select.svg';
import folder from '../../../../assets/images/icons/folder.svg';
import pinkCheckMark from '../../../../assets/images/icons/pink-check-mark.svg';

const arrLists = [['Books', ['Books2','Scarce books', 'Kids books']],
  // ['Cars', ['Cars2','Scarce books', 'Kids books']],
  // ['Old books', ['Old books2','Scarce books', 'Kids books', 'Darts']],
  ['Red', ['Red2','Scarce books', 'Kids books'], ['Red3','Scarce books-2', 'Kids books-2']]];
// let

export const SelectedList = () => {

  const getIndex = (index) => {

  }

  return (
    <ul className='selected-list external-list'>
      {arrLists.map((arr, index) => (
        <li
          key={`${arr[0]}`}
          className='selected-item external-item'>
          <div className='selected-block'>
            <div className='selected-folder'>
              <img
                className='selected-icon'
                src={select} alt=''
              onClick={getIndex(index)}
              />
              <img className='icon-second' src={folder} alt='' />
              <span className='selected-text'>{arr[0]}</span>
            </div>
            <img className='selected-icon-check' src={pinkCheckMark} alt='' />
          </div>
          <InternalLists
            arrList1={arr}/>
        </li>
      ))}
    </ul>
  )
}

