
import styles from './Card.scss';
import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
    
  static propTypes = {
    title: PropTypes.string,
  };
    
  render() {
    const {title} = this.props;
    return (
      <section className={styles.component}> 
        <div>
          {title}
        </div>
      </section>
    );
  }
}

export default Card;