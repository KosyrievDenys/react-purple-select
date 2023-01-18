import React from "react";

//assets
import styles from './InternalLists2.module.scss'
import folder from "../../../../../../assets/images/icons/folder.svg";
import pinkCheckMark from "../../../../../../assets/images/icons/pink-check-mark.svg";

export const InternalLists2 = ({
                                 getTheSelectedValue,
                                 children,
                                 setActiveValue,
                                 setBooks,
                                 indexChild,
                                 books,
                                 activateValue,
                                 allChildren,
                                 // activateValue2,
  bookTitle,
  index,
                               }) => {

  // const [childrenBook, setChildrenBook] = useState([]);
  // console.log(books)


    // useEffect(() => {
    //   console.log(setBooks)
    // }, [setBooks])

  // console.log(activeLists2)
  // const activateValue2 = (index) => {
  //   const newBook = books.children.map(book => {
  //     console.log(book)
  //     return { ...book, selected: false }
  //   })
  //   newBook[index].selected = true;
  //   setBooks([...newBook])
  // }

  const activateValue2 = (indexChild) => {
     books.map((children) => {
      children.children.map((child) => {
       child.selected = false;
      })
    })
    books[index].children[indexChild].selected = true;
    activateValue();
  }
  // const activateValue2 = () => {
  //  const newBook = books.map(child=>{
  //    return {...child, selected:false}
  //  });
  //   newBook[index].children = newBook[index].children.map(child => {
  //     return { ...child, selected: false }
  //   });
  //   newBook[index].children[indexChild].selected = true;
  //   setBooks([...newBook]);
  //   activateValue();
  // }

  return (
    <li
      className={`selected-item ${styles.selectedItem}`}>
      <div className='selected-block'>
        <div className='selected-folder'>
          {/*<img className='selected-icon' src={select} alt='' />*/}
          <img className='icon-second' src={folder} alt='' />
          <span>{`${bookTitle}/`}</span>
          <span
            className='selected-text'
            onClick={() => {
              getTheSelectedValue(children.title);
              // console.log(children.selected, '999999')
              // setActiveLists2(true)
              activateValue2(indexChild);
              // console.log(children,'000')
              // const newChildren = books.children.map(child => {
              //   return { ...child, selected: false }
              // })
              // console.log(newChildren)
              // const newChildren =  {};
              //
              // })
              // console.log(newChildren)
              // newChildren[index].selected = true;
              // setBooks([...newChildren])
            }
            }
          >{children.title}</span>
        </div>
        {children.selected && <img className='selected-icon-check' src={pinkCheckMark} alt='' />}
      </div>
    </li>
  )
}