import React, { Component } from 'react';

export default class FileInput extends Component<{ fileInput: React.RefObject<HTMLInputElement> }> {
  render() {
    let filesLength = 0;
    const fileInput = this.props.fileInput.current;
    if (fileInput) {
      if (fileInput.files) {
        filesLength = fileInput.files.length
      }
    }
    return (
      <div className="input__wrapper input-file">
        <label htmlFor="input-file">Send your photo</label>
        <input
          type="file"
          id="input-file"
          accept="image/png, image/jpeg"
          ref={this.props.fileInput}
          required
          name="img"
          className="input__file"
        />
        {!filesLength && (
          <div className="warning">Обязательно нужно выбрать какой-то файл</div>
        )}
      </div>
    );
  }
}
