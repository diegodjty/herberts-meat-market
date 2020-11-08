import React from 'react';
import styled from '@emotion/styled'
import {MeatGradesBG,
        MeatInspection, 
        MeatGrading, 
        PrimeCuts, 
        ChoiceCuts, 
        SelectCuts, 
        MeatBeef, 
        MeatChicken, 
        MeatDuck, 
        MeatLamb, 
        MeatPork, 
        MeatTurkey 
        } from '../img/index'
import mq from './../scripts/breakpoints';
import Banner  from './../components/Banner'

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
                ${mq[0]}{
                    font-size: 2rem;
                }
            }
            p{
                font-family: 'Arial';
                font-size: .8rem;
                ${mq[0]}{
                    font-size: 1rem;
                }
            }
        }
        .content{
            
            h4{
                color: black;
                font-size: 1.2rem; 
                ${mq[0]}{
                    font-size: 1.5rem;
                }
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
                ${mq[0]}{
                    font-size: 1rem;
                }
            }
            .first-section{
                width: 100%;
                background-color: #F6F6F6;
                .card{
                    padding: 1rem 0rem;
                    img{
                        width: 90%;
                    }
                    .text{
                        width: 80%;
                        margin: auto;
                        h5{
                            font-size: 1.2rem;
                        }
                        p{
                            text-align: center;
                        }
                    }
                }
            }
            .line{
                background-color: #C13A3A;
                color: white;
                font-size: 2rem;
                padding: 1rem 0;
            }
            .second-section{
                display: flex;
                flex-direction: column;
                padding-top: 1rem;
                .card{
                    img{
                        width: 100%;
                    }
                    .text{
                        width: 80%;
                        margin: auto;
                        p{
                            text-align: center;
                        }
                    }
                }
            }
        }
        .meatGrades-gallery{
            img{
                width: 50%;
                height: 100%;
                margin-bottom: -1rem;
            }
        }
    }
`

const MeatGrades = () => {
    return (
        <Container>
            <Banner img={MeatGradesBG} title="MEAT GRADES & CUTS" />
            <div className="main">
                <div className="title">
                    <h3>MAKING THE GRADE</h3>
                    <p>Herbert's Meat Market has been "making the grade" for over 80 years. We only give you the best quality and price for USDA PRIME.</p>
                </div>
                <div className="content">
                    <div className="first-section">
                        <div className="card">
                            <img src={MeatInspection} alt="meat inspection"/>
                            <div className="text">
                                <h5>Meat Inspection = Safe and Wholesome Beef</h5>
                                <p>The wholesomeness of the U.S. meat supply is ensured by meat inspection. All meat that is sold must, by law, pass inspection. Meat products are among the most highly regulated and supervised products in the food supply. Everyone pays for meat inspection through taxes. </p>
                            </div>
                        </div>
                        <div className="card">
                            <img src={MeatGrading} alt="meat grading"/>
                            <div className="text">
                                <h5>Meat Grading = Tasteand Tenderness</h5>
                                <p>Meat grading is administered by the U.S. Department of Agriculture (USDA). Beef quality grades indicate palatability characteristics such as tenderness, juiciness and flavor. There are eight quality grades for beef which reflect the amount of marbling (fat within the lean), firmness, color and texture of the beef, and the maturity of the animal.
                                   Grading is optional and paid for by meat processors. More than half of the beef available is graded. </p>
                            </div>
                        </div>
                    </div>
                    <div className="line">
                        WHAT CUT?
                    </div>
                    <div className="second-section">
                        <div className="card">
                            <img src={PrimeCuts} alt=""/>
                            <div className="text">
                                <p>Prime has the most marbling.
                                    This is the best beef you can buy with the most flavor, tenderness
                                    and consistency!
                                </p>
                            </div>
                        </div>
                        <div className="card">
                            <img src={ChoiceCuts} alt=""/>
                            <div className="text">
                                <p>Choice cuts tend to have a little less marbling. Choice is the most widely available grade in the market.
                                </p>
                            </div>
                        </div>
                        <div className="card">
                            <img src={SelectCuts} alt=""/>
                            <div className="text">
                                <p>Select has the least amount of marbling, making it leaner but often less juicy and flavorful than the other two grades.
                                </p>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div className="meatGrades-gallery">
                    <img src={MeatBeef} alt="beef"/>
                    <img src={MeatChicken} alt="chicken"/>
                    <img src={MeatPork} alt="pork"/>
                    <img src={MeatLamb} alt="lamb"/>
                    <img src={MeatTurkey} alt="turkey"/>
                    <img src={MeatDuck} alt="duck"/>
                </div>
            </div>
                
            
        </Container>
    );
};

export default MeatGrades;