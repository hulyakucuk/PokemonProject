import React from 'react'
import { HeaderWrap } from './headerStyles';
import logo from "./pokeapi.png";
 function Header() {
    return (
        <HeaderWrap>
        <img className='logo'  src={logo}></img>
        </HeaderWrap>
       )
}
export default Header