import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero';
import PropTypes from 'prop-types';
import Column from '../Column/Column';

class List extends React.Component {
  static propTypes = {
    title: PropTypes.node.isRequired,
    children: PropTypes.node,
    screen: PropTypes.string.isRequired,
  }
  static defaultProps = {
    children: <p>I can do all the things!!!</p>,
  }

  render() {
    return (
        <section className={styles.component}>   
            <Hero titleText={this.props.title} imageBack={this.props.screen}/>
            <div className={styles.description}>
              {this.props.children}
            </div>
            <div className={styles.columns}> 
              <Column className={this.props.title}>Animals</Column>/>
              <Column className={this.props.title}>Plants</Column>/>
              <Column className={this.props.title}>Minerals</Column>/>
            </div>
        </section>
    )
  }
}

export default List;
