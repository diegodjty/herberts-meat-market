import React from 'react';
import styled from '@emotion/styled';
import {Logo,FacebookIcon,MailIcon} from '../img'
import { Link,NavLink } from 'react-router-dom';
import mq from './../scripts/breakpoints';


const Container = styled.footer`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #24262C;
    color: white;
    text-align: center;
    font-family: 'Open Sans';
    font-size: .8rem;
    h3{
        font-family: 'Cabin',sans-serif;
    }
    ${mq[1]}{
        .info{
            display: flex;
            justify-content: space-around;
            align-items: flex-start;
            width: 90%;
        }
    }
    .logo{
        img{
            margin-top: 3rem;
            width: 120px;
            ${mq[1]}{
                width: 150px;
            }
        }
        
    }
    .menu{
        @media (max-width: 1024px) {
            display: none;
        }
        nav{
            font-family: 'Cabin' ,sans-serif;
            ul{
                .title{
                    margin-bottom: 1rem;
                    font-size: 1.4rem;
                    margin-top : .5rem;
                }
                li{
                    list-style: none;
                    margin: .5rem 0;
                    font-size: 1rem;
                    a{
                        text-decoration: none;
                        color: white;
                    }
                }


            }
        }
    }
    .get-in-touch{
        .address{
            text-align: center;
            p{
                margin: 0;
            }
        }
        ${mq[1]}{
            p{
                font-size: 1rem;
            }
            h3{
                font-size: 1.4rem;
                margin-top : .5rem;
            }
        }
    }

    .business-hours{
        width: 100%;
        margin-bottom: 1rem;
        .mon-sat,.sunday{
            display: flex;
            justify-content: space-around;
            margin-top: 1rem;
            ${mq[1]}{
                span{
                    font-size: 1rem;
                }
            }
        }
        .social-media{
            a{
                img{
                    width: 40px;
                    margin: 1rem;
                }
            }
        }
        ${mq[1]}{
            width: auto;
            
            h3{
                font-size: 1.4rem;
                margin-top: .5rem;
            }
        }
    }
    ${mq[1]}{
        .rights{
            margin-top: 2rem;
        }
    }
    

`

const Footer = () => {

    
    return (
        <Container>
            <div className="info">
                <div className="logo">
                    <Link to ="/"><img src={Logo} alt=""/></Link>
                </div>
                <div className="menu">
                    <nav>
                        <ul>
                            <li className="title">MENU</li>
                            <li><NavLink  to="/"> HOME</NavLink></li>
                            <li><NavLink  to="/specials"> SPECIALS</NavLink></li>
                            <li><NavLink  to="/about"> ABOUT</NavLink></li>
                            <li><NavLink  to="/meatgrades"> MEAT GRADES</NavLink></li>
                            <li><NavLink  to="/gallery"> GALLERY</NavLink></li>
                            <li><NavLink  to="/contact"> CONTACT</NavLink></li>
                        </ul>
                    </nav>
                </div>
                <div className="get-in-touch">
                    <h3>GET IN TOUCH</h3>
                    <div className="number"><p>516-483-8896</p></div>
                    <div className="address">
                        <p>79 main St.</p>
                        <p>Hempstead, NY 11550</p>
                    </div>
                    <div className="email"><p>herbertsfinemeats@gmail.com</p></div>
                </div>
                <div className="business-hours">
                    <h3>BUSINESS HOURS</h3>
                    <div className="mon-sat">
                        <span>Mon-Sat</span> <span>8:00 am - 6:30 pm</span>
                    </div>
                    <div className="sunday">
                    <span>Sunday</span> <span>8:00 am - 4:00 pm</span>
                    </div>
                    <div className="social-media">
                        <a href="https://www.facebook.com/Herberts-Country-Meat-Market-444297099020073/">
                            <img src={FacebookIcon} alt=""/>
                        </a>
                        <a href="mailto:herbertsfinemeats@gmail.com">
                            <img src={MailIcon} alt=""/>
                        </a>
                    
                    </div>
                </div>
                
            </div>
            <div className="rights">
                <p>
                    © 2020 Herbert's Meat Market| All Rights Reserved
                </p>
            </div>
        </Container>
    );
};

export default Footer;