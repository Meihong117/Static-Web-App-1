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
                    <SidebarLink to='/users'>Users Info</SidebarLink>
                    <SidebarLink to='/postuser'>Create User</SidebarLink>
                </SideBarMenue>
                <SideBtnWrap>
                    <SidebarRoute to='/login'>Sign In</SidebarRoute>
                </SideBtnWrap>
            </SideBarWrapper>
        </SideBarContainer>
    )
}

export default SideBar
