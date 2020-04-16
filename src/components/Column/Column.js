import React from 'react';
import styles from './Column.scss';
import List from '../List/List';

class Column extends React.Component {
  render() {
    return (
      <section className={styles.component}>
        <h3 className={styles.title}>haha, {this.props.text}</h3>
      </section>
    )
  }
}

Column.propTypes = {
text: PropTypes.string
};

export default Column;
