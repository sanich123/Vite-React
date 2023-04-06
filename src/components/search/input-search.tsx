import React, { ChangeEvent } from 'react';
import './input-search.scss';

type InputSearchProps = {
  handleChange: (target: ChangeEvent<HTMLInputElement>) => void;
  searchQuery: string;
};

export default function InputSearch({ handleChange, searchQuery }: InputSearchProps) {
  return (
    <div className="inputs-search-wrapper">
      <label htmlFor="search-input" className="input-search-label">
        Try to find something
      </label>
      <input type="search" id="search-input" className="input-search" placeholder="Type here to search something" onChange={handleChange} value={searchQuery} />
    </div>
  );
}
