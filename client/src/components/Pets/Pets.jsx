import classes from './Pets.module.css';

import React, { useState, useEffect } from 'react';
import CardList from '../Cards/CardList';
import Filter from '../Filter/Filter';
import axios from 'axios';

const Pets = () => {
  const [catList, setCatsList] = useState([]);
  const [filteredCats, setFilteredCats] = useState([]);
  const [filters, setFilters] = useState({
    gender: 'any',
    favoured: 'any',
  });

  const fetchCats = async () => {
    const result = await axios.get('http://localhost:4000/cats');

    setCatsList(result.data);
    setFilteredCats(result.data);
  };

  useEffect(() => {
    fetchCats();
  }, []);

  useEffect(() => {
    let catsFiltered = [...catList];
    if (filters.gender !== 'any') {
      catsFiltered = catsFiltered.filter(
        (cat) => cat.gender === filters.gender
      );
    }
    if (filters.favoured !== 'any') {
      catsFiltered = catsFiltered.filter((cat) => {
        console.log(
          cat.favoured,
          filters.favoured,
          cat.favoured === filters.favoured
        );
        return (
          cat.favoured === (filters.favoured === 'favoured' ? true : false)
        );
      });
    }
    setFilteredCats(catsFiltered);
  }, [filters]);

  return (
    <div className="container">
      <div className={classes['app-container']}>
        <Filter filters={filters} setFilters={setFilters} />
        <CardList cats={filteredCats} setCatsList={setCatsList} />
      </div>
    </div>
  );
};

export default Pets;
