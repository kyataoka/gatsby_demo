import * as React from 'react'
import { Element } from 'react-scroll'
import {
    Container,
} from "@material-ui/core"
import {
    Zoom,
    Fade,
} from "react-reveal"

const Skills = (props) => {
    const {
        style
    } = props

    return (
        <div>
                {[...Array(36)].map((i, idx) => (
                    <Zoom duration={5000} key={idx}>
                    <div>skills {idx}</div>
                    </Zoom>
                ))}
        </div>
    )
}

export default Skills