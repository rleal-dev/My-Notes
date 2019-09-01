import React, { useContext } from 'react'

import { MdNoteAdd, MdDeleteForever } from 'react-icons/md'

import NotesContext from '../../context'
import { Container, LogoBox, ActionsBox, Badge } from './styles'

export default function Header() {

    const { notes, setNotes } = useContext(NotesContext)

    const dropNotes = () => {

        if (! window.confirm('Deseja realmente excluir todas as notas?')) {
            return false
        }

        setNotes([])
    }

    return (
        <Container>
            <LogoBox>
                <MdNoteAdd size={32} />
                <h1>My Notes</h1>
            </LogoBox>

            { 
                notes.length > 0 && (
                    <ActionsBox>
                        <Badge>{notes.length}</Badge> 
                        <MdDeleteForever size={35} onClick={dropNotes}/>
                    </ActionsBox>
                )
            }
        </Container>
    )
}