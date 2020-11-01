import React from 'react';
import styled from '@emotion/styled'
import {AboutBG,
        Aboutgallery1,
        Aboutgallery2,
        Aboutgallery3,
        Aboutgallery4} from '../img/index'
import { Link } from 'react-router-dom';



const Container = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   margin-top: 100px;
   font-family: 'Cabin', sans-serif;
   .aboutBG{
       display: flex;
       justify-content: center;
       align-items: center;
       height: 200px;
       width: 100%;
       background-image: url(${AboutBG});
       background-position: center;
       background-size: cover;
   }   
       h3{
           color: white;
           font-size: 2.5rem;
       }
    .main{
        margin: auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        .title{
            width: 90%;
            h3{
                color: #C13A3A;
                font-size: 1.8rem;
            }
            p{
                font-family: 'Arial';
                font-size: .8rem;
                
            }
            .line{
                width: 50%;
                margin: auto;
                height: 2px;
                background-color: #C13A3A;
                margin-top: 3rem;
            }
        }
        .content{
            width: 95%;
            h4{
                color: black;
                font-size: 1.2rem; 
            }
            p{
                font-family: 'Arial';
                font-size: .8rem;
                text-align: left;
                &:nth-child(3){
                    font-size: 1.2rem;
                    font-family: 'Cabin';
                    color: #C13A3A;
                }
            }
            button{
                width: 90%;
                margin-top: 1rem;
                margin-bottom: 2rem;
                font-size: .7rem;
                font-family: Arial, Helvetica, sans-serif;
                font-weight: bold;
                border: solid 2px #C13A3A ;
                padding: .5rem 0rem;
                background-color: white; 
                border-radius: 1rem;
                a{
                    text-decoration: none;
                    color: #C13A3A;
                }
        }
            
        }
        .about-gallery{
            img{
                width: 50%;
                height: 100%;
                margin-bottom: -1rem;
            }
        }
    }   

`

const About = () => {
    return (
        <Container>
            <div className="aboutBG"
                
            >
                <h3>ABOUT</h3>
            </div>
            <div className="main">
                <div className="title">
                    <h3>About Herbert's Meat Market</h3>
                    <p>Herbert's Country Meat Market was established in 1936 and has been serving the Hempstead community with the freshest beef, pork, poultry, lamb, goat, oxtails
                    and so much more.</p>
                    <div className="line">

                    </div>
                </div>
                <div className="content">
                    <h4>Herbert's Uses Black Angus Prime Beef</h4>
                    <p>The next time you shop for beef – check if you are getting the best possible Grade. Herbert’s only gives you the best quality and price for USDA PRIME Beef. Many stores sell Ungraded or Select Beef – you need to know what you are getting for your money…..and you know you only get the best at Herbert’s Country Meat Market. 
                    </p>
                    <p>USDA PRIME is the Best Grade you can buy with very well-distributed marbling – which is what gives beef its flavor, tenderness and consistency.</p>
                    <p>When you shop at Herbert's you get the highest quality, best tasting, and freshest meat possible for your dollar. Period.</p>
                    <button>
                        <Link to="/specials">SEE OUR SPECIALS</Link>
                    </button >  

                </div>
                <div className="about-gallery">
                    <img src={Aboutgallery1} alt=""/>
                    <img src={Aboutgallery2} alt=""/>
                    <img src={Aboutgallery3} alt=""/>
                    <img src={Aboutgallery4} alt=""/>
                </div>
            </div>
            
        </Container>
    );
};

export default About;