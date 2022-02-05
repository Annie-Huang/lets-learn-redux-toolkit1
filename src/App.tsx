import React, { useState } from 'react';
import './App.css';
import { useAppDispatch, useAppSelector } from './app/hooks';
import { amountAdded, incremented } from './features/counter/counter-slice';

function App() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  function handleClick() {
    dispatch(incremented());
  }

  const handleClickAddAmount = () => {
    dispatch(amountAdded(3));
  };

  return (
    <div className='App'>
      <button onClick={handleClick}>count is: {count}</button>
      <br />
      <button onClick={handleClickAddAmount}>Add 3 count is: {count}</button>
    </div>
  );
}

export default App;
