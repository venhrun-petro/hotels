import React from "react"
import { Link } from "gatsby"
import MediaQuery from 'react-responsive'
import GeneralNavigation from '~c/includes/GeneralNavigation'
import content_EN from '~d/en/header.json'
import content_UK from '~d/uk/header.json'
import { useSelector } from 'react-redux'
import Img from '~c/general/Image'

function Navigation() {
  const state = useSelector(props => props);
  let content = (state.languageValue === "uk" ? content_UK : content_EN);  

  return (
    <MediaQuery minDeviceWidth={767.97}>
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
            <GeneralNavigation />
          </nav>
        </div>
      </header>
    </MediaQuery>
  )
}

export default Navigation
