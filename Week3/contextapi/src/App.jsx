import React, { useState } from 'react';
import Main from './components/Main';

const App = () => {
  const [name, setName] = useState('');

  return (
    <div>
      <h2>Enter your name:</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Type your name"
      />
      <Main name={name} />
    </div>
  );
};

export default App;
