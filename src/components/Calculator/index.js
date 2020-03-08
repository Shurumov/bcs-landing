import React, {PureComponent} from "react";
import PropTypes from 'prop-types';
import cn from 'classnames'
import data from './data'

import {InputField, FlagSelect} from 'components';

import './calculator.scss'

export class Calculator extends PureComponent {
  static defaultProps = {
    className: PropTypes.string,
  };

  render() {
    const {className} = this.props;
    return (
      <div className="container">
        <div className="content">
          <div className={cn("calculator", className)}>
            <h2 className="calculator__title">
              Калькулятор
            </h2>
            <InputField
              label="Валюта"
              Node={
                <FlagSelect
                  className="ml-2"
                  options={data}
                />
              }
            />
          </div>
        </div>
      </div>
    )
  }
}