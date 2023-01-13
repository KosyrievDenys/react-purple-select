import React, { useState } from "react";
import styles from './App.module.scss';
import BorderChoice from "./BorderChoice/BorderChoice";
import SelectedList from "./SelectedList/SelectedList";

function App() {
  const arrList = [['Books', ['Scarce books', 'Kids books']],
    ['Cars', ['Scarce books', 'Kids books']],
    ['Old books', ['Scarce books', 'Kids books']],
    ['Red', ['Scarce books', 'Kids books'], ['Scarce books-2', 'Kids books-2']]];
  const [activeListItem, setActiveListItem] = useState('Book');
  return (
    <main>
      <div className={styles.app}>
        {/*<div className={styles.selected}>*/}
        {/*  <BorderChoice activeListItem={activeListItem}/>*/}
        {/*  <SelectedList arrList={arrList}/>*/}
        {/*</div>*/}
      </div>
    </main>
  );
}

export default App;
