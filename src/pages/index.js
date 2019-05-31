import React from "react"
import Layout from "../components/layout"
import imageStyles from "../components/image.module.css"

export default () => (
  <Layout>
    <div>
      <h1>Hello Gatsby</h1>
      <p>
        Commodo cupidatat ut quis officia esse irure anim deserunt voluptate
        occaecat non. Occaecat consectetur magna nisi quis eiusmod pariatur
        incididunt consequat aliqua. Duis duis cillum Lorem irure dolore enim
        amet officia cupidatat cillum. Magna ex nisi enim tempor exercitation
        exercitation ullamco ad do incididunt enim.
      </p>
      <p>
        Qui labore ex elit eiusmod occaecat cupidatat labore. Consectetur est
        commodo ullamco ut. Voluptate magna enim exercitation labore nisi sint
        dolor quis veniam. Commodo duis elit deserunt officia minim dolore esse.
        Cupidatat nulla laborum aliquip velit.
      </p>
    </div>
    <div className={imageStyles.myImage}>
      <img src="https://source.unsplash.com/random/360x240" alt="" />
    </div>
  </Layout>
)
