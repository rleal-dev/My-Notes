import React, { useState } from 'react'
import { Container } from './styles'

export default function Header({ addNotes }) {

    const [title, setTitle] = useState('')

    const handleTitle = e => setTitle(e.target.value)

    const handleSubmit = e => {
        e.preventDefault()

        if (! title) return

        addNotes(title)
        setTitle('')
    }

    return (
        <Container>
            <form onSubmit={handleSubmit}>
                <input
                    type='text' 
                    placeholder='Digite uma nota'
                    onChange={handleTitle} 
                    value={title}
                    autoFocus 
                />
            </form>
        </Container>
    )
}