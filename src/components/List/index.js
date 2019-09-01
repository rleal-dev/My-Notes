import React, { useContext } from 'react'

import NotesContext from '../../context'
import { Note } from '../../components'

import { Container, EmptyMessage } from './styles'

export default function List() {

    const { notes } = useContext(NotesContext)

    return (
        <Container>
            {
                notes.length === 0 && <EmptyMessage>Não há notas cadastradas!</EmptyMessage>
            }

            {
                notes.map((note, index) => <Note key={index} index={index} {...note} />)
            }
        </Container>
    )
}