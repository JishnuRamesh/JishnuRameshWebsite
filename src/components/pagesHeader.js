import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Logo from "../images/JR Logo_Colour.png"
import Logo_black from "../images/JR Logo_Black.png"

const PagesHeader = ({ siteTitle }) => (
  <header style={{margin:10+"px", maxWidth:70+"vw"}}>
    <div>
      <h1   style={{ margin: 0 }}>
        <Link
          to="/"
        >
          <span className="pages-logo-black" > <img src={Logo_black} alt="logo" height={60+"px"} /></span>
          <span className="pages-logo-orange"> <img src={Logo} alt="logo" height={60+"px"} /></span>
        </Link>
      </h1>
    </div>
  </header>
)

PagesHeader.propTypes = {
  siteTitle: PropTypes.string,
}

PagesHeader.defaultProps = {
  siteTitle: ``,
}

export default PagesHeader
