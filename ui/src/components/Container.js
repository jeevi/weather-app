import React from 'react';
import PropTypes from 'prop-types';
import Forecast from './Forecast';
import TabBar from './TabBar';
import './Container.css';

const Container = () => {
  return (
    <div className="outerDiv">
      <TabBar />
      <Forecast />
    </div>
  );
};

export default Container;