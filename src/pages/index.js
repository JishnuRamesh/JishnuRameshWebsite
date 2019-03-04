import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"


const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

    <div className="row"   style={{overflow:"hidden"}}>

    <div className="home-menu"  style={{overflow:"hidden"}}>

    <Link to="/" style={{textDecoration:"none", display:"block", color:"black"}} className="home-menu-items" >Home</Link>
    <Link to="/about/"  style={{textDecoration:"none", display:"block"}} className="home-menu-items" >About</Link>
    <Link to="/projects/"  style={{textDecoration:"none", display:"block"}} className="home-menu-items" >Projects</Link>
    <Link to="/contact/"  style={{textDecoration:"none", display:"block"}} className="home-menu-items"  >Contact</Link>
    

    </div>


    <div className="main-text" style={{overflow:"hidden"}}>
    
    <h1 className="name-first no-bottom-margin">JISHNU</h1>
    <h1 className="name-second no-bottom-margin" style={{marginTop:0+"px"}}>RAMESH</h1>

    <p className="program-lang"> I love coding in 
      <span className="program-lang-1">&nbsp;Python </span>
      <span className="program-lang-2">&nbsp;Javascript </span>
    </p>
    
    </div>



    </div>

  </Layout>
)

export default IndexPage
