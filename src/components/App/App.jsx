import React, { useState } from "react";

//components
import { BorderChoice, SelectedList } from "./components";

// assets
import styles from './App.module.scss';

// const arrLists = [
//   ['Books', ['Books2', 'Scarce books', 'Kids books']],
//   ['Cars', ['Cars2', 'Scarce books', 'Kids books']],
//   ['Old books', ['Old books2', 'Scarce books', 'Kids books', 'Darts']],
//   ['Red', ['Red2', 'Scarce books', 'Kids books'], ['Red3', 'Scarce books3', 'Kids books3']]
// ];

const initialBooks = [
  {
    title: 'Book', children: [
      { title: 'Book2', children: [], selected: false },
      { title: 'Scarce books', children: [], selected: false },
      { title: 'Kids books', children: [], selected: false },
    ],
    selected: false
  },
  {
    title: 'Car', children: [
      { title: 'Cars2', children: [], selected: false },
      { title: 'Scarce books', children: [], selected: false },
      { title: 'Kids books', children: [], selected: false },
    ],
    selected: false
  },
  {
    title: 'Old books', children: [
      { title: 'Old books2', children: [], selected: false },
      { title: 'Scarce books', children: [], selected: false },
      { title: 'Kids books', children: [], selected: false },
      { title: 'Darts', children: [], selected: false },
    ],
    selected: false
  },
  {
    title: 'Red', children: [
      { title: 'Red2', children: [], selected: true },
      { title: 'Scarce books', children: [], selected: false },
      {
        title: 'Kids books', children: [
          { title: 'Red3', children: [] },
          { title: 'Scarce books3', children: [] },
          { title: 'Kids books3', children: [] },
        ],
        selected: false
      },
    ],
    selected: false
  },
]

function App() {

  const [activeList, setActiveList] = useState(true);
  const [selectedValue, setSelectedValue] = useState(initialBooks[0].title);
  const [books, setBooks] = useState(initialBooks);

  const openList = () => {
    setActiveList(!activeList);
  }

  const getTheSelectedValue = (value) => {
    setSelectedValue(value)
  }

  return (
    <main>
      <div className={styles.app}>
        <div className={styles.selected}>
          <BorderChoice
            activeList={activeList}
            selectedValue={selectedValue}
            openList={openList} />
          {activeList && <SelectedList
            books={books}
            getTheSelectedValue={getTheSelectedValue}
            setBooks={setBooks} />}
        </div>
      </div>
    </main>
  );
}

export default App;
