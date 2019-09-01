import React, { useContext } from 'react'

import { MdDelete, MdCheck, MdRefresh } from 'react-icons/md'

import NotesContext from '../../context'
import { Container, Title, ActionsBox, Button } from './styles'

const Note = ({ index, title, isCompleted }) => {

    const { notes, setNotes } = useContext(NotesContext)

    const toggleNote = index => {
        const NewNotes = [...notes]
        NewNotes[index].isCompleted = ! NewNotes[index].isCompleted

        setNotes(NewNotes)
    }

    const deleteNote = index => {

        if (! window.confirm('Deseja realmente excluir a nota?')) {
            return false
        }

        const NewNotes = [...notes]
        NewNotes.splice(index, 1)
        
        setNotes(NewNotes)
    }

    return (
        <Container>
            <Title isCompleted={isCompleted}>{ title }</Title>

            <ActionsBox>
                {
                    ! isCompleted 
                        ? <Button onClick={() => toggleNote(index)}><MdCheck /></Button>
                        : <Button warning onClick={() => toggleNote(index)}><MdRefresh /></Button>
                }
                
                <Button danger onClick={() => deleteNote(index)}>
                    <MdDelete />
                </Button>
            </ActionsBox>
        </Container>
    )
}

export default Note