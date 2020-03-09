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
  'slider_bgc_purple',
  'slider_bgc_salad',
];

const activeColorsClass = [
  'slider_bgc_marker-yellow',
  'slider_bgc_marker-coral',
  'slider_bgc_marker-green',
  'slider_bgc_marker-blue',
  'slider_bgc_marker-purple',
  'slider_bgc_marker-salad',
];


const BulletComponent = ({index, activeIndex, item, onSlideChange}) => {
  return (
    <div
      className={cn(
        "slider__bullet-point",
        index === activeIndex ? activeColorsClass[index] : ''
      )}
      onClick={() => onSlideChange(index)}
      key={item + index}
    />
  )
};

const oneSlide = ({item, order, showModal, MODAL_TYPES}) => {
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
            onClick={() => showModal(MODAL_TYPES.form)}
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
            onClick={showModal}
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
    style: PropTypes.object,
    showModal: PropTypes.func,
    hideModal: PropTypes.func,
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
    const {activeIndex} = this.state;
    const newIndex = activeIndex === data.length - 1 ? 0 : activeIndex + 1;
    this.setState({
      activeIndex: newIndex
    })
  };

  render() {
    const {style, showModal, MODAL_TYPES} = this.props;
    const {activeIndex} = this.state;
    return (
      <div
        className="container slider_container"
        style={style}
      >
        <div className="slider">
          <AwesomeSlider
            selected={this.state.activeIndex}
            onTransitionEnd={({currentIndex}) => this.onSlideChange(currentIndex)}
            organicArrows={false}
            bullets={false}
            mobileTouch={true}
          >
            {(data || []).map((item, order) => (
              oneSlide({item, order, showModal, MODAL_TYPES})
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
            <div className="slider__bullet-point_wrapper">
              {(data || []).map((item, index) => (
                BulletComponent({
                    item,
                    index,
                    activeIndex,
                    onSlideChange: this.onSlideChange
                  }
                )))}
            </div>
          </div>
        </div>
      </div>
    )
  }
}