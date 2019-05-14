import React from 'react'

const Search = ({ onChange, value }) => (
  <input
    type="text"
    onChange={onChange}
    value={capitalize(value)}
    placeholder="Nom de pokemon..."
    autoFocus
  />
)

const capitalize = (s) => {
  if (typeof s !== 'string') return ''
  return s.charAt(0).toUpperCase() + s.slice(1)
}

export default Search
