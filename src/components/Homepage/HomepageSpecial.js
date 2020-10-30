import React from 'react';
import styled from '@emotion/styled';

import {Cow,Tbone,Chicken,Add} from '../../img'

const HomepageSpecial = () => {

    const Container = styled.div`
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        .text{
            text-align: center;
            width: 80%;
            margin: auto;
            h3{
                
                font-size: 1.5rem;
                color:#C13A3A;
            }
        }
        .specials-container{
            width: 100%;
        }
        .special{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 50%;
            margin: auto;
            margin-bottom: 2.5rem;
            img{
                width: 60px;
            }
            .name{
                margin: .5rem 0;
                width: 100%;
                border: solid 1px #C13A3A;
                color: #C13A3A;
                font-weight: bold;
                font-family: 'Cabin', sans-serif;
                display: flex;
                justify-content: space-around;
                align-items: center;
                p{
                    margin-right: .8rem;
                }
                span img{
                    width: 20px;
                    
                }
            }
            .price{
                font-weight: bold;
                font-family: 'Alfa Slab One', sans-serif;
                font-size: 1.8rem;
                color: #C13A3A;

            }
        }
        button{
            margin-bottom: 1;
            width: 50%;
            margin-bottom: 1rem;
            font-size: .7rem;
            font-family: Arial, Helvetica, sans-serif;
            font-weight: bold;
            border: solid 2px #C13A3A ;
            color: #C13A3A;
            padding: .5rem 0rem;
            background-color: white; 
            border-radius: 1rem;
        }
        
    `;

    
    return (
        <Container>
            <div className="text">
                <h3>Our Specials</h3>
                <p>Here are just a few of the specials we offer. 
                   Make sure to check out our other specials!
                </p>
            </div>
            <div className="specials-container">
                <div className="special">
                    <img src={Cow} alt=""/>
                    <div className="name">
                        <p>Good Old Day #1</p> <span><img src={Add} alt=""/></span>
                    </div>
                    <div className="price">
                        $49.98
                    </div>
                </div>
                <div className="special">
                    <img src={Tbone} alt=""/>
                    <div className="name">
                        <p>Cookin' Good #2</p> <span><img src={Add} alt=""/></span>
                    </div>
                    <div className="price">
                        $81.98
                    </div>
                </div>
                <div className="special">
                    <img src={Chicken} alt=""/>
                    <div className="name">
                        <p>Chicken Lickin #3</p> <span><img src={Add} alt=""/></span>
                    </div>
                    <div className="price">
                        $59.98
                    </div>
                </div>
            </div>
            <button>
                VIEW MORE SPECIALS
            </button>
        </Container>
    );
};

export default HomepageSpecial;