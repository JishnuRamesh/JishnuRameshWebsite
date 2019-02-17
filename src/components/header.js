import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Logo from "../images/JR Logo_Colour.png"
import Logo_black from "../images/JR Logo_Black.png"

const Header = ({ siteTitle }) => (
  <header style={{margin:10+"px"}}>
    <div>
      <h1   style={{ margin: 0 }}>
        <Link
          to="/"
        >
          <span className="logo-orange" > <img src={Logo} alt="logo" height={60+"px"} /></span>
          <span className="logo-black"> <img src={Logo_black} alt="logo" height={60+"px"} /></span>
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
