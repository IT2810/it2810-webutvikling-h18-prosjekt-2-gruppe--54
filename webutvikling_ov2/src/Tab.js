import React, { Component } from 'react';
import PropTypes from 'prop-types';

//Komponent som brukes av Tabs.js for å kunne dele inn siden i forskjellige tabber.
class Tab extends Component {
  static propTypes = {
    activeTab: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  };
  
  
  onClick = () => {
    const { label, onClick } = this.props;
    onClick(label);
  }

  render() {
    const {
      onClick,
      props: {
        activeTab,
        label,
      },
    } = this;

    let className = 'tab-list-item';

    if (activeTab === label) {
      className += ' tab-list-active';
    }

    return (
      <li
        className={className}
        onClick={onClick}
      >
        {label}
      </li>
    );
  }
}

export default Tab;