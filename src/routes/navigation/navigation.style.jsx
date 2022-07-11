import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const NavigationContainer = styled.div`
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
`


export const Logocontainer = styled(Link)`
    height: 100%;
    width: 70px;
    padding: 25px;
`

export const NavLinkContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`

export const NavLink = styled(Link)`
    padding: 10px 15px;
    cursor: pointer;
    text-decoration: none;
    color: black;
    background-color: transparent;
    border: 0;
    outline: 0;
`

