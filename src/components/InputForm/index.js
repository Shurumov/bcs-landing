import React, {PureComponent} from "react";
import PropTypes from 'prop-types'
import cn from 'classnames';

import './input-form.scss'

export class InputForm extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    label: PropTypes.string,
    name: PropTypes.string,
    isRequired: PropTypes.bool,
    style: PropTypes.object,
  };

  state = {
    value: ''
  };

  onChange = (e) => {
    this.setState({
      value: e.target.value,
    })
  };

  render() {
    const {className, label, name, isRequired, style} = this.props;
    const {value} = this.state;
    return (
      <div className={cn("input-form", className)} style={style}>
        <input
          className="input-form__field"
          type="text"
          name={name}
          value={value}
          onChange={this.onChange}
        />
        {!value && label && (
          <label htmlFor={name} className="input-form__label">
            {label}
            {isRequired && <span className="input-form__label_required">*</span>}
          </label>
        )}
      </div>
    )
  }
}