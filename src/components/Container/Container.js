import React from 'react';
import styles from './Container.scss';
import PropTypes from 'prop-types';


const container = props => {
  <div className={styles.component}>
    {props.children}
  </div>;
};

container.propTypes ={
  children: PropTypes.node,
};

export default container;