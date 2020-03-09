import React, {PureComponent} from "react";
import PropTypes from 'prop-types';
import cn from 'classnames'
import data from './data'

import {InputField, FlagSelect, Button} from 'components';

import './calculator.scss'

const ResultData = props => {
  const {label, value, className, suffix} = props;
  return (
    <div className={cn("calculator__result", className)}>
      <div className="calculator__result-label">
        {label}
      </div>
      <div className="calculator__result-value">
        {value} {suffix}
      </div>
    </div>
  )
};

export class Calculator extends PureComponent {
  static defaultProps = {
    className: PropTypes.string,
  };

  state = {
    course: data[0].buy,
    sum: 0,
    commission: 0,
    courseCommission: (data[0].buy * 1.01).toFixed(4),
    total: 0,
    suffix: '$'
  };

  changeCurrency = ({suffix, buy}) => {
    const courseCommission = (buy * 1.01).toFixed(4);
    this.setState(state => ({
      suffix,
      course: buy,
      courseCommission: courseCommission,
      total: (courseCommission * state.sum).toFixed(2),
      commission: ((courseCommission * state.sum) * 0.01).toFixed(0)
    }));
  };

  setSum = (value) => {
    this.setState(state => {
      const courseCommission = (state.course * 1.01).toFixed(4);
      return ({
        sum: value,
        courseCommission: courseCommission,
        total: (courseCommission * state.sum).toFixed(2),
        commission: ((courseCommission * state.sum) * 0.01).toFixed(0)
      })
    })
  };

  render() {
    let {
      suffix,
      course,
      sum,
      commission,
      courseCommission,
      total,
    } = this.state;
    const {className} = this.props;
    return (
      <div className="container">
        <div className="content">
          <div className={cn("calculator", className)}>
            <h2 className="calculator__title">
              Калькулятор
            </h2>
            <div className="calculator__content">
              <div className="calculator__left">
                <InputField
                  suffix={suffix}
                  label="Валюта"
                  disabled
                  value={course}
                  Node={
                    <FlagSelect
                      className="ml-2"
                      options={data}
                      onChange={this.changeCurrency}
                    />
                  }
                />
                <InputField
                  suffix="$"
                  className="mt-5"
                  label="Сумма покупки"
                  value={sum}
                  onChange={this.setSum}
                />
              </div>
              <div className="calculator__right">
                <ResultData
                  label="Комиссия за сделку и вывод валюты5"
                  value={String(commission).replace('.', ',')}
                  suffix={suffix}
                />
                <ResultData
                  className="mt-5"
                  label="Курс с учетом комиссии"
                  value={String(courseCommission).replace('.', ',')}
                  suffix={suffix}
                />
                <ResultData
                  className="mt-5 calculator__result_total"
                  label="Общая сумма сделки*"
                  value={String(total).replace('.', ',')}
                  suffix={suffix}
                />
              </div>
            </div>
            <Button
              className="calculator__button"
            >
              Узнать больше
            </Button>
          </div>
        </div>
      </div>
    )
  }
}