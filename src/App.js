import React, { useState, useEffect } from 'react'

import NotesContext from './context'
import GlobalStyle from './styles/global'

import { Header, NoteForm, List } from './components'

let initalNotes = localStorage.getItem('notes') || []
if (initalNotes.length) {
    initalNotes = JSON.parse(initalNotes)
}

export default function App() {

    const [notes, setNotes] = useState(initalNotes)

    const addNotes = title => setNotes([...notes, { title, isCompleted: false }])

    useEffect(() => {
        return localStorage.setItem('notes', JSON.stringify(notes))
    }, [notes])

    return (
        <NotesContext.Provider value={{ notes, setNotes }}>
            <Header />
            <NoteForm addNotes={addNotes} />
            <List />
            
            <GlobalStyle />
        </NotesContext.Provider>
    )
}