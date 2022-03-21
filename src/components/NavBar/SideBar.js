import React from 'react'
import {SideBarContainer,Icon,CloseIcon,SideBarWrapper,SideBarMenue,SidebarLink,SideBtnWrap,SidebarRoute } from './SideBarElem'

const SideBar = ({isOpen,toggle}) => {
    return (
        <SideBarContainer isOpen={isOpen} onClick={toggle}  >
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SideBarWrapper>
                <SideBarMenue>
                    <SidebarLink to='/postuser'>Create User</SidebarLink>
                    <SidebarLink to='/'>LINK1</SidebarLink>
                    <SidebarLink to='/'>LINK2</SidebarLink>
                    <SidebarLink to='/'>LINK3</SidebarLink>
                    <SidebarLink to='/'>LINK4</SidebarLink>
                </SideBarMenue>
                <SideBtnWrap>
                    <SidebarRoute to='/login'>Sign In</SidebarRoute>
                </SideBtnWrap>
            </SideBarWrapper>
        </SideBarContainer>
    )
}

export default SideBar
