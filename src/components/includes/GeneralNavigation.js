/* eslint-disable react/no-array-index-key */
/* eslint-disable no-unreachable */
/* eslint-disable no-unused-expressions */
import React from 'react'
import { Link } from 'react-scroll'
import { Link as LinkPage } from "gatsby"
import content_EN from '~d/en/header.json'
import content_UK from '~d/uk/header.json'
import { useSelector } from 'react-redux'

const GeneralNavigation = () => {

  const state = useSelector(props => props);
  let content = (state.languageValue === "uk" ? content_UK : content_EN);

  return (
    <div className="navigation_menu">
      <div className="navigation_menu_list">
        {content.list.map((data, index) => {
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
        <LinkPage
          to="/en"
          className={`navigation_menu_language_link ${state.languageValue !== "uk" ? "navigation_menu_language_link_active" : ""}`}
        >
          ENG
        </LinkPage>
        <p className="navigation_menu_language_link navigation_menu_language_link-between">
          /
        </p>
        <LinkPage
          to="/"
          className={`navigation_menu_language_link ${state.languageValue === "uk" ? "navigation_menu_language_link_active" : ""}`}
        >
          UKR
        </LinkPage>
      </div>
    </div>
  )
}


export default GeneralNavigation