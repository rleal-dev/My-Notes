import React, { useContext } from 'react'

import NotesContext from '../../context'
import { Note } from '../../components'

import { EmptyMessage } from './styles'

export default function List() {

    const { notes } = useContext(NotesContext)

    if (notes.length == 0) {
        return <EmptyMessage>Não há notas cadastradas!</EmptyMessage>
    }

    return notes.map((note, index) => <Note key={index} index={index} {...note} />)
}