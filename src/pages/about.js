import React from "react"
import { Link } from "gatsby"

import Pages from "../components/pages"
import SEO from "../components/seo"


const AboutPage = () => (
  <Pages>
    <SEO title="About" />
    <h1>Hi from the about page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
 
  </Pages>
)

export default AboutPage
