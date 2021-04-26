import * as React from 'react'
import { Element } from 'react-scroll'
import {
    Container,
} from "@material-ui/core"

const Skills = (props) => {
    const {
        style
    } = props

    return (
        <div
            style={{
                ...style,
                backgroundColor: "red",
            }}
        >
            <Element name="skills" />
            <Container>
                <p>SKILLS</p>
                {[...Array(30)].map((i, idx) => (
                    <div key={idx}>skills {idx}</div>
                ))}
            </Container>
        </div>
    )
}

export default Skills