import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

export default () => (
  <div>
    <Link to="/about/">About</Link>
    <br />
    <Link to="/tutorial-css-modules/">Tutorial: CSS Modules</Link>
    <Header headerText="Hello Gatsby" />
    <p>What a world.</p>
    <p>
      Now with{" "}
      <a href="https://kyleamathews.github.io/typography.js/">Typography.js</a>.
    </p>
    <img src="https://source.unsplash.com/random/360x240" alt="" />
  </div>
)
