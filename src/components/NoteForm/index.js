import React, { useEffect} from 'react'
import useForm from 'react-hook-form'

import { Container, Input } from './styles'

export default function Header({ addNotes }) {
    
    const { register, handleSubmit, errors } = useForm()

    const onSubmit = (data, e) => {
        addNotes(data.title)
        e.target.reset()
    }

    useEffect(() => console.log(errors), [errors])

    return (
        <Container>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Input
                    type='text' 
                    name='title'
                    placeholder='Digite uma nota'
                    ref={register({ required: true })}
                    error={errors.title} 
                    autoFocus
                />
            </form>
        </Container>
    )
}