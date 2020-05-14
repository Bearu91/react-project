
import React, {Component} from 'react';
import styles from './SearchResults.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card.js';
import Container from '../Container/Container';
import connect from 'react-redux';
import { settings } from '../../data/dataStore';
import { getCards } from '../../redux/cardsRedux';
import Icon from '../Icon/Icon';


class SearchResults extends Component {
    static propTypes = {
      cards: PropTypes.array || [],
      title: PropTypes.string,
      addCard: PropTypes.func,
    }

    static defaultProps = {
      icon: settings.defaultColumnIcon,
      cards: [],
    }
    render() {
      const title = this.props.match.params.title;

      const {cards} = this.props;
      const {icon} = settings.search;
      
      
      return (
        <Container>
          <section className={styles.component}>
            <h3 className={styles.title}> <span> <Icon icon={icon}/></span></h3>
            <h1 className={styles.title}>Your search results</h1>
            <div className={styles.cards}>
              {cards.map(cardsData => {
                return <Card key={cardsData.id} title={cardsData.title}/>;
              }
              )}
            </div>
          </section>
        </Container>
        
      );
    }
}

const mapStateToProps = (state, props) => {
  const title = props.match.params.title;
  return {
    cards: getCards(state,title) ,
  };
};


export default connect(mapStateToProps) (SearchResults);
