import React, { Component } from 'react';


const SearchBar = () => (
  <form className = "form">
          <input type="text" placeholder="Search..." />
          <p>
            <input type="checkbox" />
            {' '}
            Only show products in stock
          </p>
        </form>
  )

export default SearchBar