import React, {PureComponent, Fragment} from "react";
import PropTypes from 'prop-types';
import cn from 'classnames';
import './input-field.scss'

import CurrencyInput from 'react-currency-input';

export class InputField extends PureComponent {
  static propTypes = {
    style: PropTypes.object,
    className: PropTypes.string,
    Node: PropTypes.node,
    label: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.string,
  };

  static defaultProps = {
    Node: <Fragment/>
  };

  render() {
    const {style, className, Node, label, name, type} = this.props;

    return (
      <div
        className={cn("input-field", className)}
        style={style}
      >
        <label
          className="input-field__label"
          htmlFor={name}
        >
          {label}
          {Node}
        </label>
        <CurrencyInput
          className="input-field__item"
          suffix=" Р"
          precision={4}
          thousandSeparator="."
          decimalSeparator=","
          inputType={type}
        />
      </div>
    )
  }
}