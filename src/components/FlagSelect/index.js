import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import ReactSelect from 'react-select'
import {ReactComponent as Expand} from "./expand.svg";

import './flag-select.scss'

export class FlagSelect extends PureComponent {
  static propTypes = {
    onChange: PropTypes.func,
    className: PropTypes.string,
    options: PropTypes.array,
  };

  static defaultProps = {
    onChange: Function.prototype,
  };

  render() {
    const {options, className, onChange} = this.props;
    const list = options.map(item => {
      return ({
        value: item.value,
        label: <img src={item.img}/>,
        suffix: item.suffix
      })
    });


    return (
      <div
        className={className}
        style={{
          width: '80px'
        }}
      >
        <ReactSelect
          placeholder=""
          classNamePrefix="flag-select"
          options={list}
          defaultValue={list[0]}
          isSearchable={false}
          components={{
            IndicatorSeparator: null,
            DropdownIndicator: () => <Expand/>
          }}
          onChange={onChange}
        />
      </div>
    )
  }
}