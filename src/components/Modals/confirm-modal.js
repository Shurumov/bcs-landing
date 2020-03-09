import React, { PureComponent } from "react";

export default class ConfirmModal extends PureComponent{
  render() {
    return(
      <div style={{
        fontSize: '20px',
        lineHeight: '20px',
        color: "#333",
        textAlign: 'center',
      }}>
        Спасибо!
        <br/>
        <br/>
        Мы перезвоним вам  в ближайшее время
      </div>
    )
  }
}