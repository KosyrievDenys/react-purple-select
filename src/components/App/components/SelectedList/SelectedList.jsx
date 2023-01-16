import React, { useEffect, useState } from "react";

// components
import { InternalLists } from "./InternalLists/InternalLists";

// assets
import styles from './SelectedList.module.scss'
import select from '../../../../assets/images/icons/icon-select.svg';
import folder from '../../../../assets/images/icons/folder.svg';
import pinkCheckMark from '../../../../assets/images/icons/pink-check-mark.svg';

// let clear false;
export const SelectedList = (
  {
    books,
    getTheSelectedValue,
    setBooks
  }) => {


  return (
    <ul className='selected-list external-list'>
      {books.map((book, index) => (
        <InternalLists
          index={index}
          key={index}
          book={book}
          books={books}
          getTheSelectedValue={getTheSelectedValue}
          setBooks={setBooks}
        />
      ))}
    </ul>
  )
}

