import React from 'react';
import styled from '@emotion/styled';
import {CouldCuts,Meat} from '../../img'

import {Link} from 'react-router-dom';
import mq from './../../scripts/breakpoints';


const HomepageContent = () => {

    const Container = styled.div`
        .content{
            text-align: center;
            margin: auto;
            font-family: 'Open Sans', sans-serif;
            .text{
                ${mq[0]}{
                    padding: 3rem;
                }
                h3 , p {
                    width: 80%;
                    margin: 1rem auto;
                }
                button{
                width: 50%;
                margin-bottom: 1rem;
                font-size: .7rem;
                font-family: Arial, Helvetica, sans-serif;
                font-weight: bold;
                border: solid 2px #C13A3A ;
                padding: .5rem 0rem;
                background-color: white; 
                border-radius: 1rem;
                ${mq[0]}{
                    font-size: .9rem;
                    margin-top: 2rem;
                    width: 35%;
                }
                    a{
                        text-decoration: none;
                        color: #C13A3A;
                    }
                }

            }

            .img{
                width: 100%;
                img{
                    width: 100%;
                }
            }
            
        };

        
    `;

    
    return (
        <Container>
            <div className="content">
                <div className="text">
                    <h3 className="text-title">Value, Quality, Service</h3>
                    <p>Herbert's Country Meat Market was established in 1936 
                    and has been serving the Hempstead community with the
                    freshest beef, pork, poultry, lamb, goat, oxtails and
                    so much more. We are open Monday through Saturday for
                    your convenience.
                    </p>
                    <button>
                    <Link to="/contact">CONTACT US</Link>
                    </button>
                </div>
                <div className="img">
                    <img src={CouldCuts} alt=""/>
                </div>
            </div>
            
            <div className="content">
                <div className="text">
                    <h3 className="text-title">Only the Best</h3>
                    <p>USDA PRIME is the Best Grade you can buy with very
                        well-distributed marbling – which is what gives beef
                        its flavor, tenderness and consistency.   
                        The next time you shop for beef – check if you are
                        getting the best possible Grade. Herbert’s only gives
                        you the best quality and price for USDA PRIME Beef. Many
                        stores sell Ungraded or Select Beef – you need to know
                        what you are getting for your money…..and you know you
                        only get the best at Herbert’s Country Meat Market.  
                    </p>
                    <button>
                        <Link to="/meatgrades">VIEW MEAT GRADES</Link>
                    </button >
                </div>
                <div className="img">
                    <img src={Meat} alt=""/>
                </div>
            </div>
            
        </Container>
    );
};

export default HomepageContent;