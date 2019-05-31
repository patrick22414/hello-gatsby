import React from "react"
import Layout from "../components/layout"

export default () => (
  <Layout>
    <h1>Hello Gatsby</h1>
    <p>What a world.</p>
    <p>
      Now with{" "}
      <a href="https://kyleamathews.github.io/typography.js/">Typography.js</a>.
    </p>
    <button
      style={{
        display: `block`,
        margin: `1rem`,
        padding: `0.5em 1em`,
        background: `white`,
        boxShadow: `0px 10px 20px rgba(0, 0, 0, 0.2)`,
        border: `solid violet`,
        borderRadius: `10px`,
        color: `violet`,
      }}
    >
      A button
    </button>
    <img
      style={{
        display: `block`,
        margin: `1rem`,
        background: `white`,
        boxShadow: `0px 10px 20px rgba(0, 0, 0, 0.2)`,
        border: `20px solid white`,
        borderRadius: `10px`,
      }}
      src="https://source.unsplash.com/random/360x240"
      alt=""
    />
  </Layout>
)
