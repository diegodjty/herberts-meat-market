import React from 'react';
import styled from '@emotion/styled'
import ResponsiveGallery from 'react-responsive-gallery';
import {
    Gallery1,
    Gallery2,
    Gallery3,
    Gallery4,
    Gallery6,
    Gallery7,
    Gallery8,
    Gallery9,
    Gallery10,
    Gallery11,
    Gallery12,
    
} from '../img/'

const Container = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   margin-top: 100px;
   font-family: 'Cabin', sans-serif;
   .text{
       width: 90%;
       text-align: center;
       h3{
           color: #C13A3A;
           font-size: 1.5rem;
       }
       p{
        font-family: Arial, Helvetica, sans-serif
       }
   }
`
const Gallery = () => {

    const images =[
        {
            src: `${Gallery4}`
        },
        {
            src: `${Gallery2}`
        },
        {
            src: `${Gallery3}`
        },
        {
            src: `${Gallery1}`
        },
        {
            src: `${Gallery10}`
        },
        {
            src: `${Gallery11}`
        },
        {
            src: `${Gallery12}`
        },
        {
            src: `${Gallery8}`
        },
        {
            src: `${Gallery9}`
        },
        {
            src: `${Gallery6}`
        },
        {
            src: `${Gallery7}`
        },
        {
            src: `${Gallery8}`
        }
    ]
    
    return (
        <Container>
            <div className="text">
                <h3>OUR GALLERY</h3>
                <p>Herbert's Country Meat Market was established in 1936 and has been serving the Hempstead community with the freshest beef, pork, poultry, lamb, goat, oxtails and so much more. We take pride in our cuts of meat. Take a look at what we have to offer. Like what you see? Contact us about our specials! </p>
            </div>
            <ResponsiveGallery 
                images ={images}
                useLightBox={true}
                numOfImagesPerRow={{xs: 1,s: 2,m: 3,l: 3,xl: 4 ,xxl:4}}
            />
        </Container>
    );
};

export default Gallery;