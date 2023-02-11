import React, { Children , useState } from 'react';
import {FaTh,FaBars,FaUserAlt,FaCommentAlt,FaShoppingBag,FaThList,FaWpforms} from "react-icons/fa";
import {TbLogout,TbCertificate} from "react-icons/tb";
import { NavLink } from 'react-router-dom';
import Offre from '../offre_emploi/Offre';
import Header from './hedr';
//import styles from '../styles/Username.module.css';
 function Sidebar ( {Children}){
    const [isOpen, setIsOpen]=useState(false);
    const toggle=()=>setIsOpen(!isOpen);
    const menuItem=[
        {
            path:"/dashbord",
            name:"Dashbord",
            icon:<FaTh/>
        },
        {
            path:"/profile",
            name:"Profile",
            icon:<FaUserAlt/>
        },
        {
            path:"/offre",
            name:"Offre",
            icon:<FaShoppingBag/>
        },
        {
            path:"/profile",
            name:"formation",
            icon:<FaThList/>
        },
        {
            path:"/offre",
            name:"certif",
            icon:<TbCertificate/>
        }
       
    ];
    return (
        <div className='container'>
             
            <div style={{width:isOpen ? "250px" : "50px"}} className='sidebar'>
                <div className='top-section'>
                    <h1 style={{display:isOpen? "block" : "none"}} className='logo'>Logo</h1>
                    <div  style={{marginLeft:isOpen? "50px" :"0px"}} className='bars'>
                        <FaBars onClick={toggle}/>
                    </div>
                </div>
                {
                    menuItem.map((item, index)=>(
                        <NavLink to={item.path} key={index} className='link' activeclassName="active">
                            <div className='icon'>{item.icon}</div>
                            <div style={{display:isOpen? "block" : "none"}} className='link_text'>{item.name}</div>
                        </NavLink>
                    ))
                }
                <div className='logout'>
                    <hr></hr>
                    <NavLink to="/password" className='link ' activeclassName="active" >
                        <div className='icon'><TbLogout/></div>
                        <div style={{display:isOpen? "block" : "none"}} className='link_text'>logout</div>
                    </NavLink>
                </div>

            </div>
            <main>{Children}</main>
         
        </div>
    )
}
export default Sidebar