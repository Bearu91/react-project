import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import Creator from '../Creator/Creator';
import Icon from '../Icon/Icon';
import { settings } from '../../data/dataStore';

class Column extends React.Component {
  static propTypes ={
    title: PropTypes.string,
    cards: PropTypes.array,
    addCard: PropTypes.func,
  }
  static defaultProps = {
    icon: settings.defaultColumnIcon,
  }


  render() {
    const {title, addCard,cards} = this.props;
    return (
      <section className={styles.component}>
        <h3 className={styles.title}>{title}<span className={styles.icon}><Icon {...this.props}/></span></h3>
        <div className={styles.component}>
          {cards.map(cardData => (
            <Card key={cardData.id} {...cardData} />
          ))}
        </div>
        
        <div className={styles.creator}>
          <Creator text={settings.cardCreatorText} action={addCard}/>
        </div>
        
      </section>
    );
  }
}



export default Column;
