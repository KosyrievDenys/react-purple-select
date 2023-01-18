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
  // const [indexList, setIndexList] = useState(0);
  const [newBook2, setNewBook2] = useState([]);

  const openList = () => {
    setOpenListValues(!openListValues)
  }

  const activateValue = () => {
    const newBook = books.map(book => {
      return { ...book, selected: false }
    })
    newBook[index].selected = true;
    setBooks([...newBook])
  }

  // const newBook = books[index].children.map((book) => {
  //     console.log(book)
  // console.log(book.children)
  // console.log(book)
  // console.log(books[index].children)
  // console.log(book)
  // console.log(book)
  // console.log(book[index])
  // console.log(book.children)
  // const newChildren = book.children.map((children) => {
  // activeValue()
  // console.log(indexChild)
  // console.log(children)
  // children[indexChild].selected = true;

  // return { ...children }
  // })
  // console.log(newChildren)
  // console.log(newChildren, 'new')
  // newChildren[indexChild].selected = true;
  // setChildrenBook([...newChildren]);
  // return { ...book, selected: false }
  // setNewBook2([...newChildren]);
  // })
  // setBooks(newBook2 )
  // console.log(books);
  // console.log([...newBook]);
  // setBooks([...newBook])
  // newBook[index].selected = true;
  // return newBook;

  // console.log(books, 'nach')
  // console.log(newArr2,'kon')
  // useEffect(() => {
  //   console.log(books, 'nach')
  //   console.log(newBook2, 'kon')
  // }, [newBook2])

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
              getTheSelectedValue(book.title);
              activateValue()
              // setIndexList(index);
            }}>
                {book.title}
              </span>
        </div>
        {book.selected && <img className='selected-icon-check' src={pinkCheckMark} alt='' />}
      </div>
      {
        openListValues && <ul>
          {book.children.map((children, indexChild) => (
            <InternalLists2
              allChildren={book.children}
              key={indexChild}
              activevalue={activeValue}
              getTheSelectedValue={getTheSelectedValue}
              children={children}
              setActiveValue={setActiveValue}
              setBooks={setBooks}
              indexChild={indexChild}
              books={books}
              index={index}
              activateValue={activateValue}
              // activateValue2={activateValue2}
              bookTitle={book.title}
            />
          ))}
        </ul>
      }
    </li>
  )
}