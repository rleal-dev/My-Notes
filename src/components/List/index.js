import React, { useContext } from 'react'

import NotesContext from '../../context'
import { Note } from '../../components'

export default function List() {

    const { notes } = useContext(NotesContext)

    return (
        notes.map(note => <Note key={note.title} {...note} />)
    )
}