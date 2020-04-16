import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import '../../styles/main.scss'
import Header from '../includes/Navigation'
import HeaderMobile from '../includes/NavigationMobile'
import Footer from '../includes/Footer'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteQuery {
        site {
          siteMetadata {
            title
          }
        }
        gatsbyImages: allFile {
          edges {
            node {
              childImageSharp {
                fixed {
                  ...GatsbyImageSharpFixed
                  originalName
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet title={data.site.siteMetadata.title}>
          <html lang="en" />
        </Helmet>
        <Header />
        <HeaderMobile />
        <main className="main">{children}</main>
        <Footer />
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
