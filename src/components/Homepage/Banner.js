import React from 'react';
import styled from '@emotion/styled';

import {BannerImg} from '../../img'

import {Link} from 'react-router-dom'

const Banner = () => {

    const BannerContainer = styled.div`
        
        background-position: center;
        background-size: cover;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-top: 100px;
        h2{
            color: white ;
            font-weight: bold;
            width: 80%;
            margin: auto;
            text-align: center;
            padding-top: 1.5rem;
            font-family: 'Cabin', sans-serif
        }

        p{
            color: white;
            width: 80%;
            margin: auto;
            font-size: .8rem;
            margin-top: 1rem;
            text-align: center;
            padding-bottom: .5rem;
            font-family: 'Open Sans', sans-serif
        }
        button{
            width: 40%;
            margin-bottom: 1rem;
            font-size: .7rem;
            font-family: Arial, Helvetica, sans-serif;
            font-weight: bold;
            border: none;
            background-color: white;
            color: #C13A3A; 
            padding: .5rem 0rem;
            border-radius: 1rem;
            a{
                text-decoration: none;
                color: #C13A3A;
            }
        }
    `;

    return (
        <BannerContainer
            style={{backgroundImage : `url(${BannerImg})`}}
        >
            <div className="textContainer">
                <h2>
                    SERVING THE<br/>
                    HEMPSTEAD<br/>
                    COMUMITY FOR<br />
                    OVER 80 YEARS
                </h2>
                <p>
                   When you shop at Herbert's you get the highest
                   quality, best tasting, and freshest meat possible for
                   your dollar. Period.
                </p>
                
            </div>
            <button><Link to="/contact">CONTACT US</Link></button>
        </BannerContainer>
    );
};

export default Banner;