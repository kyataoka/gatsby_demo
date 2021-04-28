import * as React from "react"
import { Element } from 'react-scroll'
import {
    Container,
} from "@material-ui/core"

const SectionItem = (props) => {
    const {
        children,
        sectionName,
        style,
    } = props

    return (
        <div
            style={{
                ...style,
                overflow: "hidden"
            }}
        >
            <Element name={sectionName} />
            <Container
                style={{
                    height: '100%',
                }}
            >
                {children}
            </Container>
        </div>
    )
}

export default SectionItem