import React, { useState } from 'react'

import NotesContext from './context'
import GlobalStyle from './styles/global'

import { Header, NoteForm, List } from './components'

export default function App() {

    const [notes, setNotes] = useState([])

    const addNotes = title => {
        setNotes([...notes, { title, isCompleted: false }])
    }

    return (
        <NotesContext.Provider value={{ notes, setNotes }}>
            <Header />
            <NoteForm addNotes={addNotes} />
            <List />
            
            <GlobalStyle />
        </NotesContext.Provider>
    )
}