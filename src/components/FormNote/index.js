import React, { useState, useContext } from 'react'

import NotesContext from '../../context'
import { Container } from './styles'

export default function Header({ setNotes }) {

    const [title, setTitle] = useState('')
    const { notes } = useContext(NotesContext)

    const handleTitle = e => setTitle(e.target.value)

    const onEnter = ({ key, target }) => {
        if (key !== 'Enter' || target.value === '') {
            return false
        }

        addNote()
    }

    const addNote = () => {
        setNotes([...notes, { title, completed: false }])
        setTitle('')
    }

    return (
        <Container>
            <input
                type='text' 
                placeholder='Digite uma nota'
                onChange={handleTitle} 
                onKeyPress={onEnter}
                value={title}
                autoFocus 
            />
        </Container>
    )
}