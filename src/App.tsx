import React, { useState } from 'react';
import './App.css';
import { useAppDispatch, useAppSelector } from './app/hooks';
import { incremented } from './features/counter/counter-slice';

function App() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  function handleClick() {
    dispatch(incremented());
  }

  return (
    <div className='App'>
      <button onClick={handleClick}>count is: {count}</button>
    </div>
  );
}

export default App;
