import classes from './Filter.module.css';
import React from 'react';

const Filter = () => {
  return (
    <div className={classes['pet-filter-container']}>
      <div className={classes['filter-container']}>
        <label htmlFor="favourite">Favourite</label>
        <select
          className={classes['form-select']}
          name="favourite"
          id="favourite"
        >
          <option value="any">any</option>
          <option value="favourite">favourite</option>
          <option value="not favourite">not favourite</option>
        </select>
      </div>
      <div className={classes['filter-container']}>
        <label htmlFor="gender">Gender</label>
        <select className={classes['form-select']} name="gender" id="gender">
          <option value="any">any</option>
          <option value="male">male</option>
          <option value="female">female</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
