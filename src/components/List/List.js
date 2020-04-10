import React from 'react';
import styles from './App.scss';
import Hero from './Hero'

class List extends React.Component {
  render() {
    return (
        <section className={styles.component}>   
            <Hero />
        </section>
    )
  }
}

export default List;
