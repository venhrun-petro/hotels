/* eslint-disable no-unused-expressions */
/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/destructuring-assignment */
import React, { useState } from 'react'
import { Link } from "gatsby"
import MediaQuery from 'react-responsive'
import GeneralNavigation from '~c/includes/GeneralNavigation'
import Img from '~c/general/Image'
import content_EN from '~d/en/header.json'
import content_UK from '~d/uk/header.json'
import { useSelector } from 'react-redux'


function NavigationMobile() {
  const [displayMenu, setdDisplayMenu] = useState(false);

  const showDropdownMenu = () => {
    !displayMenu
      ? setdDisplayMenu(true)
      : setdDisplayMenu(false)
  }   

  const state = useSelector(props => props);
  let content = (state.languageValue === "uk" ? content_UK : content_EN);  

  return(
    <>
    <MediaQuery maxDeviceWidth={767.97}>
        <header className="header">
          <div className="container">
            <nav className="navigation">
              <Link
                to={`/${state.languageValue === "uk" ? "" : state.languageValue}`}
                className="navigation_logo"
              >
                <Img
                  src={content.logo}
                  className="navigation_logo_img"
                />
              </Link>
              {displayMenu ? <GeneralNavigation /> : null}
              <div className="burger" onClick={showDropdownMenu}>
                  <span />
                  <span />
                  <span />
                  <span />
              </div>
            </nav>
          </div>
        </header>
      </MediaQuery>
    </>
  )
}

export default NavigationMobile
