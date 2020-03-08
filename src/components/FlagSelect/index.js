import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import ReactSelect from 'react-select'
import {ReactComponent as Expand} from "./expand.svg";

import './flag-select.scss'

export class FlagSelect extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    options: PropTypes.array,
  };

  render() {
    const {options, className} = this.props;
    const list = options.map(item => {
      return ({
        value: item.value,
        label: <div><img src={item.img}/></div>
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
        />
      </div>
    )
  }
}