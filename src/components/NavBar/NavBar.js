import React, {useState} from 'react'
import './NavBarElem'
import {Nav,NavLink,HomeIcon,MobileIcon,Bars, NavMenue, NavBtn,NavBtnLink} from './NavBarElem'

const NavBar = ({toggle}) => {
    
    return (
        <>
            <Nav>
                <NavLink to='/'>
                    <HomeIcon />
                </NavLink>
                <MobileIcon onClick={toggle}>
                    <Bars />
                </MobileIcon>
                
                <NavMenue>
                    <NavLink to="/postuser" >Create User</NavLink>
                    <NavLink to="/" >LINK1</NavLink>
                    <NavLink to="/" >LINK2</NavLink>
                    <NavLink to="/" >LINK3</NavLink>
                    <NavLink to="/" >LINK4</NavLink>
                </NavMenue>
                <NavBtn>
                    <NavBtnLink to="/login">Log In</NavBtnLink>
                </NavBtn>
            </Nav>
        </>
    )
}

export default NavBar
