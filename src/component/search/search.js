import React from 'react'

const Search = ({ onChange, value }) => (
  <input
    type="text"
    onChange={onChange}
    value={value}
    className="search"
    placeholder="Nom de pokemon..."
    autoFocus
  />
)

export default Search
