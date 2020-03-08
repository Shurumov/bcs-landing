import React, {PureComponent} from "react";
import PropTypes from 'prop-types';
import cn from 'classnames'

import { InputField } from 'components';

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
              name="currency"
              Node={<div>1</div>}
            />
          </div>
        </div>
      </div>
    )
  }
}