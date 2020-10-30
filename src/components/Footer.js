import React from 'react';
import styled from '@emotion/styled';
import {Logo,FacebookIcon,MailIcon} from '../img'

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

    .logo{
        img{
            margin-top: 3rem;
            width: 120px;
        }
    }
    .get-in-touch{
        .address{
            text-align: center;
            p{
                margin: 0;
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

        }
    }

    .social-media{

        a{
            img{
                width: 40px;
                margin: .5rem;
            }
        }
    }

`

const Footer = () => {

    
    return (
        <Container>
            <div className="logo">
                <img src={Logo} alt=""/>
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
            </div>
            <div className="social-media">
                <a href="https://www.facebook.com/Herberts-Country-Meat-Market-444297099020073/">
                    <img src={FacebookIcon} alt=""/>
                </a>
                <a href="mailto:herbertsfinemeats@gmail.com">
                    <img src={MailIcon} alt=""/>
                </a>
                
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