import React, {PureComponent} from 'react';
import {InputForm, Button, Checkbox} from 'components';

import './modal-form.scss'

export default class ModalForm extends PureComponent {
  render() {

    return (
      <form
        className="modal-form"
        onSubmit={e => {
          const { showModal, MODAL_TYPES } = this.props;
          e.preventDefault();
          showModal(MODAL_TYPES.confirm)
        }}
      >
        <div className="modal-form__title">
          Оставьте контакты, и мы вам перезвоним!
        </div>
        <InputForm
          className="mt-5"
          style={{
            background: '#fff'
          }}
          label="Имя"
          name="name"
        />
        <InputForm
          className="mt-5"
          style={{
            background: '#fff'
          }}
          label="Телефон"
          name="phone"
        />
        <InputForm
          className="mt-5"
          style={{
            background: '#fff'
          }}
          label="E-mail"
          name="email"
        />
        <Checkbox
          className="mt-5"
          label="Согласен на передачу обработку"
          textLink="персональных данных"
          link="https://www.google.com/"
        />
        <Button
          type="submit"
          className="modal-form__button"
        >
          Отправить
        </Button>
      </form>
    )
  }
}