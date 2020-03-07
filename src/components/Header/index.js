import React, {PureComponent} from "react";
import {ReactComponent as Logo} from './logo.svg'
import {ReactComponent as MobileLogo} from './mobile-logo.svg'
import './header.scss'

export class Header extends PureComponent {
  render() {
    return (
      <div className="container page-header_container">
        <div className="content">
          <header className="page-header">
            <Logo className="page-header__logo"/>
            <div className="page-header__open">Открыть счет</div>
            <div className="page-header__divider"/>
            <a className="page-header__number" href="tel:88005005545">8 800 500 55 45</a>
          </header>
        </div>
        <header className="page-header-mobile">
          <div className="page-header-mobile__top">
            <MobileLogo/>
            <div className="page-header-mobile__open">
              Открыть счет
            </div>
          </div>
          <div className="page-header-mobile__bottom">
            Финансовые услуги на рынке ценных бумаг для компаний
          </div>
        </header>
      </div>
    )
  }
}