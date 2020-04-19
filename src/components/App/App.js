import React from 'react';
import styles from './App.scss';
import List from '../List/List';
import {pageContents, listData} from '../../data/dataStore';

class App extends React.Component {
  render() {
    return (
      <main className={styles.component}>
        <h1 className={styles.title}>{pageContents.title}witaj potezny React</h1>
        <h2 className={styles.subtitle}>{pageContents.subtitle}Hello world!</h2>
        <List title={['things to do', <sup key='1'>soon!</sup>]} 
              screen = {'http://uploads.kodilla.com/bootcamp/fer/11.react/space.png'}
              {...listData}>
          
        </List>
      </main>
    )
  }
}

export default App;
