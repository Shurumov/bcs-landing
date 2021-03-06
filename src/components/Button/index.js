import React, {PureComponent} from "react";
import PropTypes from 'prop-types';
import cn from 'classnames'
import './button.scss'

export class Button extends PureComponent {
  static propTypes = {
    onClick: PropTypes.func,
    className: PropTypes.string,
    style: PropTypes.object,
    type: PropTypes.string,
  };

  render() {
    const { children, onClick, className, style, type } = this.props;
    return (
      <button
        className={cn('button', className)}
        onClick={onClick}
        style={style}
        type={type}
      >
        {children}
      </button>
    )
  }
}