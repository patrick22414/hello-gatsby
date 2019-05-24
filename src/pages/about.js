import React from "react"
import Header from "../components/header"
import { Link } from "gatsby"

export default () => (
  <div style={{ color: `teal` }}>
    <Link to="/">Home</Link>
    <Header headerText="About Header Text" />
    <Header headerText="Let's have another header" />
    <p>Gatsby about page.</p>
  </div>
)
