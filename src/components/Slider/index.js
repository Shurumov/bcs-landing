import React, {PureComponent} from "react";
import BaseSlider from '@farbenmeer/react-spring-slider';
import './slider.scss'

const BulletComponent = (props) => {
  const {onClick, isActive, bgc} = props;
  return (
    <div
      className={bgc}
      style={{
        margin: '0 2px',
        opacity: isActive && '0.5'
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
    const { index } = this.state;
    return (
      <div style={{height: '100px'}}>
        <BaseSlider
          activeIndex={this.state.index}
          hasBullets
          onSlideChange={this.onSlideChange}
          BulletComponent={props => BulletComponent({...props, bgc: this.colorsClass[index]})}
          // ArrowComponent={ArrowComponent}
        >
          <div>child 1</div>
          <div>child 2</div>
          <div>child 3</div>
          <div>child 4</div>
          <div>child 5</div>
          <div>child 6</div>
        </BaseSlider>
      </div>
    )
  }
}