import React, { useEffect, useState } from "react";

// components
import { InternalLists2 } from "./InternalLists2/InternalLists2";

// assets
import select from "../../../../../assets/images/icons/icon-select.svg";
import folder from "../../../../../assets/images/icons/folder.svg";
import pinkCheckMark from "../../../../../assets/images/icons/pink-check-mark.svg";

export const InternalLists = (
  {
    book,
    getTheSelectedValue,
    setBooks,
    books,
    index
  }) => {
  const [openListValues, setOpenListValues] = useState(false);
  const [activeValue, setActiveValue] = useState(false);

  const openList = () => {
    setOpenListValues(!openListValues)
  }


  return (
    <li
      className='selected-item external-item'>
      <div className='selected-block'>
        <div className='selected-folder'>
          <img
            className='selected-icon'
            src={select} alt=''
            onClick={() => openList()}
          />
          <img className='icon-second' src={folder} alt='' />
          <span
            className='selected-text'
            onClick={() => {
              console.log(books)
              getTheSelectedValue(book.title);
              const newBook = books.map(book=> {
                return {...book, selected:false}
              })
              newBook[index].selected = true;
              setBooks([...newBook])
            }
            }
          >
                {book.title}
              </span>
        </div>
        {book.selected && <img className='selected-icon-check' src={pinkCheckMark} alt='' />}
      </div>
      {
        openListValues && <ul>
          {book.children.map((children, index) => (
            <InternalLists2
              key={index}
              activevalue={activeValue}
              getTheSelectedValue={getTheSelectedValue}
              children={children}
              setActiveValue={setActiveValue}
              setBooks={setBooks}
              index={index}
              books={books}
            />
          ))}
        </ul>
      }
    </li>
  )
}