import React from 'react';
import Card from './components/Card';
import CardList from './components/CardList';
import cats from './mocks/cats.json';

const App = () => {
  return (
    <div className=" ">
      <CardList cats={cats} />
    </div>
  );
};

export default App;
