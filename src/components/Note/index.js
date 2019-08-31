import React, { useContext } from 'react'

import NotesContext from '../../context'
import { Container, Title, Button } from './styles'

const Note = ({ index, title, isCompleted }) => {

    const { notes, setNotes } = useContext(NotesContext)

    const completeNote = index => {
        const NewNotes = [...notes]
        NewNotes[index].isCompleted = true

        setNotes(NewNotes)
    }

    const deleteNote = index => {
        const NewNotes = [...notes]
        NewNotes.splice(index, 1)
        
        setNotes(NewNotes)
    }

    return (
        <Container>
            <Title isCompleted={isCompleted}>{ title }</Title>

            <div>
                <Button onClick={() => completeNote(index)}>Finalizar</Button>
                <Button 
                    danger={true}
                    onClick={() => deleteNote(index)}
                >
                    Excluir
                </Button>
            </div>
        </Container>
    )
}

export default Note