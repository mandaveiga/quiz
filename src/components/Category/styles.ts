import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const Container = styled(Link)`
    width: 16.6rem;
    height: 16.6rem;
    background: #fff;
    border-radius: 25px;
    box-shadow: 0px 5px 25px rgba(0, 0, 0, 0.2);
    padding: 4.6rem;
    margin-bottom: 16px;
    transition: box-shadow 0.2s ;

    :hover{
        box-shadow: 0 5px 15px rgba(0,0,0,0.5);    
    }

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    text-decoration: none; 
  
    img {
        width: 125%;  
    }

    >p {
        font-family: Poppins;
        font-size: 3.2rem;
    }

    @media (min-width: 600px) {
        margin: 2.0rem;
        width: 24.5rem;
        height: 24.5rem;
        font-size: 3.6rem;
    }
`;
