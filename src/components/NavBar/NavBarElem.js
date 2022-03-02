import styled from 'styled-components'
import {NavLink as Link} from 'react-router-dom'
import {FaBars} from 'react-icons/fa'
import {ImHome2} from 'react-icons/im'


export const Nav=styled.nav`
background-color: #aac9fa;
height: 80px;
display: flex;
justify-content: space-between;
/* padding: 0.5rem calc((100vw - 1000px)/2); */
z-index:10;
`

export const NavLink=styled(Link)`
color: #fff;
display: flex;
align-items: center;
text-decoration: none;
text-decoration:none;
padding: 0 1rem;
height: 100%;
cursor: pointer;

&.active{
color: #0562f7;
}
`
export const HomeIcon=styled(ImHome2)`
font-size: 30px;
`

export const MobileIcon=styled.div``
export const Bars=styled(FaBars)`
display: none;
color: #fff;

@media screen and (max-width:768px) {
display: block;
position:absolute;
top:0;
right: 0;
transform: translate(-100%, 75%);
font-size: 1.8rem;
cursor: pointer;
}
`
export const NavMenue=styled.div`
display: flex;
align-items: center;
margin-right: -24px;

@media screen and (max-width:768px) {
display: none;
}
`
export const NavBtn=styled.nav`
display: flex;
align-items: center;
margin-right: 24px;

@media screen and (max-width:768px) {
display: none;
}
`
export const NavBtnLink=styled(Link)`
border-radius: 4px;
background: #256ce1;
padding: 10px 22px;
color: #fff;
border: none;
outline: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;
&:hover{
transition: all 0.2s ease-in-out;
background: #fff;
color: #010606;
}
`

// export const Nav=styled.nav``
// export const Nav=styled.nav``
// export const Nav=styled.nav``
