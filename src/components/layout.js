import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"

const ListLink = props => (
  <li
    css={css`
      margin-left: ${rhythm(0.5)};
      display: inline-block;
      float: right;
      font-style: normal;
    `}
  >
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  return (
    <div
      css={css`
        margin: 0rem auto;
        max-width: 600px;
        padding: ${rhythm(2)};
        padding-top: ${rhythm(1.5)};
      `}
    >
      <Link to={`/`}>
        <h3
          css={css`
            margin-bottom: ${rhythm(2)};
            color: teal;
            display: inline-block;
            font-style: normal;
          `}
        >
          {data.site.siteMetadata.title}
        </h3>
      </Link>
      <ListLink>
        <Link to={`/about`}>About</Link>
      </ListLink>
      <ListLink>
        <Link to={`/`}>Home</Link>
      </ListLink>
      {children}
      <footer style={{ marginTop: `1.5rem`, color: `darkgrey` }}>
        Made by Patrick Yang with Gatsby.js
      </footer>
    </div>
  )
}
