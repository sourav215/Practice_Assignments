import React from 'react';
import BottomMainRight from './BottomMainRight';

const MainRight = ({ name }) => (
  <div style={{ flex: 1, padding: 10 }}>
    <h3>Main Right</h3>
    <BottomMainRight name={name} />
  </div>
);

export default MainRight;
