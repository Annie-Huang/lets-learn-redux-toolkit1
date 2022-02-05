import React, { useState } from 'react';
import './App.css';
import { useAppSelector } from './app/hooks';

function App() {
  const count = useAppSelector((state) => state.counter.value);

  return (
    <div className='App'>
      <button>count is: {count}</button>
    </div>
  );
}

export default App;
