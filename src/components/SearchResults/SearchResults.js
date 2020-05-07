import React, { Component } from 'react';
import styles from './SearchResults.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card.js';
import Icon from '../Icon/Icon.js';
import { settings } from '../../data/dataStore';

class SearchResults extends Component {

  static defaultProps = {
    icon: settings.defaultColumnIcon,
  }

  static propTypes = {
    cards: PropTypes.array,
    title: PropTypes.string,
    addCard: PropTypes.func,
  }

  render() {
    const {icon} = settings.search;
    const {cards} = this.props;
    return (
      <section className={styles.component}>
        <h3 className={styles.title}><span className={styles.icon}><Icon icon={icon}/></span></h3>
        <h1 className={styles.title}>Your search results</h1>
        <div className={styles.component}>
          {cards.map(cardData => (
            <Card key={cardData.id} {...cardData} />
          ))}
        </div>

      </section>
    );
  }
}
export default SearchResults;
