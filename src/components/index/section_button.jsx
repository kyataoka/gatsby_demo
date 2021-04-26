import * as React from "react"
import {
    Button,
} from "@material-ui/core"
import {
    scroller,
} from "react-scroll"
import {
    Zoom,
} from "react-reveal"

const SectionButton = (props) => {
    const {
        delay,
        to,
        label,
        offset,
    } = props

    return (
        <Zoom
            delay={delay}
        >
            <Button
                onClick={() => {
                    scroller.scrollTo(to, {
                        duration: 1500,
                        smooth: true,
                        offset: offset,
                    })
                }}
            >{label}</Button>
        </Zoom>
    )
}

export default SectionButton