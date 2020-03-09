import React, {PureComponent} from "react";
import PropTypes from 'prop-types'
import cn from 'classnames';
import AwesomeSlider from 'react-awesome-slider';

import {ReactComponent as ArrowActive} from './arrow-acive.svg'
import {ReactComponent as ArrowDisabled} from './arrow-disabled.svg'
import {ReactComponent as ArrowUp} from './arrow-up.svg'
import dataCurrencies from './data'

import 'react-awesome-slider/dist/styles.css';
import './currencies-slider.scss'

const oneSlideDefault = ({currency, buy, sell, link}) => {
  return (
    <div className="currencies-slider__row" key={currency}>
      <div className="currencies-slider__cell">
        <img
          className="currencies-slider__flag"
          src={link} alt=""
        />
        {currency}
      </div>
      <div className="currencies-slider__cell">
        <ArrowUp className="currencies-slider__arrow-dynamics"/>
        {buy}
      </div>
      <div className="currencies-slider__cell">
        <ArrowUp className="currencies-slider__arrow-dynamics"/>
        {sell}
      </div>
    </div>
  )
};

export class CurrenciesSlider extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    oneSlide: PropTypes.func,
    renderList: PropTypes.array,
    height: PropTypes.string,
    displaySellBuy: PropTypes.bool,
    displayArrows: PropTypes.bool,
  };

  static defaultProps = {
    oneSlide: Function.prototype,
    displayArrows: true,
  };

  state = {
    activeIndex: 0
  };

  componentDidMount() {
    setInterval(this.toggleSlide, 6000)
  }

  onSlideChange = index => {
    this.setState({
      activeIndex: index
    })
  };

  toggleSlide = () => {
    const {renderList} = this.props;
    const data = renderList || dataCurrencies;
    const {activeIndex} = this.state;
    const newIndex = activeIndex === data.length - 1 ? 0 : activeIndex + 1;
    this.setState({
      activeIndex: newIndex
    })
  };

  transformArrow = {
    transform: 'rotate(180deg)'
  };

  render() {
    const {className, oneSlide, renderList, height, displaySellBuy, displayArrows} = this.props;
    const {activeIndex} = this.state;
    const isDisableLeftArrow = activeIndex === 0;
    const data = renderList || dataCurrencies;

    const isDisableRightArrow = activeIndex === data.length - 1;

    return (
      <div className={cn("currencies-slider", className)}>
        {displaySellBuy && (
          <div className="currencies-slider__row">
            <div className="currencies-slider__cell"/>

            <div className="currencies-slider__cell">
              <div style={{width: '23px', height: 0}}/>
              <div className="currencies-slider__cell_th">
                покупка
              </div>
            </div>
            <div className="currencies-slider__cell">

              <div className="currencies-slider__cell_th">
                продажа
              </div>
            </div>
          </div>
        )}
        <AwesomeSlider
          selected={activeIndex}
          bullets={false}
          style={{
            height: height ? height : '80px'
          }}
          organicArrows={false}
          onTransitionEnd={({currentIndex}) => this.onSlideChange(currentIndex)}
          mobileTouch={true}
        >
          {data.map(item => (oneSlide(item) || oneSlideDefault(item)))}
        </AwesomeSlider>
        {displayArrows && (
          <div className="currencies-slider__arrows">
            <div
              className="currencies-slider__arrows-left"
              tabIndex={0}
              onClick={isDisableLeftArrow ? () => {
              } : () => this.onSlideChange(activeIndex - 1)}
            >
              {isDisableLeftArrow ?
                <ArrowDisabled/> :
                <ArrowActive
                  style={this.transformArrow}
                />
              }
            </div>
            <div
              className="currencies-slider__arrows-right"
              tabIndex={0}
              onClick={isDisableRightArrow ? () => {
              } : () => this.onSlideChange(activeIndex + 1)}
            >
              {isDisableRightArrow ?
                <ArrowDisabled
                  style={this.transformArrow}
                /> :
                <ArrowActive/>
              }
            </div>
          </div>
        )}
      </div>
    )
  }
}