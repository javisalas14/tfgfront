import React, { useState } from 'react';
import {BsCart2} from "react-icons/bs";
import {HiOutlineBars3} from "react-icons/hi2";
import{
    Box,
    Drawer,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemTexxt,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from '@mui/icons-material/CommentRounded';



const Navbar = () => {


    const [openMenu,setOpenMenu] = useState(false);
    const menuOptions = [
        {
            text:"Inicio",
            icon:<HomeIcon/>
        },
        {
            text:"Integración",
            icon:<HomeIcon/>
        },
        {
            text:"Información",
            icon:<InfoIcon/>
        },
        {
            text:"Panel de control",
            icon:<HomeIcon/>
        },
    ];

  return (
    <nav>
        <div className='navbar-links-container'>
            <a href=''>Inicio</a>
            <a href=''>Integración</a>
            <a href=''>Información</a>
            <a href=''>Panel de control</a>
            <a href=''>
                <BsCart2 className='navbar-manu-conainer'/>
            </a>
            <button className='primary-button'>Menu</button>

        </div>
        <div className='navbar-menu-container'>
            <HiOutlineBars3 onClick={() => setOpenMenu(true)}/>
        </div>
    </nav>
  )
}

export default Navbar