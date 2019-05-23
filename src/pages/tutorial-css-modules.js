import React from "react"
import Container from "../components/container"
import { Link } from "gatsby"
import styles from "./tutorial-css-modules.module.css"

const User = props => (
  <div className={styles.User}>
    <img src={props.avatar} className={styles.avatar} alt="" />
    <div className={styles.description}>
      <h2 className={styles.username}>{props.username}</h2>
      <p className={styles.excerpt}>{props.excerpt}</p>
    </div>
  </div>
)

export default () => (
  <div>
    <Link to="/">Home</Link>
    <Container>
      <h1>Tutorial: CSS Modules</h1>
      <p>CSS Modules are cool!</p>
      <User
        username="Jane Doe"
        avatar="https://source.unsplash.com/random/96x96"
        excerpt="I'm Jane Doe. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
      />
      <User
        username="Bob Smith"
        avatar="https://source.unsplash.com/random/100x100"
        excerpt="I'm Bob Smith. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
      />
    </Container>
  </div>
)