import React from 'react'
import { navigate } from 'gatsby'
import {
    Container,
    Button,
} from '@material-ui/core'
import {
    Fade
} from "react-reveal"

const AboutPage = (props) => {
    return (
        <Container>
            {[...Array(100)].map((i, idx) => (
                <Fade
                    key={idx}
                >
                <div>hoge</div>
                </Fade>
            ))}
        </Container>
    )
}

export default AboutPage