import React from 'react';
import styled from '@emotion/styled';
import {CouldCuts,Meat} from '../../img'

import {Link} from 'react-router-dom';

const HomepageContent = () => {

    const Container = styled.div`

        .text{
            text-align: center;
            width: 80%;
            margin: auto;
            font-family: 'Open Sans', sans-serif
        };

        img{
            width: 100%;
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
            a{
                text-decoration: none;
                color: #C13A3A;
            }
        }
    `;

    
    return (
        <Container>
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
            <img src={CouldCuts} alt=""/>
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
            <img src={Meat} alt=""/>
        </Container>
    );
};

export default HomepageContent;