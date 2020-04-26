import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';


class Column extends React.Component {
static propTypes ={
    title: PropTypes.string,
    cards: PropTypes.array,
   

}

  render() {
    const {title,cards} = this.props
    return (
      <section className={styles.component}>
        <h3 className={styles.title}>{title}</h3>
          <ul>
            {cards.map(function(ele) {
              return <li key={ele.key}>{ele.title}</li>
            })}
          </ul>
      </section>
    )
  }
}



export default Column;
