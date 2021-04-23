import * as React from "react"
import { Link, navigate } from "gatsby"
import { Button, Card } from "@material-ui/core"

// markup
const IndexPage = () => {
  return (
    <main>
      <title>Home Page</title>
      <Card>
        <p>hello world</p>
      </Card>
      <Button
        onClick={() => {navigate('/about/')}}
      >Go to About</Button>
    </main>
  )
}

export default IndexPage
