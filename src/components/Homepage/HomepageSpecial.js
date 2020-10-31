import React,{useState} from 'react';
import styled from '@emotion/styled';

import {Cow,Tbone,Chicken,Add,Remove} from '../../img'
import { Link } from 'react-router-dom';


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
            .list{
                border-bottom: solid #eee 1px;
                display: none;
                p{
                    font-family: 'Cabin'
                }
                ul{
                    li{
                        font-family: 'Arial';
                        font-size: .9rem;
                    }
                }
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
            a{
                list-style: none;
                color: #C13A3A
            }
        }
        
    `;

const HomepageSpecial = () => {

    const [isDetail,setDetail] = useState(true)

    const show = (e) =>{
        
        const target = e.target
        .parentElement
        .parentElement
        .nextElementSibling
        .nextElementSibling

        
        target.style.display = 'block'
        target.classList.add('animate__animated', 'animate__fadeIn')
        setDetail(false)
    }

    const hide = (e) =>{
        const target = e.target
        .parentElement
        .parentElement
        .nextElementSibling
        .nextElementSibling
        
        target.style.display = 'none'
        setDetail(true)
    }

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
                            <p>Good Old Day #1</p> 
                            <span>
                                {isDetail
                                ?
                                    <img  src={Add} onClick={show} alt=""/>
                                    
                                :
                                    <img src={Remove} onClick={hide} alt=""/>
                                }
                                
                            </span>
                        </div>
                        <div className="price">
                            $49.98
                        </div>
                        <div className="list">
                            <p>Includes FREE 1lb.
                               Package of Margarine
                            </p>
                            <ul>
                                <li>
                                    2lbs.Prime Cut
                                    Chuck Steak
                                </li>
                                <li>
                                    2lbs.Prime Ground
                                    Chuck 
                                </li>
                                <li>
                                    2lbs.Grain-Fed Pork
                                    Chops
                                </li>
                                <li>
                                    1lb.Country Slab
                                    Bacon
                                </li>
                                <li>
                                    3 lbs.Grade A Perdue
                                    Chicken
                                </li>
                                <li>
                                    2lbs.Grade A Perdue
                                    Chicken Wings
                                </li>
                                <li>
                                    3lbs.Grade A Perdue
                                    Quartered Legs
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="special">
                        <img src={Tbone} alt=""/>
                        <div className="name">
                            <p>Cookin' Good #2</p>
                            <span>
                                {isDetail
                                ?
                                    <img  src={Add} onClick={show} alt=""/>
                                    
                                :
                                    <img src={Remove} onClick={hide} alt=""/>
                                }
                                
                            </span>
                        </div>
                        <div className="price">
                            $81.98
                        </div>
                        <div className="list">
                                <p>Includes FREE 1 Dozen
                                    Extra Large Eggs</p>
                                <ul>
                                    <li>2 lbs. Prime Cut Chuck Steak</li>
                                    <li>2 lbs. Prime Ground Chuck</li>
                                    <li>2 lbs Prime Boneless Steaks</li>
                                    <li>3 lbs. Grain-Fed Pork Spare Ribs</li>
                                    <li>2 lbs. Grain-Fed Pork Chops</li>
                                    <li>1 lb. Country Slab Bacon</li>
                                    <li>3 lbs. Grade A Perdue Chicken</li>
                                    <li>2 lbs. Grade A Perdue Chicken Wings</li>
                                    <li>3 lbs. Grade A Perdue Quartered Legs</li>
                                    <li>1 lb. Franks (Chicken, Turkey, or Beef)</li>
                                    <li>1 lb. Package of Margarine</li>
                                </ul>
                                
                        </div>
                        
                    </div>
                    <div className="special">
                        <img src={Chicken} alt=""/>
                        <div className="name">
                            <p>Chicken Lickin #3</p>
                            <span>
                                {isDetail
                                ?
                                    <img  src={Add} onClick={show} alt=""/>
                                    
                                :
                                    <img src={Remove} onClick={hide} alt=""/>
                                }
                                
                            </span>
                        </div>
                        <div className="price">
                            $59.98
                        </div>
                        <div className="list">
                                <p>Includes FREE Jar of "Spice Time"
                                     Spice</p>
                                <ul>
                                    <li>2 lbs. Grade A Perdue Chicken Cutlets</li>
                                    <li>2 lbs. Grade A Perdue Chicken Breasts</li>
                                    <li>3 lbs. Grade A Perdue Chicken Wings</li>
                                    <li>2 lbs. Premium Turkey Burgers</li>
                                    <li>1 Pkg. Premium Ground Turkey</li>
                                    <li>3 lbs. Grade A Perdue Chicken</li>
                                    <li>10 lbs. Grade A Perdue Quartered Legs</li>
                                </ul>
                                
                        </div>
                    </div>
            </div>
            <button>
                <Link to="/specials">VIEW MORE SPECIALS</Link>
            </button>
        </Container>
    );
};

export default HomepageSpecial;