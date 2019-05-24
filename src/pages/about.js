import React from "react"
import Header from "../components/header"
import { Link } from "gatsby"

export default () => (
  <div style={{ color: `teal` }}>
    <Link to="/">Home</Link>
    <Header headerText="About Header Text" />
    <Header headerText="Let's Have Another Header" />
    <p>Some content on the about page.</p>
  </div>
)
