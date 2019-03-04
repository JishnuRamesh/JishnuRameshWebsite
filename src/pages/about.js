import React from "react"
import { Link } from "gatsby"

import Pages from "../components/pages"
import SEO from "../components/seo"


const AboutPage = () => (
  <Pages>
    <SEO title="About" />
    <div className="side-menu">
    
    <div className="about-menu"  style={{overflow:"hidden"}}>

    <Link to="/" style={{textDecoration:"none", display:"block"}} className="about-menu-items" >Home</Link>
    <Link to="/about/"  style={{textDecoration:"none", display:"block",  color:"white"}} className="about-menu-items" >About</Link>
    <Link to="/projects/"  style={{textDecoration:"none", display:"block"}} className="about-menu-items" >Projects</Link>
    <Link to="/contact/"  style={{textDecoration:"none", display:"block"}} className="about-menu-items"  >Contact</Link>
    

    </div>
    
    </div>
    <div className="main-content about-me">
    <h1 className="text-center justify">ABOUT ME </h1>
    <div className="text-center">
    <p className="justify">I am an aspiring software developer. I mostly code in Python and Javascript </p>
    <p  className="justify"> Currently i'm pursuing my Master's in Information Technology at Monash Univeristy.
    I completed my undergraduete in Electronics and Telecommunication Engineering from Kerala Univeristy in India</p>
    <p  className="justify"> My favorite stack right now js React.Js on the frontend and ASP.Net in the backend. I have also worked with Java, Mongo DB, Django</p>
    <p  className="justify"> Previously i used to work as a software test engineer as a contract employee for Intel Co-operation</p>
    <p  className="justify"> During my off time i love to watch football. I am an avid Manchster United Fan</p>
    </div>
    </div>
  </Pages>
)

export default AboutPage
