import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';


class Column extends React.Component {
static propTypes ={
    Animals: PropTypes.array,
    Plants: PropTypes.array,
    Minerals: PropTypes.array,

}

  render() {
    return (
      <section className={styles.component}>
        <h3 className={styles.title}>{this.props.Animals}{this.props.Plants}{this.props.Minerals}</h3>
      </section>
    )
  }
}



export default Column;
