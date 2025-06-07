import React from 'react';
import MainLeft from './MainLeft';
import MainRight from './MainRight';

const Main = ({ name }) => (
  <div style={{ display: 'flex' }}>
    <MainLeft />
    <MainRight name={name} />
  </div>
);

export default Main;
