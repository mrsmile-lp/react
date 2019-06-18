import React from "react";
import PropTypes from 'prop-types';
import styles from "./SearchTools.css";

const searchTools = () => (
  <div className={styles.searchTools}>
    <input type="text" placeholder="search" />
    <div>Search by</div>
    <label className="radio">
      <input
        type="radio"
        name="filter-type"
        value="title"
      />
      <div>Title</div>
    </label>
    <label className="radio">
      <input
        type="radio"
        name="filter-type"
        value="genres"
      />
      <div>Genre</div>
    </label>
    <div className={styles.button}>Search</div>
  </div>
);

export default searchTools;
