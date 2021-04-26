import * as React from 'react'
import { Element } from 'react-scroll'
import {
    Container,
} from '@material-ui/core'

const Profile = (props) => {
    const {
        style,
    } = props

    return (
        <div style={{...style}}>
        <Element name="profile" />
            <Container>
            <p>PROFILE</p>
            {[...Array(30)].map((i, idx) => (
                <div key={idx}>profile {idx}</div>
            ))}
            </Container>
        </div>
    )
}

export default Profile