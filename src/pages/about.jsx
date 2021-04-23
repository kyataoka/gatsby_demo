import React from 'react'
import { navigate } from 'gatsby'
import {
    Card,
    Button,
} from '@material-ui/core'

const AboutPage = (props) => {
    return (
        <div>
            <title>About</title>
            <Card>
                <p>About Page</p>
            </Card>
            <Button
                onClick={() => {navigate('/')}}
            >Go Home</Button>
        </div>
    )
}

export default AboutPage