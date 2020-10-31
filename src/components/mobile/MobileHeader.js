import React,{Fragment, useState} from 'react';
import {Call,BurguerMenu,Logo,Close} from '../../img'
import {NavLink,Link} from 'react-router-dom'


import styled from '@emotion/styled'

const MobileHeader = () => {

    const Header = styled.header`

        background-color: #C13A3A;
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: fixed;
        z-index: 100;
        top: 0;
        width: 100%;

        .menu{
            img{
                width: 20px;
                margin-left: 1rem;
            }
            .close{
                position: absolute;
                z-index: 100;
                top: 35%;
                left: 0%;
                color: red;
            }
            nav{
                position: absolute;
                z-index: 99;
                top: 0;
                left: 0;
                color: white;
                height: 100vh;
                width: 100vw;
                background-color: #24262C;
                opacity: 7%;
        
                ul{
                    padding: 0;
                    height: 30%;
                    margin-top: 6rem;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    align-items: center;
                   
                    li{
                        list-style: none;
                        a{
                            text-decoration: none;
                            color: white;
                        }
                    }
                }
            }
        }

        .logo{
            img{
                width: 120px;
                padding: 10px 0px;
            }
        }
        
        .phone{
            img{
                width: 20px;
                margin-right: 1rem;
            }
        }

    `;

    const handleMenu = () =>{
        if(menu === false){
            setMenu(true)
        }else{
            setMenu(false)
        }
    }
    const closeMenu = () =>{
        setMenu(false)
    }
    const [menu,setMenu] = useState(false);
    return (
        <>
            <Header>
                <div className="menu">
                        {
                            menu 
                        ?
                        <>
                            <img style={{opacity: '100'}} src={BurguerMenu} onClick={handleMenu} alt=""/>
                            <img className={menu?'close animate__animated animate__fadeInDown': 'animate__animated animate__fadeOutUp'}  src={Close} onClick={handleMenu} alt=""/>
                            <nav className={menu?'animate__animated animate__fadeInDown': 'animate__animated animate__fadeOutUp'} >
                                <ul>
                                    <li><NavLink activeStyle={{ color: '#C13A3A' }} onClick={closeMenu}  to="/home"> HOME</NavLink></li>
                                    <li><NavLink activeStyle={{ color: '#C13A3A' }} onClick={closeMenu}  to="/specials"> SPECIALS</NavLink></li>
                                    <li><NavLink activeStyle={{ color: '#C13A3A' }} onClick={closeMenu}  to="/about"> ABOUT</NavLink></li>
                                    <li><NavLink activeStyle={{ color: '#C13A3A' }} onClick={closeMenu}  to="/meatgrades"> MEAT GRADES</NavLink></li>
                                    <li><NavLink activeStyle={{ color: '#C13A3A' }} onClick={closeMenu}  to="/gallery"> GALLERY</NavLink></li>
                                    <li><NavLink activeStyle={{ color: '#C13A3A' }} onClick={closeMenu}  to="/contact"> CONTACT</NavLink></li>
                                </ul>
                            </nav>
                        </>
                        :
                        <img src={BurguerMenu} onClick={handleMenu} alt=""/>
                        }
                </div>
                <div className="logo">
                    <Link to="/home">
                        <img src={Logo} alt=""/>
                    </Link>
                </div>
                <div className="phone">
                    <a href="tel:+1516-483-8896"><img src={Call} alt=""/></a>
                </div>
            </Header>
        </>
    )
}

export default MobileHeader;