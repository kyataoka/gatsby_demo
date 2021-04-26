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
} from "react-reveal"

import '../styles/global.css'

import SectionButton from "../components/index/section_button"
import Profile from '../components/index/profile'
import Skills from '../components/index/skills'
import { useClientRect } from '../hooks/useClientRect'

// markup
const IndexPage = () => {
  const [headerRect, headerRef] = useClientRect()
  const sectionHeight = React.useMemo(() => (
    document?.documentElement.clientHeight - (headerRect?.height ?? 0)
  ))

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
            position="sticky"
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
                  delay={idx*100}
                  to={label.name}
                  label={label.label}
                  offset={-headerRect?.height}
                />
              ))}
            </Toolbar>
          </AppBar>
        <Profile style={{height: sectionHeight}} />
        <Skills style={{height: sectionHeight}} />
    </main>
  )
}

export default IndexPage
