import React from "react"
import { Link } from "gatsby"
import MediaQuery from 'react-responsive'
import GeneralNavigation from '~c/includes/GeneralNavigation'
import { useSelector } from 'react-redux'
import { animateScroll as scroll } from "react-scroll";
import Img from '~c/general/Image'
import Content from "~u/Content"
import { useStaticQuery, graphql } from 'gatsby'
import useScrollTop  from "~h/useScrollTop"
import Logo  from "~img/logo.svg"

function Navigation() {
  const state = useSelector(props => props); 
  const content = Content(useNavigationQuery())
  const scrollingToTop = () => {
    scroll.scrollToTop()
  }
  const scrolTopMenu = useScrollTop( 50).scrollStarted

  return ( 
      <header className={"header mobile-none" + (scrolTopMenu ? 'active' : null)}>
        <div className="container">
          <nav className="navigation">
            <Link
              to={`/${state.languageValue === "uk" ? "" : state.languageValue}`}
              className="navigation_logo"
              onClick={scrollingToTop}
            >
                <svg viewBox="0 0 320 32.664339801673265" height="32.664339801673265" width="320"  ><defs id="SvgjsDefs1011"><linearGradient id="SvgjsLinearGradient1016"><stop id="SvgjsStop1017" 
              stop-color="#B8BBBF" offset="0"></stop><stop id="SvgjsStop1018" 
              stop-color="#ffffff" offset="0.5"></stop><stop id="SvgjsStop1019" 
              stop-color="#B8BBBF" offset="1"></stop></linearGradient><linearGradient id="SvgjsLinearGradient1020"><stop id="SvgjsStop1021" 
              stop-color="#ffffff" offset="0"></stop><stop id="SvgjsStop1022" 
              stop-color="#ffffff" offset="0.5"></stop><stop id="SvgjsStop1023" 
              stop-color="#B8BBBF" offset="1"></stop></linearGradient></defs><g id="SvgjsG1012" featurekey="symbolFeature-0" transform="matrix(1.1148266707855738,0,0,1.1148266707855738,406.5773344660328,-324.5261187136626)" fill="url(#SvgjsLinearGradient1016)"><path xmlns="http://www.w3.org/2000/svg" d="M-275,299.1c0,0-7.7,1.3-10.1,0.7c-2.4-0.6-4.5-2.4-6.2-2.9c-1.7-0.5-3-0.4-4.6,0.5s-2.9,2.6-4.6,3.2  c-1.7,0.6-3,0-5-1.4c-1.9-1.4-4.8-3-6.7-3.9c-2-0.9-6.9-2.7-10.1-3.3c-3.4-0.6-6.1-0.9-7.6-0.9c-1.4,0-2.9,0.1-4.8,1.1  c-1.8,1-5.1,3.1-6.5,3.2c-1.7,0.2-5.3,0.1-10.4,0.2c-2.5,0.1-5.2,0.5-7.8,1.9c-3,1.6-5.1,3.9-5.1,3.9l-0.2,0.8c0,0,2.2-2.3,5.1-3.9  c2.5-1.4,4.7-1.9,7.1-2c5.1-0.1,8.7,0.1,10.4-0.1c1.4-0.1,4.7-2.2,6.5-3.2c1.8-1,3.3-1.1,4.7-1.1c1.5,0,4.3,0.2,7.7,0.8  c3.3,0.6,8.2,2.4,10.2,3.3c2,0.9,4.8,2.5,6.7,3.9c1.9,1.4,3.3,2,5,1.4c1.7-0.6,2.9-2.3,4.6-3.2c1.6-0.9,2.9-1,4.6-0.5  c1.7,0.5,3.8,2.3,6.2,2.9c2.4,0.6,10.1-0.7,10.1-0.7L-275,299.1z"></path><path xmlns="http://www.w3.org/2000/svg" d="M-352.9,297.6c-2.3,0-4.2,1.9-4.2,4.2c0,2.3,1.9,4.2,4.2,4.2s4.2-1.9,4.2-4.2  C-348.6,299.5-350.5,297.6-352.9,297.6z M-352.4,305.3c-1.9,0-3.4-1.5-3.4-3.4c0-1.9,1.5-3.4,3.4-3.4c1.9,0,3.4,1.5,3.4,3.4  C-349.1,303.8-350.6,305.3-352.4,305.3z M-352.4,305c-1.7,0-3-1.4-3-3c0-1.7,1.4-3,3-3c1.7,0,3,1.4,3,3  C-349.4,303.6-350.8,305-352.4,305z"></path><path xmlns="http://www.w3.org/2000/svg" d="M-321.4,297.6c-2.3,0-4.2,1.9-4.2,4.2c0,2.3,1.9,4.2,4.2,4.2s4.2-1.9,4.2-4.2  C-317.2,299.5-319.1,297.6-321.4,297.6z M-321.8,305.2c-1.9,0-3.4-1.5-3.4-3.4c0-1.9,1.5-3.4,3.4-3.4c1.9,0,3.4,1.5,3.4,3.4  C-318.4,303.7-319.9,305.2-321.8,305.2z M-321.8,304.9c-1.7,0-3-1.4-3-3c0-1.7,1.4-3,3-3c1.7,0,3,1.4,3,3  C-318.8,303.5-320.1,304.9-321.8,304.9z"></path><path xmlns="http://www.w3.org/2000/svg" d="M-348.6,303.8c0,0,5.4-0.1,11.4-0.1c6-0.1,11.6-0.5,11.6-0.5l-0.6-1c0,0-5.8,0.5-10.9,0.7  s-10.8,0.3-10.8,0.3L-348.6,303.8z"></path><path xmlns="http://www.w3.org/2000/svg" d="M-340.1,296.1c0,0,9.3-0.1,11,0c1.6,0.1,2-0.7,2.2-1c0.1-0.3,0.8-2.3,0.8-2.3l-1-0.1c0,0-0.7,1.9-0.8,2.2  c-0.1,0.4-0.3,1.1-1.9,1.1c-1.7-0.1-9.8,0-9.8,0L-340.1,296.1z"></path><path xmlns="http://www.w3.org/2000/svg" d="M-316.4,301.4c0,0,2.8-0.7,5-1.8c0.9-0.5,1.8-1.3,1.8-1.3l-1.4-0.8c0,0-0.6,0.6-1.5,1  c-2.4,1.3-4.5,1.9-4.5,1.9L-316.4,301.4z"></path><path xmlns="http://www.w3.org/2000/svg" d="M-358,303.8l0.7-0.6c0,0-2,0.1-3.7,0c-1.6-0.1-2.7-0.3-2.7-0.3l-0.4,0.3c0,0,1.5,0.3,3.1,0.5  C-359.4,303.8-358,303.8-358,303.8z"></path><path xmlns="http://www.w3.org/2000/svg" d="M-311.9,297.1c0,0-1.6-0.6-6.5-1.5c-5.7-1-8.7,1.7-8.7,1.7l-0.4,0.4c0,0,3-2.7,8.5-1.7  c4.8,0.9,6.4,1.5,6.4,1.5L-311.9,297.1z"></path><path xmlns="http://www.w3.org/2000/svg" d="M-327.6,297.3c0,0-2.7,0.1-6.9,0.1c-4.2,0-9.1-0.2-15-0.6s-9.3,1.8-9.3,1.8l-0.6,0.5c0,0,3.5-2.3,9.4-2  c5.9,0.4,10.7,1,14.9,1s6.7-0.1,6.7-0.1L-327.6,297.3z"></path><path xmlns="http://www.w3.org/2000/svg" d="M-300,320.4"></path></g><g id="SvgjsG1013" featurekey="nameFeature-0" transform="matrix(0.7523322402765684,0,0,0.7523322402765684,119.78934645613701,-3.155227788399669)" fill="url(#SvgjsLinearGradient1020)"><path d="M28 30.84 c0 4.2 -2.48 6.48 -3.72 7.4 c-3.64 2.68 -8.4 2.6 -9.6 2.6 c-4.12 0 -8.04 -0.68 -11.4 -3.2 c-1.28 -0.96 -2.04 -1.8 -3 -3.04 l6.84 -4.36 c0.6 0.96 0.96 1.4 1.36 1.72 c1.6 1.4 4.56 2 6.52 2 c2.52 0 4.28 -0.76 4.28 -2.16 c0 -0.32 -0.16 -0.56 -0.2 -0.68 c-0.2 -0.4 -0.52 -0.76 -1.36 -1.04 c-1 -0.36 -2.8 -0.6 -5.32 -1.12 c-3.88 -0.76 -5.96 -1.72 -7.32 -2.92 c-0.88 -0.76 -2.48 -2.64 -2.44 -5.72 c0 -0.76 0.04 -2.48 1.04 -4.28 c2.88 -5.28 10.36 -5.2 11.44 -5.2 c1.44 0 6.52 0.08 10.56 3.04 c0.88 0.64 1.4 1.2 2.16 1.96 l-5.64 4.68 c-0.36 -0.48 -0.56 -0.72 -0.8 -0.92 c-1.64 -1.52 -4.48 -1.96 -6.6 -1.96 c-0.2 0 -1.28 0 -2.12 0.36 c-0.16 0.08 -1.12 0.52 -1.12 1.48 c0 0.52 0.32 1 0.72 1.28 c0.72 0.44 2.4 0.76 3.16 0.88 c1 0.16 3.64 0.52 6.44 1.44 c1.76 0.56 6.12 2.12 6.12 7.76 z M51.6 19.28 l-6.88 20.72 l-8.76 0 l-6.92 -20.72 l8.72 0 l2.52 12.8 l2.68 -12.8 l8.64 0 z M61.56 17.24 l-8.24 0 l0 -5.48 l8.24 0 l0 5.48 z M61.56 40 l-8.24 0 l0 -20.72 l8.24 0 l0 20.72 z M86.6 40 l-7.96 0 l-0.04 -1.48 c-0.08 0.08 -0.44 0.52 -0.84 0.84 c-1.16 0.84 -2.92 1.16 -4.36 1.16 c-2.2 0 -3.76 -0.72 -4.48 -1.16 c-4.76 -2.72 -4.88 -9 -4.84 -10.2 c0 -0.72 0 -2.64 0.72 -4.64 c0.64 -1.72 2.84 -5.84 8.36 -5.84 c0.64 0 2.48 0.04 4.12 1.12 c0.36 0.24 0.56 0.4 1.12 0.92 l0 -8.96 l8.2 0 l0 28.24 z M78.6 29.560000000000002 c0 -1.16 -0.08 -2.36 -0.64 -3.4 c-0.76 -1.36 -2.04 -1.6 -2.6 -1.6 c-0.6 0 -1.24 0.24 -1.72 0.6 c-0.92 0.72 -1.44 2.04 -1.44 4.44 c0 1.28 0.2 3.08 1.16 4.08 c0.48 0.52 1.32 0.88 2.08 0.88 c0.8 0 1.4 -0.36 1.6 -0.52 c1.44 -1 1.56 -2.96 1.56 -4.48 z M112.19999999999999 40 l-8.24 0 l0 -11.32 c0 -0.48 0 -0.92 -0.12 -1.4 c-0.2 -0.72 -0.8 -1.72 -2.68 -1.72 c-3.04 0 -3 2.52 -3 3.4 l0 11.04 l-8.2 0 l0 -20.72 l7.76 0 l0 2.76 c0.52 -0.76 0.6 -0.84 1 -1.24 c1.52 -1.52 3.72 -2.08 5.84 -2.08 c0.76 0 3.32 0.04 5.28 1.72 c1.08 0.88 1.76 2.24 2.08 3.6 c0.16 0.68 0.28 1.4 0.28 2.88 l0 13.08 z M124.08 17.24 l-8.24 0 l0 -5.48 l8.24 0 l0 5.48 z M124.08 40 l-8.24 0 l0 -20.72 l8.24 0 l0 20.72 z M140.6 39.84 c-0.68 0.08 -2.96 0.44 -5.2 0.44 c-4.36 0 -6 -1.68 -6.6 -3.76 c-0.2 -0.76 -0.24 -1.52 -0.24 -2.24 l0.12 -10.04 l-2.84 0 l0 -4.48 l2.88 0 l0.08 -6.52 l8.28 0 l-0.04 6.52 l3.52 0 l0 4.48 l-3.6 0 l-0.12 7.96 c0 0.84 0.12 2.16 2.28 2.16 c0.48 0 0.68 0 1.48 -0.16 l0 5.64 z M161.76 33.08 c0 1.2 -0.24 2.28 -0.84 3.36 c-2.36 4.28 -7.88 4.36 -9 4.36 c-3.08 0 -6.24 -0.88 -8.84 -2.52 c-0.8 -0.48 -1.52 -1.08 -2.28 -1.64 l4.64 -4.2 c0.4 0.36 0.76 0.68 1.16 1 c0.68 0.48 2.72 1.76 5.24 1.76 c0.2 0 0.84 0 1.36 -0.24 c0.6 -0.28 0.8 -0.8 0.8 -1.08 c0 -0.24 -0.12 -0.44 -0.16 -0.48 c-0.52 -0.8 -1.44 -0.72 -3 -1 c-0.48 -0.08 -2.44 -0.48 -4.08 -1.04 c-1.92 -0.64 -3.4 -1.4 -4.32 -3.36 c-0.36 -0.8 -0.56 -1.6 -0.56 -2.48 c0 -1.8 0.84 -3.16 1.2 -3.68 c1.2 -1.68 3.56 -3.4 8.2 -3.4 c2.48 0 5.64 0.52 7.88 1.68 c0.76 0.4 1.32 0.8 2 1.32 l-4.44 4.04 c-0.6 -0.4 -2.8 -2 -5.32 -2 c-0.16 0 -0.72 0 -1.16 0.2 c-0.48 0.24 -0.6 0.68 -0.6 0.88 c0 0.52 0.44 0.76 0.56 0.8 c0.36 0.2 1.16 0.36 2.16 0.6 c3.04 0.76 4.8 1.04 6.12 1.72 c1.04 0.52 3.28 2.12 3.28 5.4 z M185.72 40 l-8.12 0 l0 -1.6 c-0.32 0.24 -0.72 0.56 -1.52 0.96 c-0.88 0.44 -2.76 1.12 -5.36 1.12 c-0.52 0 -1.92 0 -3.32 -0.52 c-2.68 -1.04 -4.12 -3.36 -4.12 -6.16 c0 -1.12 0.24 -3.6 2.84 -5.36 c1.72 -1.16 3.92 -1.44 5.92 -1.72 c1.16 -0.16 2.4 -0.32 3.56 -0.56 c0.52 -0.12 1.08 -0.24 1.6 -0.4 c0 -0.08 0 -0.64 -0.12 -0.96 c-0.24 -0.84 -0.84 -1.44 -2.68 -1.44 c-0.6 0 -1 0.08 -1.2 0.12 c-1.28 0.32 -1.4 1.4 -1.52 1.84 l-7.72 0.2 c0.08 -0.44 0.2 -0.84 0.28 -1.24 c0.2 -0.8 0.64 -2.24 2.28 -3.52 s4.16 -2.16 8.64 -2.16 c3.24 0 7.64 0.52 9.24 3.88 c0.44 0.92 0.6 1.76 0.6 3.68 l0 11.28 c0 1.52 0.2 1.84 0.72 2.56 z M177.16000000000003 30.36 c-1.04 0.36 -2.08 0.68 -3.12 0.96 c-0.88 0.2 -2.12 0.48 -2.76 1.28 c-0.08 0.12 -0.36 0.48 -0.36 0.96 c0 0.64 0.52 1.6 2.04 1.6 c0.72 0 1.36 -0.24 2 -0.56 c2.32 -1.24 2.2 -3.28 2.2 -4.24 z M209.92000000000002 18.72 l-7.16 0 l0 21.28 l-8.92 0 l0 -21.28 l-7.2 0 l0 -6.96 l23.28 0 l0 6.96 z M231.07999999999998 40 l-8.12 0 l0 -1.6 c-0.32 0.24 -0.72 0.56 -1.52 0.96 c-0.88 0.44 -2.76 1.12 -5.36 1.12 c-0.52 0 -1.92 0 -3.32 -0.52 c-2.68 -1.04 -4.12 -3.36 -4.12 -6.16 c0 -1.12 0.24 -3.6 2.84 -5.36 c1.72 -1.16 3.92 -1.44 5.92 -1.72 c1.16 -0.16 2.4 -0.32 3.56 -0.56 c0.52 -0.12 1.08 -0.24 1.6 -0.4 c0 -0.08 0 -0.64 -0.12 -0.96 c-0.24 -0.84 -0.84 -1.44 -2.68 -1.44 c-0.6 0 -1 0.08 -1.2 0.12 c-1.28 0.32 -1.4 1.4 -1.52 1.84 l-7.72 0.2 c0.08 -0.44 0.2 -0.84 0.28 -1.24 c0.2 -0.8 0.64 -2.24 2.28 -3.52 s4.16 -2.16 8.64 -2.16 c3.24 0 7.64 0.52 9.24 3.88 c0.44 0.92 0.6 1.76 0.6 3.68 l0 11.28 c0 1.52 0.2 1.84 0.72 2.56 z M222.51999999999998 30.36 c-1.04 0.36 -2.08 0.68 -3.12 0.96 c-0.88 0.2 -2.12 0.48 -2.76 1.28 c-0.08 0.12 -0.36 0.48 -0.36 0.96 c0 0.64 0.52 1.6 2.04 1.6 c0.72 0 1.36 -0.24 2 -0.56 c2.32 -1.24 2.2 -3.28 2.2 -4.24 z M256.28 40 l-8.8 0 l-3.4 -6.72 l-3.36 6.72 l-8.84 0 l6.96 -10.88 l-6.16 -9.84 l8.84 0 l2.56 6.2 l2.72 -6.2 l8.88 0 l-6.28 9.8 z M266.12 17.24 l-8.24 0 l0 -5.48 l8.24 0 l0 5.48 z M266.12 40 l-8.24 0 l0 -20.72 l8.24 0 l0 20.72 z"></path></g></svg>
            
             </Link>
            <GeneralNavigation />
          </nav>
        </div>
      </header>
    
  )
}

export default Navigation


export const useNavigationQuery = () =>
  useStaticQuery(graphql`
    query NavigationQuery {
      allFile(filter: {name: {eq: "header"}}) {
        nodes {
          childEnJson {
            logo
          }
          childUkJson {
            logo
          }
          sourceInstanceName
        }
      }
    }
  `).allFile.nodes