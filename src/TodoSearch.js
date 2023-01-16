import React from 'react';
import './TodoSearch.css';

function TodoSearch({searchValue, setSearchValue}) {
  const onSearchValueChange = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value);
  }
  return (
    <input className="TodoSearch" value={searchValue} placeholder="Introduce tu tarea" onChange={onSearchValueChange}/>
  );
}

export { TodoSearch };