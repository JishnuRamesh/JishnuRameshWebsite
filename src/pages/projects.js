
import React from 'react';
import { Link } from "gatsby"
import 'bootstrap/dist/css/bootstrap.min.css';
import Pages from "../components/pages"
import SEO from "../components/seo"



const ProjectPage = () => (
    <Pages>
      <SEO title="Projects" />
      <div className="side-menu">
      
      <div className="about-menu"  style={{overflow:"hidden"}}>
  
      <Link to="/" style={{textDecoration:"none", display:"block"}} className="about-menu-items" >Home</Link>
      <Link to="/about/"  style={{textDecoration:"none", display:"block"}} className="about-menu-items" >About</Link>
      <Link to="/projects/"  style={{textDecoration:"none", display:"block", color:"white"}} className="about-menu-items" >Projects</Link>
      <Link to="/contact/"  style={{textDecoration:"none", display:"block"}} className="about-menu-items"  >Contact</Link>
      
  
      </div>
      
      </div>
      <div className="main-content about-me">
      <h1 className="text-center">PROJECTS </h1>
    
        <div className="card" style={{marginTop:20+"px"}}>
            <div className="card-body">
                <h3 className="card-title text-center ">BILL SPLITTER</h3>
              
                <hr></hr>
                <p className="card-text">A React PWA built to split bills between my roomates</p>
             </div>
             <div className="card-footer text-muted">
                <a className="text-center" href="https://www.southbankindians.tk" style={{display:"block"}}> Visit Website</a>
                <hr></hr>
                <a className="text-center" href="https://github.com/JishnuRamesh/bill-splitter" style={{display:"block"}}> Source Code</a>
            </div>
        </div>



        <div className="card" style={{marginTop:20+"px"}}>
            <div className="card-body">
                <h3 className="card-title text-center">RUN 360</h3>
                <hr></hr>
                <p className="card-text">A prototype website built for booking fitness related events.
                The website was developed using ASP MVC 5 and razor templating engine.</p>
             </div>
             <div className="card-footer text-muted">
                <a className="text-center" href="https://bitbucket.org/jishnnu_ramesh/run360/src" style={{display:"block"}}> Source Code</a>
            </div>
        </div>


        <div className="card" style={{marginTop:20+"px"}}>
            <div className="card-body">
                <h3 className="card-title text-center">MONASH JOB SCRAPER</h3>
                <hr></hr>
                <p className="card-text">A custom python script that runs through the Monash career gateway website
                 and scrapes the job information. These data are then saved into a sqlite3 database. 
                 When a new job listing is encountered an email is send out to the registered user.</p>
             </div>
             <div className="card-footer text-muted">
                <a className="text-center" href="https://github.com/JishnuRamesh/Monash-Job-Scraper" style={{display:"block"}}> Source Code</a>
            </div>
        </div>



        <div className="card" style={{marginTop:20+"px"}}>
            <div className="card-body">
                <h3 className="card-title text-center">SELENIUM FRAMEWORK</h3>
                <hr></hr>
                <p className="card-text"> A python-selenium script built under POM model that is perfectly
                 scalable for all web browser testing and scraping related projects.
                  The current implementation is for chrome and firefox driver with remote 
                 webdriver using chromeriver and geckodriver respectively.</p>
             </div>
             <div className="card-footer text-muted">
                <a className="text-center" href="https://github.com/JishnuRamesh/SeleniumFramework" style={{display:"block"}}> Source Code</a>
            </div>
        </div>


        <div className="card" style={{marginTop:20+"px"}}>
            <div className="card-body">
                <h3 className="card-title text-center">AUSSIE TRAVELS</h3>
                <hr></hr>
                <p className="card-text"> A prototype travel website built using Java, JSF and EJB</p>
             </div>
             <div className="card-footer text-muted">
                <a className="text-center" href="https://bitbucket.org/jishnnu_ramesh/aussie_travels/src/master/" style={{display:"block"}}> Source Code</a>
            </div>
        </div>


         </div>
    </Pages>
  )
  
  export default ProjectPage
  