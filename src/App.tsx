import React, { useState } from 'react';
import './App.css';
import { useAppDispatch, useAppSelector } from './app/hooks';
import { amountAdded, incremented } from './features/counter/counter-slice';
import { useFetchBreedsQuery } from './features/dogs/dogs-api-slice';

function App() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  const { data = [], isFetching } = useFetchBreedsQuery();

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
      <br />
      <div>
        <p>Number of dogs fetched: {data.length}</p>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Picture</th>
            </tr>
          </thead>
          <tbody>
            {data.map((breed) => (
              <tr key={breed.id}>
                <td>{breed.name}</td>
                <td>
                  <img src={breed.image.url} alt={breed.name} height={250} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
