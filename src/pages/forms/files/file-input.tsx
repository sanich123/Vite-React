import React, { Component } from 'react';

export default class FileInput extends Component<{ fileInput: React.RefObject<HTMLInputElement> }> {
  render() {
    return (
      <div>
        <label htmlFor="input-file">Send your photo</label>
        <input
          type="file"
          id="input-file"
          accept="image/png, image/jpeg"
          ref={this.props.fileInput}
          required
          name="img"
        />
      </div>
    );
  }
}
