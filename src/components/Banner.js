import React from 'react';
import styled from '@emotion/styled';
import mq from './../scripts/breakpoints';



const componentName = ({img,title}) => {
    const Container = styled.div`
            width: 100%;
            .background{
                display: flex;
                justify-content: center;
                align-items: center;
                height: 200px;
                width: 100%;
                background-image: url(${img});
                background-position: center;
                background-size: cover;
                background-repeat: no-repeat;
                ${mq[0]}{
                    padding: 5rem 0;
                }${mq[1]}{
                    padding: 20rem 0;
                    background-attachment: fixed;
                }
                h3{
                    color: white;
                    font-size: 2rem;
                    ${mq[0]}{
                        font-size: 4rem;
                    }
                }
            }
    `;
    return (
        <Container>
            <div className="background">
                <h3>{title}</h3>
            </div>
        </Container>
    );
};

export default componentName;