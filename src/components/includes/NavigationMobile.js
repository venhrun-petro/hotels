/* eslint-disable no-unused-expressions */
/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/destructuring-assignment */
import React from 'react'
import { Link, animateScroll as scroll } from 'react-scroll'
import MediaQuery from 'react-responsive'
import GeneralNavigation from './GeneralNavigation'
import JSONData from '../../../content/header.json'

export default class NavigationMobile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      displayMenu: false
    }
    this.showDropdownMenu = this.showDropdownMenu.bind(this)
  }

  scrollToTop = () => {
    scroll.scrollToTop()
  }

  showDropdownMenu(event) {
    event.preventDefault()
    !this.state.displayMenu
      ? this.setState({ displayMenu: true })
      : this.setState({ displayMenu: false })
  }

  render() {
    return (
      <MediaQuery maxDeviceWidth={767.97}>
        <header className="header">
          <div className="container">
            <nav className="navigation">
              <Link
                to="/"
                className="navigation_logo"
                onClick={this.scrollToTop}
              >
                <img
                  src={JSONData.logo}
                  alt="brand-logo"
                  className="navigation_logo_img"
                />
              </Link>
              {this.state.displayMenu ? <GeneralNavigation /> : null}
              <div className="burger" onClick={this.showDropdownMenu}>
                <span />
                <span />
                <span />
                <span />
              </div>
            </nav>
          </div>
        </header>
      </MediaQuery>
    )
  }
}
