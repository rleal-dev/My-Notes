import React, { useState } from 'react'

import NotesContext from './context'
import GlobalStyle from './styles/global'

import { Header, FormNote, List } from './components'

export default function App() {

    const [notes, setNotes] = useState([])

    return (
        <NotesContext.Provider value={{ notes }}>
            <Header />
            <FormNote setNotes={setNotes} />
            <List />
            
            <GlobalStyle />
        </NotesContext.Provider>
    )
}