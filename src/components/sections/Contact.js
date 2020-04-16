/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react'
import { Link } from 'react-scroll'
import Map from './Map'
import contactJson from '../../../content/content.json'

// eslint-disable-next-line react/react-in-jsx-scope
const Contact = () => (
  <section className="contact" id="contact">
    <img className="contact_img" src={contactJson.mapImage} alt="teaser" />
    <div className="container-small">
      <div className="contact_cont">
        <h2 className="sub-title">КОНТАКТИ ТА БРОНЮВАННЯ</h2>
        <div className="contact_cont_info">
          <div className="contact_cont_info_items">
            <p className="general_paragraph">вул. Липинського 60а,</p>
            <p className="general_paragraph">Поштовий індекс 79024</p>
            <p className="general_paragraph">Львів, Україна</p>
          </div>
          <div className="contact_cont_info_items">
            <p className="general_paragraph">+38 (032) 242 4 951</p>
            <p className="general_paragraph">+38 (032) 242 49 59</p>
            <p className="general_paragraph">+38 (096) 557 88 88</p>
          </div>
        </div>
        <div className="contact_cont_info">
          <div className="contact_cont_info_items">
            {contactJson.contactSoz.map((data, index) => {
              return (
                <Link
                  // eslint-disable-next-line react/no-array-index-key
                  key={`list_item_${index}`}
                  to={data.src ? data.src : '/'}
                  className="contact_cont_info_items_link"
                >
                  <img src={data.img} alt="soz" />
                </Link>
              )
            })}
          </div>
          <div className="contact_cont_info_items">
            <div className="contact_cont_btn">
              Прокласти шлях
              <div className="contact_cont_btn_mapIcon" />
            </div>
          </div>
        </div>
        <div className="contact_cont_map">
          <Map />
        </div>
      </div>
    </div>
  </section>
)

export default Contact
