import React, {Component} from "react";
import PropTypes from 'prop-types';
import cn from 'classnames'

import {CurrenciesSlider} from 'components'

import './reasons.scss'
import data from "./data-sm";

const oneSlideDefault = ({img}) => {
  return (
    <div key={img}>
      <img src={img} alt=""/>
    </div>
  )
};

export class Reasons extends Component {
  static propTypes = {
    className: PropTypes.string
  };

  render() {
    const {className} = this.props;

    return (
      <div className={cn("container", className)}>
        <div className="content">
          <div className="reasons">
            <h2 className="reasons__title">Почему «БКС брокер»?</h2>
            <div>
              <img className="reasons__img" src="/images/reasons/reason-xl.svg" alt=""/>
              <img className="reasons__img_lg" src="/images/reasons/reason-lg.svg" alt=""/>
            </div>
            <div className="reasons__mobile">
              <CurrenciesSlider
                renderList={data}
                oneSlide={oneSlideDefault}
                height="240px"
                displaySellBuy={false}
                displayArrows={false}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}