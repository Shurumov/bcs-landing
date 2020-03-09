import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import {CurrenciesSlider} from 'components';

import './news-list.scss'
import data from './news-list'

const oneSlideDefault = ({title, img, date, index}) => {
  return (
    <div className="news-list__item" key={`${title}${index}`}>
      <img className="news-list__item-img" src={img} alt=""/>
      <div className="news-list__item-description">
        <div className="news-list__item-date">{date}</div>
        <div className="news-list__item-title">{title}</div>
      </div>
    </div>
  )
};

export class NewsList extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
  };

  render() {
    const {className} = this.props;

    return (
      <div className={cn("container news-list_wrapper", className)}>
        <div className="content">
          <div className="news-list">
            <h2 className="news-list__title">Валютные новости</h2>
            <div className="news-list__content">
              {data.map((item, index) => (
                oneSlideDefault({...item, index})
              ))}

            </div>
            <div className="news-list__mobile">
              <CurrenciesSlider
                renderList={data}
                oneSlide={oneSlideDefault}
                height="360px"
                displaySellBuy={false}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
