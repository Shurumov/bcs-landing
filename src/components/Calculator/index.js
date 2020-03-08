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
    course: 0,
    sum: 0,
    commission: 0,
    courseCommission: 0,
    total: 0,
    suffix: '$'
  };

  changeSuffix = ({suffix}) => {
    this.setState({
      suffix
    })
  };

  setValue = ({value, key}) => {
    this.setState({
      [key]: value,
    })
  };

  render() {
    const {suffix} = this.state;
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
                  Node={
                    <FlagSelect
                      className="ml-2"
                      options={data}
                      onChange={this.changeSuffix}
                    />
                  }
                />
                <InputField
                  suffix="$"
                  className="mt-5"
                  label="Сумма покупки"
                />
              </div>
              <div className="calculator__right">
                <ResultData
                  label="Комиссия за сделку и вывод валюты5"
                  value="12 500"
                  suffix={suffix}
                />
                <ResultData
                  className="mt-5"
                  label="Курс с учетом комиссии"
                  value="63,3225"
                  suffix={suffix}

                />
                <ResultData
                  className="mt-5 calculator__result_total"
                  label="Общая сумма сделки*"
                  value="63,3225"
                  suffix={suffix}
                />
              </div>
            </div>
            <Button
              className="mt-17"
            >
              Узнать больше
            </Button>
          </div>
        </div>
      </div>
    )
  }
}