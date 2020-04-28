import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import Creator from '../Creator/Creator';
import Icon from '../Icon/Icon';

class Column extends React.Component {
  static propTypes ={
    title: PropTypes.string,
    cards: PropTypes.array,
    icons: PropTypes.object,
  }
  state = {
    cards: this.props.cards || [],
  }
  addCard(title){
    const newCards = [...this.state.cards];
    newCards.push({
      key: newCards.length + 1,
      title,
    });
    this.setState({
      cards: newCards,
    });
  }


  render() {
    const {title,icons} = this.props;
    return (
      <section className={styles.component}>
        <h3 className={styles.title}>{title}<span className={styles.icon}><Icon name={icons}/></span></h3>
        <Card list={this.state.cards}/>
        <div>
          <Creator text={'dodaj pozycje'} action={title => this.addCard(title)}/>
        </div>
      </section>
    );
  }
}



export default Column;
