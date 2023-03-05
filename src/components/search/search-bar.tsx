import React, { ChangeEvent } from 'react';

export default class SearchBar extends React.Component<{
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}> {
  render() {
    return <input type="search" onChange={this.props.handleChange} />;
  }
}
