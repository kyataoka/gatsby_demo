import * as React from "react"
import { Link, navigate } from "gatsby"
import {
  AppBar,
  Toolbar,
  Container,
  Button,
  Card
} from "@material-ui/core"
import {
  scroller,
} from "react-scroll"
import {
  Zoom,
  Fade,
  Rotate,
} from "react-reveal"

import '../styles/global.css'

import SectionButton from "../components/index/section_button"
import Profile from '../components/index/profile'
import Skills from '../components/index/skills'
import Projects from '../components/index/projects'
import { useClientRect } from '../hooks/useClientRect'

// markup
const IndexPage = () => {
  const [headerRect, headerRef] = useClientRect()
  const [sectionHeight, setSectionHeight] = React.useState()

  React.useEffect(() => {
    setSectionHeight(document.documentElement.clientHeight)
  }, [headerRect])

  const labels = [
    {label: "Profile", name: "profile"},
    {label: "Skills", name: "skills"},
    {label: "Projects", name: "projects"},
    {label: "Contact", name: "contact"},
  ]

  return (
    <main style={{margin: 0}}>
      <title>Home Page</title>
          <AppBar
            ref={headerRef}
            position="fixed"
            color="transparent"
            elevation={0}
            style={{
              backdropFilter: "blur(4px)",
            }}
          >
            <Toolbar>
              {labels.map((label, idx) => (
                <SectionButton
                  key={idx}
                  delay={idx*200}
                  to={label.name}
                  label={label.label}
                />
              ))}
            </Toolbar>
          </AppBar>
        <Profile style={{height: sectionHeight}} />
        <Projects style={{height: sectionHeight}} />
        <Skills style={{height: sectionHeight}} />
        {[...Array(100)].map((i, idx) => (
          <Fade key={idx}>
          <div>hoge</div>
          </Fade>
        ))}
    </main>
  )
}

export default IndexPage
