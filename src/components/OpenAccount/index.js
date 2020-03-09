import React, {Component} from "react";
import PropTypes from 'prop-types'
import cn from 'classnames';

import { InputForm, Button, Checkbox } from 'components'

import './open-account.scss'

export class OpenAccount extends Component {
  static propTypes = {
    className: PropTypes.string,
  };

  render() {
    const {className } = this.props;
    return (
      <div className={cn("container open-account_wrapper", className)}>
        <div className="content">
          <div className="open-account">
            <div className="open-account__left">
              <div className="open-account__title">Как открыть счет?</div>
              <div className="open-account__subtitle">Введите Ваши данные<br/>и с вами свяжется финансовый советник</div>
            </div>
            <div className="open-account__right">
              <form
                className="open-account__form"
                onSubmit={(e) => {
                  const {showModal, MODAL_TYPES } = this.props;
                  e.preventDefault();
                  showModal(MODAL_TYPES.confirm)
                } }
              >
                <InputForm
                  label="ИНН/ОГРН компании"
                  name="inn"
                />
                <InputForm
                  className="mt-5"
                  label="Наименование компании"
                  name="companyName"
                  isRequired
                />
                <InputForm
                  className="mt-5"
                  label="ФИО контактного лица"
                  name="fullName"
                  isRequired
                />
                <InputForm
                  className="mt-5"
                  label="Телефон"
                  name="phone"
                  isRequired
                />
                <InputForm
                  className="mt-5"
                  label="E-mail"
                  name="email"
                  isRequired
                />
                <Checkbox
                  className="mt-5"
                  label="Согласен на передачу обработку"
                  textLink="персональных данных"
                  link="https://www.google.com/"
                />
                <Button
                  className="open-account__form-submit"
                  type="submit"
                >
                  Отправить
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}