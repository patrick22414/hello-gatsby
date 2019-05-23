import React from "react"
import { Link } from "gatsby"

export default () => (
  <div style={{ color: `purple` }}>
    <Link to="/about/">About</Link>
    <br />
    <Link to="/tutorial-css-modules/">Tutorial: CSS Modules</Link>
    <h1>Hello Gatsby!</h1>
    <p>What a world.</p>
    <img src="https://source.unsplash.com/random/360x240" alt="" />
  </div>
)
