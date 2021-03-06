import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
import MobileMenu from "../components/hamburger"
import "./layout.css"


const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (

      <>
        <div className="home">
        <Header siteTitle={data.site.siteMetadata.title} />
        <div className="container"
        >
          <main>{children}</main>
          
        </div>
        <div className="mobile-menu">

        <MobileMenu/>

      
        
        </div>
        </div>
        
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
