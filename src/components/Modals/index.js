import React, {PureComponent } from "react";
import PropTypes from 'prop-types';
import ModalBase from 'react-modal';
import ModalForm from "./modal-form";
import ConfirmModal from "./confirm-modal";


import './index.scss'

export class Modal extends PureComponent {

  static propTypes = {
    modalIsOpen: PropTypes.bool
  };

  static defaultProps = {
    modalIsOpen: false
  };

  render() {
    const { modalIsOpen, hideModal, modalType, MODAL_TYPES } = this.props;
    return (
      <ModalBase
        isOpen={modalIsOpen}
        className="modal__window"
        overlayClassName="modal__overlay"
        ariaHideApp={false}
        shouldCloseOnOverlayClick={true}
        onRequestClose={hideModal}

      >
        {modalType === MODAL_TYPES.form && <ModalForm {...this.props}/>}
        {modalType === MODAL_TYPES.confirm && <ConfirmModal/>}
      </ModalBase>
    )
  }
}