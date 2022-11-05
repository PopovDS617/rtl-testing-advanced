import classes from './Pets.module.css';

import React, { useState, useEffect } from 'react';
import CardList from '../Cards/CardList';
import Filter from '../Filter/Filter';
import axios from 'axios';

const Pets = () => {
  const [catList, setCastList] = useState([]);

  const fetchCats = async () => {
    const result = await axios.get('http://localhost:4000/cats');

    setCastList(result.data);
  };

  useEffect(() => {
    fetchCats();
  }, []);

  return (
    <div className="container">
      <div className={classes['app-container']}>
        <Filter />
        <CardList cats={catList} />
      </div>
    </div>
  );
};

export default Pets;
