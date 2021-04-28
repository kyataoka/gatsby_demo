import * as React from "react"
import {
    Fade,
} from "react-reveal"

import SectionItem from "./section_item"

const Projects = (props) => {
    const {
        style,
    } = props

    return (
        <SectionItem
            sectionName="projects"
            style={style}
        >
            <Fade>
            <p>PROJECTS</p>
            </Fade>
        </SectionItem>
    )
}

export default Projects