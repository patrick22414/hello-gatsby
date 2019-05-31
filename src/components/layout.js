import React from "react"
import styles from "./layout.module.css"

export default ({ children }) => (
  <div className={styles.layoutContainer}>
    <div className={styles.layoutContent}>{children}</div>
  </div>
)
