import * as React from "react"
import { Link } from "gatsby"

// markup
const IndexPage = () => {
  return (
    <main>
      <title>Home Page</title>
      <p>hello world</p>
      <Link to="/">Go Home</Link>
      <Link to="/about">Go About</Link>
    </main>
  )
}

export default IndexPage
