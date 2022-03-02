import styled from 'styled-components'
import {FaTimes} from 'react-icons/fa'
import { Link } from 'react-router-dom'


export const SideBarContainer=styled.aside`
position: fixed;
z-index:999;
width: 100%;
height: 100%;
background: #aac9fa;
display: grid;
align-items: center;
top:0;
left: 0;
transition: 0ms.3s ease-in-out;
opacity: ${({isOpen})=>(isOpen?'100%':'0')};
top: ${({isOpen})=>(isOpen?'0':'-100%')};
`

export const CloseIcon=styled(FaTimes)`
color: #0562f7;
`

export const Icon =styled.div`
position: absolute;
top: 1.2rem;
right: 1.5rem;
background: transparent;
font-size:2rem;
cursor: pointer;
outline: none;
`
export const SideBarWrapper=styled.div`
color: #fff;
`
export const SideBarMenue=styled.div`
display: grid;
grid-template-columns: 1fr;
grid-template-rows:repeat(6, 80px);
text-align:center;

@media screen and (max-width:480px){
grid-template-rows:repeat(6, 60px);

}
`
export const SidebarLink=styled(Link)`
display: flex;
align-items: center;
justify-content: center;
font-size: 1.5rem;
text-decoration: none;
list-style:none;
transition: 0.2s ease-in-out;
color: #0562f7;
cursor: pointer;

&:hover{
    color: #fff;
    transition: 0.2s ease-in-out;
}
`
export const SideBtnWrap=styled.div`
display: flex;
justify-content: center;
`
export const SidebarRoute=styled(Link)`
border-radius: 50px;
background: #0562f7;
white-space: nowrap;
padding: 16px 64px;
color: #fff;
font-size:16px;
outline: none;
border:none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;

&:hover{
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
}
`
