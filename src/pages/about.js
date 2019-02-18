import React from "react"
import { Link } from "gatsby"

import Pages from "../components/pages"
import SEO from "../components/seo"


const AboutPage = () => (
  <Pages>
    <SEO title="About" />
    <h1>ABOUT ME </h1>
    <p>I am an aspiring software developer. I mostly code in Python and Javascript </p>
    <p> Currently i'm pursuing my Master's in Information Technology at Monash Univeristy.
    I completed my undergraduete in Electronics and Telecommunication Engineering from Kerala Univeristy in India</p>
    <p> My favorite stack right now js React.Js on the frontend and ASP.Net in the backend. I have also worked with Java, Mongo DB, Django</p>
    <p> Previously i used to work as a software test engineer as a contract employee for Intel Co-operation</p>
    <p> During my off time i love to watch football. I am an avid Manchster United Fan</p>
    <Link to="/">Go back to the homepage</Link>
 
  </Pages>
)

export default AboutPage
