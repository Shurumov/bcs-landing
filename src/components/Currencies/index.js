import React, {Component} from "react";
import PropTypes from 'prop-types';
import cn from 'classnames'
import {Button} from 'components'
import {ReactComponent as Expand} from './expand.svg'
import {ReactComponent as Arrow} from './arrow-up.svg'

import data from './data'
import './currencies.scss'

export class Currencies extends Component {
  static propTypes = {
    className: PropTypes.string
  };

  state = {
    menuIsOpen: false,
  };

  toggleMenu = () => {
    this.setState(state => ({
      menuIsOpen: !state.menuIsOpen
    }))
  };

  render() {
    const {className} = this.props;
    const {menuIsOpen} = this.state;
    return (
      <div className="container">
        <div className="content">
          <div className={cn("currencies", className, {'currencies_open': menuIsOpen})}>
            <div className="currencies__left">
              <div className="currencies__title">Курс валют</div>
              <div className="currencies__time">23.10.2019 10:34:28 (мск)</div>
              <Button
                className="currencies__button"
              >
                Обменять валюту
              </Button>
            </div>
            <div className="currencies__right">
              <div className="currencies__table">
                <div className="currencies__table-row">
                  <div className="currencies__table-cell"/>
                  <div className="currencies__table-cell currencies__table-th">покупка</div>
                  <div className="currencies__table-cell currencies__table-th">продажа</div>
                </div>
                {data.map(item => (
                  <div className="currencies__table-row" key={item.currency}>
                    <div className="currencies__table-cell">
                      <img
                        className="currencies__flag"
                        src={item.link} alt=""
                      />
                      {item.currency}
                    </div>
                    <div className="currencies__table-cell">
                      <Arrow className="currencies__arrow-dynamics"/>
                      {item.buy}
                    </div>
                    <div className="currencies__table-cell">
                      <Arrow className="currencies__arrow-dynamics"/>
                      {item.sell}
                    </div>
                  </div>
                ))}
              </div>
              <div
                className="currencies__expand"
                onClick={this.toggleMenu}
              >
                <Expand/>
                <div className="currencies__expand-text">{menuIsOpen ? 'Свернуть' : 'Развернуть'}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}