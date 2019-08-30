import React, { useContext } from 'react'

import NotesContext from '../../context'
import { Note } from '../../components'

export default function List() {

    const { notes } = useContext(NotesContext)

    return notes.map((note, index) => <Note key={index} {...note} />)
}