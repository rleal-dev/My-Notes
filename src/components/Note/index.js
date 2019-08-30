import React from 'react'

import { Container } from './styles'

const Note = ({ title }) => {

    return (
        <Container>
            <p>{ title }</p>
        </Container>
    )
}

export default Note