import React from 'react';
import styles from './App.scss';
import List from '../List/List'

class App extends React.Component {
  render() {
    return (
      <main className={styles.component}>
        <h1 className={styles.title}>witaj potezny React</h1>
        <h2 className={styles.subtitle}>Hello world!</h2>
        <List title={['things to do', <sup key='1'>soon!</sup>]} screen={["http://uploads.kodilla.com/bootcamp/fer/11.react/space.png"]}>
          
        </List>
      </main>
    )
  }
}

export default App;
