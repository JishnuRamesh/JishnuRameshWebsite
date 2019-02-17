import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
import MobileMenu from "../components/hamburger"


const PagesLayout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery1 {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
      <div className="pages">
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

PagesLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default PagesLayout
