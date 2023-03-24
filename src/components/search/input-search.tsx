import React, { Component, ChangeEvent } from 'react';
import './input-search.scss';

type InputSearchProps = {
  handleChange: (target: ChangeEvent<HTMLInputElement>) => void;
  searchQuery: string;
};

export default class InputSearch extends Component<InputSearchProps> {
  render() {
    return (
      <div className="inputs-search-wrapper">
        <label htmlFor="search-input" className="input-search-label">
          Try to find something
        </label>
        <input
          type="search"
          id="search-input"
          className="input-search"
          placeholder="Type here to search something"
          onChange={this.props.handleChange}
          value={this.props.searchQuery}
        />
      </div>
    );
  }
}
