import React from 'react';

const SearchBox = ({ searchfield, searchChange }) => {
  return (
    <div className='pa2'>
      <input
        className='pa3 ba b--green bg-lightest-blue'
        type='aaa'
        placeholder='search fam'
        onChange={searchChange}
      />
    </div>
  );
}

export default SearchBox;