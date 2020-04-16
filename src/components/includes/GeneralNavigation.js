/* eslint-disable react/no-array-index-key */
/* eslint-disable no-unreachable */
/* eslint-disable no-unused-expressions */
import React from 'react'
import { Link } from 'react-scroll'
import JSONData from '../../../content/header.json'

const GeneralNavigation = () => (
  <div className="navigation_menu">
    <div className="navigation_menu_list">
      {JSONData.list.map((data, index) => {
        return (
          <Link
            key={`list_item_${index}`}
            to={data.src}
            smooth
            spy
            offset={0}
            duration={600}
            activeClass="active"
            className="navigation_menu_list_link"
          >
            {data.item}
          </Link>
        )
      })}
    </div>
    <div className="navigation_menu_language">
      <Link
        to="/"
        smooth
        spy
        offset={-70}
        duration={600}
        activeClass="active"
        className="navigation_menu_language_link"
      >
        ENG
      </Link>
      <p className="navigation_menu_language_link navigation_menu_language_link-between">
        /
      </p>
      <Link
        to="/"
        smooth
        spy
        offset={-70}
        duration={600}
        activeClass="active"
        className="navigation_menu_language_link navigation_menu_language_link_active"
      >
        UKR
      </Link>
    </div>
  </div>
)

export default GeneralNavigation
