import styled from 'styled-components'

export const Container = styled.div`
    position: fixed;
    top: 0;
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 20px;
    color: #fff;
    background: #1abc9c;

    h1 {
        font-size: 25px;
        margin-left: 4px;
    }
`
export const LogoBox = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`

export const ActionsBox = styled.div`
    display: flex;
    flex-direction: row;
`

export const Badge = styled.div`
    color: #1abc9c;
    font-weight: bold;
    font-size: 16px;
    padding: 8px 12px;
    background-color: #fff;
    border-radius: 50%;
    opacity: .9;
`