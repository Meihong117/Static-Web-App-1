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
                    <NavLink to="/users" >Users Info</NavLink>
                    <NavLink to="/postuser" >Create User</NavLink>
                </NavMenue>
                <NavBtn>
                    <NavBtnLink to="/login">Log In</NavBtnLink>
                </NavBtn>
            </Nav>
        </>
    )
}

export default NavBar
