import React from 'react';
import './loader.scss';

export default class Loader extends React.Component {
  render() {
    return (
      <div className="lds-heart">
        <div></div>
      </div>
    );
  }
}
