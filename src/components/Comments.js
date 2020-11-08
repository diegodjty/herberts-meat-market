import React,{useState,useEffect} from 'react';
import styled from '@emotion/styled';
import {Quote,CommentBG} from '../img'
import mq from './../scripts/breakpoints';


const Container = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    flex-direction: column;
    ${mq[1]}{
        padding: 10rem;
    }
    img{
        margin: 3rem 0;
        width: 40px;
        height: 20%
    }

    .testimonial{
        width: 80%;
        height: 100px;
        margin-bottom: 5rem;
        text-align: center;
        ${mq[1]}{
            width: 50%;
            font-size: 1.2rem;
        }
    }

    .name{
        font-family: 'Cabin' ,sans-serif;
        height: 10%;
        font-size: 1.2rem;
    }
    

`;

const Comments = () => {

    const [seconds,setSeconds] = useState(0)
    // eslint-disable-next-line
    const [testimonials,setTestimonials] = useState([
        {
            testimonial: '"Excellent customer service, the meat is so'+
                      'tender and delicious. Great place to get meat'+ 
                      'with good taste at the last minute, you will'+ 
                      'always do great in your barbecues, because their ham,'+
                      'pork chops, chicken and their "entraña" are so good!!'+
                      'Your guests will be really happy."',    
            name: 'Marta C.'
        },
        {
            testimonial: '"Best prices and customer service, Roberto is amazing. Love this place."',
            name: 'Franco B.'
        },
        {
            testimonial: '"I learned a lot! They have many old time, southern'+
                      'style smoked meats. They also sell seasonings/rubs/marinades'+
                      'for meat produce, beer and other grocery items to make your'+
                      'dinner a success."',
            name: 'P Eff.'
        }
    ])


    useEffect(() => {
        const interval = setInterval(() => {
          setSeconds((seconds)=>{
            if(seconds === 2){
                seconds = 0
                return seconds
            }
            return seconds + 1
          });
        }, 10000);
        return () => clearInterval(interval);
      }, []);

    return (
        <Container style={{backgroundImage: `url(${CommentBG})`,backgroundPosition: 'center'}}>
            <img src={Quote} alt=""/>
            <div className="testimonial animate__animated animate__fadeIn ">
                <div className="quote">
                    {testimonials[seconds].testimonial}
                </div>
                <div className="name">
                    {testimonials[seconds].name}
                </div>
            </div>
        </Container>
    );
};

export default Comments;