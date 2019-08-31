import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    position: relative;
    background: #fff;
    border-radius: 5px;
    margin: 10px;
    padding: 15px;
    box-shadow: 0 1px 4px 0 rgba(192, 208, 230, 0.8);
    border-top: 5px solid rgba(230, 236, 245, 0.4);
    
    p {
        font-size: 18px;
        color: #444;
        font-weight: 500;
        line-height: 20px;
    }
`

export const Title = styled.p`
    text-decoration: ${props => props.isCompleted ? 'line-through' : ''};
`
export const Button = styled.button`
    color: #fff;
    padding: .5rem .8rem;
    margin-left: 5px;
    background-color: ${props => props.danger ? 'red' : '#38c172'};
    border-color: ${props => props.danger ? 'red' : '#38c172'};
    font-size: .85rem;
    font-weight: 700;
    text-transform: uppercase;
    border-radius: 10rem;
    cursor: pointer;
`