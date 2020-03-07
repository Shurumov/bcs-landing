import React, {PureComponent} from "react";
import cn from 'classnames';
import BaseSlider from '@farbenmeer/react-spring-slider';

import { Button } from "components";

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
      className={colorsClass[order]}
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
            style={{
              position: 'absolute',
              zIndex: 1000
            }}
            onClick={() => {
              console.log(1);}}
          >
            Консультация
          </Button>
        </div>
        <div>
          <img src={item.img} alt=""/>
        </div>
      </div>
    </div>
  )
};

export class Slider extends PureComponent {
  state = {
    activeIndex: 0
  };

  onSlideChange = index => {
    this.setState({
      activeIndex: index
    })
  };

  render() {
    const {activeIndex} = this.state;
    return (
      <div
        className={"container"}
      >
        <div className="slider">
          <BaseSlider
            activeIndex={this.state.activeIndex}
            hasBullets
            onSlideChange={this.onSlideChange}
            // BulletComponent={props => BulletComponent({...props, bgc: colorsClass[index]})}
            BulletComponent={() => <div/>}
            // ArrowComponent={ArrowComponent}
          >
            {(data || []).map((item, order) => (
              oneSlide({item, order})
            ))}
          </BaseSlider>
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