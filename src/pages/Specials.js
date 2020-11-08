import React,{useState} from 'react';
import styled from '@emotion/styled'
import mq from './../scripts/breakpoints';
import Banner  from './../components/Banner'
import {SpecialBG,
        Cow,
        Tbone,
        Chicken,
        Bacon,
        Drumbstick,
        Fillet,
        Meat2,
        Pig,
        Pincho,
        Ribs,
        Sausage,
        Steak,
        Wholechicken,
        Add,
        Remove} from '../img'

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
                    
                }
                ul{
                    li{
                        font-family: 'Arial';
                        font-size: .9rem;
                    }
                }
            }
        }
   }
`;





const Specials = () => {

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
            <Banner img={SpecialBG} title="SPECIALS" />
            <div className="main">
                <div className="text">
                    <h3>Our Specials</h3>
                    <p>We offer only the best in USDA Prime beef and meat selections. It's the same quality you've come to know and love for over 80 years.
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
                    <div className="special">
                        <img src={Drumbstick} alt=""/>
                        <div className="name">
                            <p>Mama's Best #4</p>
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
                                <p>Includes FREE 1 lb. Package of Margarine</p>
                                <ul>
                                    <li>2 lbs. Prime Cut Chuck Steak</li>
                                    <li>2 lbs. Prime Ground Chuck</li>
                                    <li>2 lbs. Prime Beef Stew</li>
                                    <li>2 lbs. Grain-Fed Pork Chops (Sirloin or Shoulder Cuts)</li>
                                    <li>3 lbs. Grade A Perdue Chicken (Whole or Cut)</li>
                                    <li>2 lbs. Grade A Perdue Chicken Wings</li>
                                    <li>3 lbs. Grade A Perdue Quartered Legs</li>
                                    <li>1 lb. Franks (Chicken, Turkey, or Beef)</li>
                                </ul>
                                
                        </div>
                    </div>
                    <div className="special">
                        <img src={Pig} alt=""/>
                        <div className="name">
                            <p>Happy Meal #5</p>
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
                            $41.98
                        </div>
                        <div className="list">
                                <p>Includes FREE 1 lb. Package of Margarine</p>
                                <ul>
                                    <li>2 lbs. Prime Cut Chuck Steak</li>
                                    <li>2 lbs. Grain-fed Pork Chops (Sirloin or Shoulder Cut)</li>
                                    <li>1 lb. Country Slab Bacon</li>
                                    <li>3 lbs. Grade A Perdue Chicken</li>
                                    <li>2 lbs. Grade A Perdue Chicken Wings</li>
                                    <li>5 lbs. Grade A Perdue Quartered Legs</li>
                                </ul>
                                
                        </div>
                    </div>
                    <div className="special">
                        <img src={Sausage} alt=""/>
                        <div className="name">
                            <p>Bar-B-Q #6</p>
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
                            $69.98
                        </div>
                        <div className="list">
                                <p>Includes FREE Package of Regular Hot Dog or Burger Buns</p>
                                <ul>
                                    <li>3 lbs. Grain-fed Pork Spare Ribs</li>
                                    <li>1 lb. Franks (Chicken, Turkey or Beef)</li>
                                    <li>2 lbs. Prime Cut Chuck Steak</li>
                                    <li>2 lbs. Prime Ground Chuck</li>
                                    <li>2 lbs. Prime Boneless Steaks</li>
                                    <li>5 lbs. Grade A Perdue Drumsticks or Legs</li>
                                    <li>3 lbs. Grade A Perdue Chicken Wings</li>
                                    <li>1 Jar Kraft BBQ Sauce</li>
                                </ul>
                                
                        </div>
                    </div>
                    <div className="special">
                        <img src={Fillet} alt=""/>
                        <div className="name">
                            <p>Little Giant #7</p>
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
                            $72.98
                        </div>
                        <div className="list">
                                <p>Includes FREE 1 lb. Package of Margarine</p>
                                <ul>
                                    <li>2 lbs. Prime Ground Chuck</li>
                                    <li>2 lbs. Prime Boneless Steaks</li>
                                    <li>2 lbs. Prime Beef Stew</li>
                                    <li>3 lbs. Grain-fed Pork Spare Ribs</li>
                                    <li>2 lbs. Grain-fed Pork Chops (Sirloin or Shoulder Cut)</li>
                                    <li>1 lb. Franks (Chicken, Turkey or Beef)</li>
                                    <li>3 lbs. Grade A Perdue Chicken</li>
                                    <li>2 lbs. Grade A Perdue Drumsticks or Legs</li>
                                    <li>3 lbs. Grade A Perdue Quartered Legs</li>
                                </ul>
                                
                        </div>
                    </div>
                    <div className="special">
                        <img src={Ribs} alt=""/>
                        <div className="name">
                            <p>Obama Deal #8</p>
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
                            $139.98
                        </div>
                        <div className="list">
                                <p>Includes FREE 1 Dozen Extra Large Eggs</p>
                                <ul>
                                    <li>3 lbs. Prime Ground Chuck</li>
                                    <li>2 lbs. Prime Cut Chuck Steak</li>
                                    <li>3 lbs. Prime Beef Back Ribs</li>
                                    <li>1 Package Prime Beef Burgers</li>
                                    <li>3 lbs. Grain-Fed Pork Spare Ribs</li>
                                    <li>2 lbs. Grade A Perdue Chicken Cutlets</li>
                                    <li>3 lbs. Grade A Perdue Chicken Wings</li>
                                    <li>5 lbs. Grade A Perdue Quartered Legs</li>
                                    <li>5 lbs. Grade A Perdue Drumsticks or Legs</li>
                                    <li>5 lbs. Grade A Perdue Chicken Breasts</li>
                                    <li>2 lbs. Premium Turkey Burgers</li>
                                    <li>1 Package Premium Ground Turkey</li>
                                    <li>1 lb. Franks (Chicken, Turkey or Beef)</li>
                                    <li>2 Packages Premium Turkey Bacon</li>
                                </ul>
                                
                        </div>
                    </div>
                    <div className="special">
                        <img src={Steak} alt=""/>
                        <div className="name">
                            <p>Country Cookin #9</p>
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
                            $139.98
                        </div>
                        <div className="list">
                                <p>IncluIncludes FREE Package of Franks (Chicken, Turkey or Beef)</p>
                                <ul>
                                    <li>4 lbs. Prime Cut Chuck Steak</li>
                                    <li>2 lbs. Prime Boneless Steaks</li>
                                    <li>2 lbs. Prime Ground Chuck</li>
                                    <li>2 lbs. Prime Beef Stew</li>
                                    <li>3 lbs. Grain-fed Pork Chops</li>
                                    <li>2 lbs. Country Slab Bacon</li>
                                    <li>4 lbs. Grain-fed Fresh Pork Knuckle Bones</li>
                                    <li>3 lbs. Box All-Meat Smoked Sausage</li>
                                    <li>8 lbs. Grade A Perdue Drumsticks or Legs</li>
                                    <li>5 lbs. Grade A Perdue Quartered Legs</li>
                                    <li>3 lbs. Grade A Perdue Chicken Wings</li>
                                    <li>2 Dozen Grade A Extra Large Eggs</li>
                                    <li>1 Giant Loaf of White Bread</li>
                                </ul>
                                
                        </div>
                    </div>
                    <div className="special">
                        <img src={Meat2} alt=""/>
                        <div className="name">
                            <p>Back Home #10</p>
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
                            $99.98
                        </div>
                        <div className="list">
                                <p>Includes FREE 1 lb. Package of Margarine</p>
                                <ul>
                                    <li>2 lbs. Prime Cut Chuck Steak</li>
                                    <li>2 lbs. Prime Boneless Steaks</li>
                                    <li>2 lbs. Prime Beef Stew</li>
                                    <li>2 lbs. Prime Ground Chuck</li>
                                    <li>2 lbs. Premium Beef Liver</li>
                                    <li>2 lbs. Grain-fed Pork Chops (Shoulder or Sirloin Cut)</li>
                                    <li>3 lbs. Grain-fed Fresh Pork Knuckle Bones</li>
                                    <li>2 lbs. Country Slab Bacon</li>
                                    <li>1 lb. Franks (Chicken, Turkey or Beef)</li>
                                    <li>6 lbs. Grade A Perdue Chicken (Whole or Cut)</li>
                                    <li>3 lbs. Grade A Perdue Quartered Legs</li>
                                    <li>2 lbs. Grade A Perdue Chicken Wings</li>
                                </ul>
                                
                        </div>
                    </div>
                    <div className="special">
                        <img src={Bacon} alt=""/>
                        <div className="name">
                            <p>Good Morning Sunshine #11</p>
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
                            $139.98
                        </div>
                        <div className="list">
                                <p>Includes FREE 1 lb. Package of Margarine</p>
                                <ul>
                                    <li>1 lb. Homemade Sage Sausage or Country Slab Bacon</li>
                                    <li>1 Dozen Grade A Extra Large Eggs</li>
                                    <li>1 Box of Grits</li>
                                    <li>1 Large Loaf of White Bread or 2 Sleeves Buttermilk Biscuits</li>
                                    <li>1 Half Gallon of Tropicana Fruit Juice</li>
                                </ul>
                                
                        </div>
                    </div>
                    <div className="special">
                        <img src={Pincho} alt=""/>
                        <div className="name">
                            <p>The ST. Louie #12</p>
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
                            $189.98
                        </div>
                        <div className="list">
                                <p>Includes FREE 3 lb. All Meat Sausage</p>
                                <ul>
                                    <li>4 lbs. Prime Cut Chuck Steak</li>
                                    <li>2 lbs. Prime Beef Stew</li>
                                    <li>2 lbs. Prime Boneless Steaks</li>
                                    <li>2 lbs. Premium Beef Liver</li>
                                    <li>3 lbs. Prime Ground Chuck</li>
                                    <li>5 lbs. Grade A Perdue Drumsticks or Legs</li>
                                    <li>9 lbs. Grade A Perdue Chicken (Whole or Cut)</li>
                                    <li>5 lbs. Grade A Perdue Chicken Wings</li>
                                    <li>2 lbs. Grade A Perdue Chicken Cutlets</li>
                                    <li>15 lbs. Grade A Perdue Quartered Legs</li>
                                    <li>5 lbs. Grain-fed Pork Chops (Sirloin or Shoulder Cut)</li>
                                    <li>3 lbs. Country Slab Bacon</li>
                                    <li>2 lbs. Franks (Chicken, Turkey or Beef)</li>
                                    <li>2 Dozen Extra Large Egss</li>
                                </ul>
                                
                        </div>
                    </div>
                    <div className="special">
                        <img src={Wholechicken} alt=""/>
                        <div className="name">
                            <p>Butcher's Best #13</p>
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
                            $234.98
                        </div>
                        <div className="list">
                                <p>Includes FREE 3 lb. All Meat Sausage</p>
                                <ul>
                                    <li>8 lbs. Prime Cut Chuck Steak</li>
                                    <li>5 lbs. Prime Ground Chuck</li>
                                    <li>5 lbs. Grain-fed Pork Chops (Sirloin or Shoulder Cut)</li>
                                    <li>3 lbs. Grain-fed Pork Spare Ribs</li>
                                    <li>5 lbs. Grain-fed Fresh Pork Knuckle Bones</li>
                                    <li>2 lbs. Premium Lean Goat Meat (Cut from Leg)</li>
                                    <li>5 lbs. Meaty Smoked Pork Knuckle Bones</li>
                                    <li>2 lbs. Country Slab Bacon</li>
                                    <li>3 lbs. Franks (Chicken, Turkey or Beef)</li>
                                    <li>9 lbs. Grade A Perdue Chicken (Whole or Cut)</li>
                                    <li>5 lbs. Grade A Perdue Chicken Wings</li>
                                    <li>5 lbs. Grade A Perdue Drumsticks or Legs</li>
                                    <li>2 lbs. Grade A Perdue Chicken Cutlets</li>
                                    <li>15 lbs. Grade A Perdue Quartered Legs</li>
                                    <li>2 Dozen Grade A Extra Large Eggs</li>
                                    <li>1 Giant Loaf of White Bread</li>
                                </ul>
                                
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Specials;