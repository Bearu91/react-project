// eslint-disable-next-line no-unused-vars
import styles from './Card.scss';
import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
    static propTypes = {
      list: PropTypes.array,
    };
    
    render() {
      const {list} = this.props;
      return (
        <section>
          <ul>
            {list.map(function(ele) {
              return <li key={ele.key}>{ele.title}</li>;
            })}
          </ul>
        </section>
      );
    }
}

export default Card;