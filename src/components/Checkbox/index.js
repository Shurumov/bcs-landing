import React, { PureComponent} from 'react';
import PropTypes from "prop-types";
import cn from 'classnames';

import {ReactComponent as Checked} from './checked.svg'
import {ReactComponent as Unchecked} from './unchecked.svg'

import './checkbox.scss'

export class Checkbox extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    label: PropTypes.string,
    textLink: PropTypes.string,
    link: PropTypes.string,
  };

  state = {
    checked: false
  };

  toggleCheckbox = () => {
    this.setState(state => ({
      checked: !state.checked
    }))
  };

  render() {
    const {checked} = this.state;

    const {className, label, link = '', textLink} = this.props;

    return (
      <div
        onClick={this.toggleCheckbox}
        tabIndex={0}
        className={cn("checkbox", className)}
      >
        {checked ? <Checked/> : <Unchecked/>}
        {label && (
          <span className="checkbox__label">
            {label}
            {textLink && (
              <a
                className="checkbox__link"
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                onClick={e => {
                  e.stopPropagation()
                }}
              >
                {` ${textLink}`}
              </a>
            )}
          </span>

        )}

      </div>
    )
  }
}