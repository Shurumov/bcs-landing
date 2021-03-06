import React, {Component} from 'react';
import {ReactComponent as Logo} from './logo.svg'

import './footer.scss'

export class Footer extends Component {
  render() {
    return (
      <div className="container">
        <div className="content">
          <footer className="footer">
            <Logo className="footer__logo"/>
            <p>
              © 1995–2019. ООО «Компания БКС» <br/>
              Данные являются биржевой информацией, обладателем (собственником) которой является ПАО Московская Биржа.
              Распространение, трансляция или иное предоставление биржевой информации третьим лицам возможно
              исключительно в порядке и на условиях, предусмотренных порядком использования биржевой информации,
              предоставляемой ОАО Московская Биржа. ООО «Компания БКС», лицензия №154-04434-100000 от 10.01.2001 на
              осуществление брокерской деятельности. Выдана ФСФР. Без ограничения срока действия. <br/>
              129110, Москва, Проспект Мира, 69, стр. 1, 3 подъезд.
            </p>
            <p>
              <sup>1</sup>Расчет приведен при использовании Тарифного плана «Покопеечный». При дневном обороте от 10 000
              001 единицы иностранной валюты комиссия составляет 1 коп. за 1 единицу иностранной валюты, при минимальном
              обороте (до 50 000 ин. валюты) комиссия составляет 10 копеек за 1 единицу иностранной валюты. Тариф не
              включает комиссию за вывод валюты с брокерского счета на банковские реквизиты, отличные от реквизитов БКС
              Банка. Более подробно с условиями тарифного плана «Покопеечный» вы можете ознакомиться в Приложении №11
              (Тарифы) к Регламенту оказания услуг на рынке ценных бумаг ООО «Компания БКС»
              https://broker.ru/regulations
            </p>
            <p><sup>2</sup>Exchange Traded Fund, ETF (англ.) – торгуемый на бирже фонд.</p>
            <p><sup>3</sup>3Объем клиентских операций на срочном рынке ПАО Московская Биржа за 2019 год составил 621
              млрд долларов США (38 трлн рублей по курсу ЦБ РФ на 20.01.2020 г.), подробнее по ссылке. <br/>
              <sup>4</sup>Соотношение оборота на валютном рынке ПАО Московской биржи 76,3 млрд долларов США (в пересчете
              на доллары США по курсу ЦБ РФ на 20.01.2020 г.) и внешнеторгового оборота РФ 57,8 млрд долларов США за
              ноябрь 2019 год, подробнее, подробнее по ссылке1, ссылке2.
            </p>
            <p>
              <sup>5</sup> Расчет произведен с учетом ставок комиссии по тарифному плану «Покопеечный» и не учитывает
              расходы на оплату комиссии за вывод валюты на реквизиты, отличные от АО «БКС Банк», комиссии за
              минимальные лоты, подачу поручений по телефону, налоги и иные расходы. Более подробно в Приложении №11 к
              Регламенту оказания услуг на рынке ценных бумаг ООО «Компания БКС» https://broker.ru/regulations. Курс
              валюты учитывается по цене последней сделки, данные обновляются с задержкой 15 минут (источник данных ПАО
              Московская Биржа).
            </p>
            <p>Материалы, представленные в данном разделе, не являются индивидуальными инвестиционными рекомендациями.
              Финансовые инструменты либо операции, упомянутые в данном разделе, могут не подходить Вам, не
              соответствовать Вашему инвестиционному профилю, финансовому положению, опыту инвестиций, знаниям,
              инвестиционным целям, отношению к риску и доходности. Определение соответствия финансового инструмента
              либо операции инвестиционным целям, инвестиционному горизонту и толерантности к риску является задачей
              инвестора. ООО «Компания БКС» не несет ответственности за возможные убытки инвестора в случае совершения
              операций, либо инвестирования в финансовые инструменты, упомянутые в данном разделе.</p>
            <p>Информация не может рассматриваться как публичная оферта, предложение или приглашение приобрести, или
              продать какие-либо ценные бумаги, иные финансовые инструменты, совершить с ними сделки. Информация не
              может рассматриваться в качестве гарантий или обещаний в будущем доходности вложений, уровня риска,
              размера издержек, безубыточности инвестиций. Результат инвестирования в прошлом не определяет дохода в
              будущем. Не является рекламой ценных бумаг. Перед принятием инвестиционного решения Инвестору необходимо
              самостоятельно оценить экономические риски и выгоды, налоговые, юридические, бухгалтерские последствия
              заключения сделки, свою готовность и возможность принять такие риски. Клиент также несет расходы на оплату
              брокерских и депозитарных услуг, подачи поручений по телефону, иные расходы, подлежащие оплате клиентом.
              Полный список тарифов ООО «Компания БКС» приведен в приложении № 11 к Регламенту оказания услуг на рынке
              ценных бумаг ООО «Компания БКС». Перед совершением сделок вам также необходимо ознакомиться с:
              уведомлением о рисках, связанных с осуществлением операций на рынке ценных бумаг; информацией о рисках
              клиента, связанных с совершением сделок с неполным покрытием, возникновением непокрытых позиций, временно
              непокрытых позиций; заявлением, раскрывающим риски, связанные с проведением операций на рынке фьючерсных
              контрактов, форвардных контрактов и опционов; декларацией о рисках, связанных с приобретением иностранных
              ценных бумаг.</p>
          </footer>
        </div>
      </div>
    )
  }
}