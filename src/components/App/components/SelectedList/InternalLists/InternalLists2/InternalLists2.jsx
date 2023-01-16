import React, { useState } from "react";

//assets
import styles from './InternalLists2.module.scss'
import folder from "../../../../../../assets/images/icons/folder.svg";
import pinkCheckMark from "../../../../../../assets/images/icons/pink-check-mark.svg";

export const InternalLists2 = ({
                                 getTheSelectedValue,
                                 children,
                                 setActiveValue,
                                 setBooks,
                                 index,
  books,
                               }) => {

  const [activeValue2, setActiveValue2] = useState(false);
  return (
    <li
      className={`selected-item ${styles.selectedItem}`}>
      <div className='selected-block'>
        <div className='selected-folder'>
          {/*<img className='selected-icon' src={select} alt='' />*/}
          <img className='icon-second' src={folder} alt='' />
          <span>{`${children.title}/`}</span>
          <span
            className='selected-text'
            onClick={() => {
              getTheSelectedValue(children.title);
              console.log(children.selected,'999999')
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