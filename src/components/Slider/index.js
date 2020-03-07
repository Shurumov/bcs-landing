import React, {PureComponent} from "react";
import PropTypes from 'prop-types'
import cn from 'classnames';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import {Button} from "components";

import data from './slides'
import './slider.scss'


const colorsClass = [
  'slider_bgc_yellow',
  'slider_bgc_coral',
  'slider_bgc_green',
  'slider_bgc_blue',
  'slider_bgc_gray',
  'slider_bgc_salad',
];


const BulletComponent = (props) => {
  const {onClick, bgc} = props;
  return (
    <div
      className={cn('slider__bullet', bgc)}
      style={{
        margin: '0 2px',
      }}
      onClick={onClick}
    >
      {bgc}
    </div>
  )
};

const oneSlide = ({item, order}) => {

  return (
    <div
      className={cn('slider__slide', colorsClass[order])}
      key={item.link}
    >
      <div className="content slider__item">
        <div className="slider__left">
          <h2 className="slider__item-title">{item.title}</h2>
          <div className="slider__item-subtitle">{item.subtitle}</div>
          <ul className="slider__advantages-list">
            {item.advantages.map(advantage => (
              <li
                className="slider__advantages-list-item"
                key={advantage}
              >
                {advantage}
              </li>
            ))}
          </ul>
          <Button
            className="mt-7 slider__left-button"
          >
            Консультация
          </Button>
        </div>
        <div className="slider__right">
          {Object.keys(item.img).map(key => (
            <img
              className={`slider__slide-img slider__slide-img_${key}`}
              src={item.img[key]}
              alt=""
              key={item.img[key]}
            />
          ))}
          <Button
            className="slider__right-button"
          >
            Консультация
          </Button>
        </div>
      </div>
    </div>
  )
};

export class Slider extends PureComponent {
  static propTypes = {
    style: PropTypes.object
  };

  state = {
    activeIndex: 0
  };

  onSlideChange = index => {
    this.setState({
      activeIndex: index
    })
  };

  render() {
    const {style} = this.props;
    const {activeIndex} = this.state;
    return (
      <div
        className="container slider_container"
        style={style}
      >
        <div className="slider">
          <AwesomeSlider
            selected={this.state.activeIndex}
            bullets={false}
            onTransitionEnd={({currentIndex}) => this.onSlideChange(currentIndex)}
            organicArrows={false}
          >
            {(data || []).map((item, order) => (
              oneSlide({item, order})
            ))}
          </AwesomeSlider>
          <div className="content">
            <div className="slider__bullet_wrapper">
              {(data || []).map((item, index) => (
                <div
                  className={cn(
                    'slider__bullet',
                    index === activeIndex ? colorsClass[index] : ''
                  )}
                  onClick={() => this.onSlideChange(index)}
                  key={item + index}
                >
                  {data[index].link}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
}