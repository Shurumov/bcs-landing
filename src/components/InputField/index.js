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
    onChange: PropTypes.func,
  };

  static defaultProps = {
    Node: <Fragment/>,
    onChange: Function.prototype
  };

  render() {
    const {style, className, Node, label, type, suffix} = this.props;

    return (
      <div
        className={cn("input-field", className)}
        style={style}
      >
        <label
          className="input-field__label"
        >
          {label}
          {Node}
        </label>
        <CurrencyInput
          className="input-field__item"
          suffix={` ${suffix}`}
          precision={4}
          thousandSeparator=" "
          decimalSeparator=","
          inputType={type}
        />
      </div>
    )
  }
}