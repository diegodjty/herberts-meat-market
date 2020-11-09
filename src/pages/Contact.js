import React from 'react';
import styled from '@emotion/styled'
import Banner  from './../components/Banner'
import mq from './../scripts/breakpoints';
import {ContactBG,
        ContactPhone,
        ContactMail,
        MapMarker,
        FacebookIcon,
        MailIcon

} from '../img'

const Container = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   margin-top: 100px;
   font-family: 'Cabin', sans-serif;
   ${mq[1]}{
       margin-top: 0;
   }
   
   .main{
       .text{
           text-align: center;
           width: 90%;
           margin: auto;
           margin-bottom: 3rem;
           h3{
               font-size: 1.5rem;
               color: #C13A3A;
           }
           p{
               font-family: Arial, Helvetica, sans-serif
           }
           ${mq[1]}{
               width: 50%;
               h3{
                   font-size: 2rem;
               }
               p{
                   font-size: 1.2rem;
               }
           }
       }
       .line{
            width: 50%;
            margin: auto;
            height: 2px;
            background-color: #C13A3A;
            margin-top: 3rem;
        }
        .cards{
            width: 90%;
            margin: auto;
            .card{
                margin-bottom: 1rem;
                padding: 2rem 0;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                box-shadow: 0px 0px 11px 0px rgba(0,0,0,0.26);
                -webkit-box-shadow: 0px 0px 11px 0px rgba(0,0,0,0.26);
                -moz-box-shadow: 0px 0px 11px 0px rgba(0,0,0,0.26);
                img{
                    width: 50px;
                }
                h5{
                    font-size: 1.5rem;
                    margin: 1rem;
                }
                p{
                    text-align: center;
                    margin: 0;
                    font-family: 'Arial';
                    margin-bottom: .5rem;
                }
                a{
                    text-decoration: none;
                    color: #C13A3A;
                }
                .number{
                    color: #C13A3A;
                    font-size: 1.2rem;
                }
            }
            ${mq[1]}{
                width: 60%;
                display: flex;
                justify-content: space-between;
                padding: 3rem 0;
                .card{
                    width: 20%;
                    padding: 3rem;
                    justify-content: space-between;
                    img{
                        width: 65px;
                    }
                    h5{
                        font-size: 1.8rem;
                    }
                }
            }
            
        }
        .contact-form-container{
            background-color: #C13A3A;
        }
        .contact-form{
            .content{
                color: white;
                width: 90%;
                margin: auto;
                padding: 1rem 0;
                .text{
                    text-align: left;
                    margin: 0;
                }
                .business-hours{
                    width: 100%;
                    .mon-sat,.sunday{
                        display: flex;
                        justify-content: space-between;
                        margin-top: 1rem;
                    }
                }
                .social-media{
                    text-align: center;
                    a{
                        img{
                            width: 40px;
                            margin: .5rem;
                        }
                    }
                }
                
            }
            .form{
                form{
                    display: flex;
                    flex-direction: column;
                    width: 90%;
                    margin: auto;
                    padding-bottom: 4rem;
                    input , textarea{
                        border: none;
                        padding: 1rem;
                        margin: .2rem 0;
                    }
                    .submit{
                        background-color: #C13A3A;
                        border: solid white 1px;
                        color: white;
                        &:hover{
                            background-color: white;
                            color: #C13A3A;
                        }
                    }
                }
            }
            ${mq[1]}{
                width: 60%;
                margin: auto;
                display: flex;
                padding: 5rem 0;
                .content{
                    width: 40%;
                    .text{
                        width: 100%;
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;
                    }
                }
                .form{
                    width: 40%;
                }
            }
        }
        ${mq[1]}{
            width: 100%;
        }
   }
`

const Contact = () => {

    const handleSubmit = (e) =>{
        e.preventDefault()
    }
    return (
        <Container>
            <Banner img={ContactBG} title="CONTACT" />
            <div className="main">
                <div className="text">
                    <h3>Contact Us</h3>
                    <p>At Herbert's Meat Market, we care about what you have to say. Please contact us with any questions or concerns you may have. We'd love to help!</p>
                    <div className="line"></div>
                </div>
                <div className="cards">
                    <div className="card">
                        <img src={ContactPhone} alt=""/>
                        <h5>Call Us</h5>
                        <p>Feel free to give us a call</p>
                        <div className="number">
                            <a href="tel:+1516-483-8896">516-483-8896</a>
                        </div>
                    </div>
                    <div className="card">
                        <img src={ContactMail} alt=""/>
                        <h5>Email Us</h5>
                        <p>For general inquiries & questions, 
                            contact us via email or fill out the form below.</p>
                        <div className="number">
                            <a href="mailto:herbertsfinemeats@gmail.com">
                                herbertsfinemeats@gmail.com    
                            </a>
                        </div>
                    </div>
                    <div className="card">
                        <img src={MapMarker} alt=""/>
                        <h5>Visit Us</h5>
                        <p>79 Main St.</p>
                        <p>Hempstead, NY 11550</p>
                        <a href="http://maps.google.com/?q=79 Main St Hempstead, NY 11550" rel='noreferrer' target="_blank">
                            View on Map
                        </a>
                    </div>
                </div>
                <div className="contact-form-container">
                    <div className="contact-form">
                        <div className="content">
                            <div className="text">
                                <p>We’d love to hear from you.
                                Just choose the most convenient method and we’ll get back to you as soon as we can.</p>

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
                        </div>
                        <div className="form">
                            <form action="">
                                <input type="text" placeholder="Name"/>
                                <input type="text" placeholder="Email"/>
                                <input type="text" placeholder="Phone"/>
                                <textarea placeholder="Message"></textarea>
                                <input className="submit" onClick={handleSubmit} type="submit" value="Submit"/>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            
        </Container>
    );
};

export default Contact;