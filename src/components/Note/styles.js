import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background: #fff;
    border-radius: 5px;
    padding: 15px;
    margin-bottom: 10px;
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
    color: ${props => props.isCompleted && '#888 !important'};
`

export const ActionsBox = styled.div``

export const Button = styled.button`
    color: #fff;
    padding: 8px 10px 6px;
    margin-left: 5px;
    background-color: ${props => props.danger ? '#e74c3c' : '#38c172'};
    background-color: ${props => props.warning && '#f1c40f'};
    border: none;
    font-size: 26px;
    border-radius: 50%;
    cursor: pointer;
`