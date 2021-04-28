import * as React from 'react'
import { Element } from 'react-scroll'
import {
    Container,
} from '@material-ui/core'

import SectionItem from './section_item'

const Profile = (props) => {
    const {
        style,
    } = props

    return (
        <SectionItem
            sectionName="profile"
            style={style}
        >
            <div
                style={{
                    display: 'flex',
                    width: '100%',
                    height: '100%',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <p>PROFILE</p>
            </div>
        </SectionItem>
    )
}

export default Profile