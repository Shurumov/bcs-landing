import React, {Component} from 'react';
import {
  Header,
  Slider,
  Currencies,
  Calculator,
  NewsList,
  Reasons,
  OpenAccount,
  Footer,
  Modal,
} from 'components'

import 'styles/index.scss';

const MODAL_TYPES = {
  form: 'form',
  confirm: 'confirm',
};

export class App extends Component {

  showModal = (type = MODAL_TYPES.form) => {
    this.setState({
      modalIsOpen: true,
      modalType: type,
    })
  };

  hideModal = () => {
    this.setState({
      modalIsOpen: false,
      modalType: null,
    })
  };

  state = {
    modalIsOpen: false,
    modalType: ''
  };

  render() {
    const modalActions = {
      modalIsOpen: this.state.modalIsOpen,
      showModal: this.showModal,
      hideModal: this.hideModal,
      modalType: this.state.modalType,
      MODAL_TYPES,
    };

    return (
      <div className="App">
        <Header
        />
        <Slider
          {...modalActions}
        />
        <Currencies
          className="block_separate"
        />
        <Calculator
          className="block_separate"
          {...modalActions}
        />
        <NewsList
          className="block_separate"
        />
        <Reasons
          className="block_separate"
        />
        <OpenAccount
          className="block_separate"
          {...modalActions}
        />
        <Footer/>
        <Modal
          {...modalActions}
        />
      </div>
    );
  }

}

export default App;
