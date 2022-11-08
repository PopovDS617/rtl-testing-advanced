import classes from './Pets.module.css';

import React, { useState, useEffect, createContext } from 'react';
import CardList from '../Cards/CardList';
import Filter from '../Filter/Filter';
import axios from 'axios';

export const PetsContext = createContext({
  cats: [],
  setCatsList: () => {},
});

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
        return (
          cat.favoured === (filters.favoured === 'favoured' ? true : false)
        );
      });
    }
    setFilteredCats(catsFiltered);
  }, [filters]);

  return (
    <div className={classes['app-container']}>
      <PetsContext.Provider value={{ cats: filteredCats, setCatsList }}>
        <Filter filters={filters} setFilters={setFilters} />
        <CardList />
      </PetsContext.Provider>
    </div>
  );
};

export default Pets;
