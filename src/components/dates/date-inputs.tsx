import React, { Component } from 'react';
import { InputKeys } from 'src/utils/const/const';
import { DATE_MOCKS, Warnings } from 'src/utils/const/texts';
import { InputsRefsAsProps } from '../../utils/types/form-types';

export default class DateInputs extends Component<InputsRefsAsProps> {
  render() {
    return (
      <>
        {DATE_MOCKS.map(({ name, min, max, title, type }) => {
          const deliveryRequirings = name === InputKeys.delivery ? Warnings.dataRequirings : '';
          const timeRequirings = name === InputKeys.time ? Warnings.timeRequirings : '';
          return (
            <div key={`${name}${title}`} className={`input__wrapper input-${name}`}>
              <label htmlFor={`input-${name}`}>{title}</label>
              <input
                type={type}
                name={name}
                id={`input-${name}`}
                min={min}
                max={max}
                required
                className="input__date"
                ref={this.props.inputs[name]}
              />
              {!this.props.inputs[name].current?.value && (
                <div className="warning">
                  {`You must choose ${
                    name === InputKeys.time ? 'time' : 'date'
                  }, to send the form. ${deliveryRequirings}${timeRequirings}`}
                </div>
              )}
            </div>
          );
        })}
      </>
    );
  }
}
