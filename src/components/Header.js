import React from 'react';
import styled from '@emotion/styled';
import { Logo } from '../img';

import { NavLink,Link } from 'react-router-dom';

const Container = styled.div`
    background-color: #C13A3A;
    padding: 2rem;
    @media (max-width: 1023px) {
        display: none;
    }
    header{
        width: 90%;
        margin: auto;
        display: flex;
        align-items: center;
        .logo{
            flex: 1;
            img{
                width: 10rem;
                margin-left: 2rem;
            }
        }
        nav{
            font-family: 'Cabin' ,sans-serif;
            ul{
                display: flex;
                li{
                    list-style: none;
                    margin: 0 1.5rem;
                    font-size: 1.2rem;
                    a{
                        text-decoration: none;
                        color: white;
                    }
                }

            }
        }
        button{
            width: 100%;
            color: #C13A3A;
            font-size: 1rem;
            font-family: Arial, Helvetica, sans-serif;
            font-weight: bold;
            border: solid 2px #C13A3A ;
            padding: .6rem 1rem;
            background-color: white; 
            border-radius: 1rem;
        }
    }


`

const Header = () => {
    return (
        <Container>
            <header>
                <div className="logo">
                    <Link to="/">
                        <img src={Logo} alt=""/>
                    </Link>
                </div>
                <nav>
                    <ul>
                        <li><NavLink  to="/"> HOME</NavLink></li>
                        <li><NavLink  to="/specials"> SPECIALS</NavLink></li>
                        <li><NavLink  to="/about"> ABOUT</NavLink></li>
                        <li><NavLink  to="/meatgrades"> MEAT GRADES</NavLink></li>
                        <li><NavLink  to="/gallery"> GALLERY</NavLink></li>
                        <li><NavLink  to="/contact"> CONTACT</NavLink></li>
                    </ul>
                </nav>
            </header>
        </Container>
    );
};

export default Header;