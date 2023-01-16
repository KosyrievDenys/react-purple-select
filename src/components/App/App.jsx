import React, { useState } from "react";

//components
import { BorderChoice, SelectedList } from "./components";

// assets
import styles from './App.module.scss';

function App() {

  const [activeList, setActiveList] = useState(false);
  // const [activeItemList, setActiveItemList] = useState('');

  const openList = () => {
    setActiveList(!activeList);
  }

  return (
    <main>
      <div className={styles.app}>
        <div className={styles.selected}>
          <BorderChoice activeList={activeList}
                        // activeItemList={activeItemList}
                        openList={openList} />
          {activeList && <SelectedList />}
        </div>
      </div>
    </main>
  );
}

export default App;
