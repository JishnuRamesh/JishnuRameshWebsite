import React from "react"
import { Link } from "gatsby"
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import FaIconPack, { FaFacebookOfficial, FaEnvelope, FaTwitter, FaInstagram, FaGithub } from 'react-icons/lib/fa';



import Pages from "../components/pages"
import SEO from "../components/seo"


const ContactPage = () => (
  <Pages>
    <SEO title="Contact" />
    <div className="side-menu">
      
      <div className="about-menu"  style={{overflow:"hidden"}}>
  
      <Link to="/" style={{textDecoration:"none", display:"block"}} className="about-menu-items" >Home</Link>
      <Link to="/about/"  style={{textDecoration:"none", display:"block"}} className="about-menu-items" >About</Link>
      <Link to="/projects/"  style={{textDecoration:"none", display:"block"}} className="about-menu-items" >Projects</Link>
      <Link to="/contact/"  style={{textDecoration:"none", display:"block" , color:"white"}} className="about-menu-items"  >Contact</Link>
      
  
      </div>
    </div>

    <div className="main-content about-me">

    <h1 className="text-center">CONTACT </h1>

    <div className="text-center">
      
      <a className="no-hover" href="mailTo:jishnur23@gmail.com" target="_blank"> <FaEnvelope  className="font-awesome-icons" style={{color:"ea4335"}} /> </a>
      <a className="no-hover" href="https://www.facebook.com/jishnuramesh" target="_blank">   <FaFacebookOfficial  className="font-awesome-icons" style={{color:"3b5998"}}/> </a>
      <a className="no-hover" href="https://twitter.com/jish_r" target="_blank"> <FaTwitter className="font-awesome-icons" style={{color:"1da1f2"}} /> </a>
      <a className="no-hover" href="https://www.instagram.com/jish_r/" target="_blank"> <FaInstagram className="font-awesome-icons"  style={{color:"f56040"}}  /> </a>
      <a className="no-hover" href="https://github.com/JishnuRamesh" target="_blank"> <FaGithub className="font-awesome-icons"  style={{color:"6cc644"}}/> </a>
      
       
       
      </div>

    </div>
 
  </Pages>
)

export default ContactPage
