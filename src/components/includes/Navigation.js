/* eslint-disable react/no-array-index-key */
/* eslint-disable no-unreachable */
/* eslint-disable no-unused-expressions */
import React from 'react'
import { Link, animateScroll as scroll } from 'react-scroll'
import MediaQuery from 'react-responsive'
import JSONData from '../../../content/header.json'
import GeneralNavigation from './GeneralNavigation'

export default class Navigation extends React.Component {
  scrollToTop = () => {
    scroll.scrollToTop()
  }

  render() {
    return (
      <MediaQuery minDeviceWidth={767.97}>
        <header className="header">
          <div className="container">
            <nav className="navigation">
              <Link
                to="#about"
                className="navigation_logo"
                onClick={this.scrollToTop}
              >
                <img
                  src={JSONData.logo}
                  alt="brand-logo"
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
}
