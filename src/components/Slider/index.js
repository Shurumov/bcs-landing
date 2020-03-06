import React, {PureComponent} from "react";
import cn from 'classnames';
import BaseSlider from '@farbenmeer/react-spring-slider';
import data from './slides'
import './slider.scss'

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

export class Slider extends PureComponent {
  state = {
    index: 0
  };

  colorsClass = [
    'slider_bgc_yellow',
    'slider_bgc_coral',
    'slider_bgc_green',
    'slider_bgc_blue',
    'slider_bgc_gray',
    'slider_bgc_salad',
  ];

  onSlideChange = index => {
    this.setState({
      index: index
    })
  };

  render() {
    const {index} = this.state;
    return (
      <div
        className={"container"}
      >
        <div className="slider">
          <BaseSlider
            activeIndex={this.state.index}
            hasBullets
            onSlideChange={this.onSlideChange}
            // BulletComponent={props => BulletComponent({...props, bgc: this.colorsClass[index]})}
            BulletComponent={() => <div/>}
            // ArrowComponent={ArrowComponent}
          >
            {[0, 1, 2, 3, 4, 5].map(item => (
              <div
                className={cn('slider__item', this.colorsClass[item])}
              >
                <div className="content">
                  item
                </div>
              </div>
            ))}
          </BaseSlider>
          <div className="content">
            <div className="slider__bullet_wrapper">
              {(data || []).map((item, index) => (
                <div
                  className={cn('slider__bullet', this.colorsClass[index])}
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