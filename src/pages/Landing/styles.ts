import styled from 'styled-components';

import background from '../../assets/images/background-landing.svg';

export const Container = styled.div`

    display: grid; 
    grid-template-columns: 50% 50%; 
    grid-template-rows: 25% 25% 25% 25%;
    gap: 1.6rem 1.6rem;
    justify-items: baseline; 
    grid-template-areas: 

    "logo logo"
    "title title"
    "esportes geografia"
    "cinema diversos"; 

    #category-cinema{
        grid-area:cinema;
    }

    @media (max-width: 700px) {
        #category-cinema{
            justify-self: end;
        }
    }
    #category-geografia {
        grid-area:geografia;
    }

    #category-diversos {
        grid-area:diversos;
    }

    #category-esportes {
        grid-area:esportes;
        justify-self: end;
    }

    > img {
        position: relative;
        grid-area:logo;
        /* margin-top: 36px; */
    }

    > p {
        color: #FFFFFF; 
        font-size: 3.2rem;
        padding-bottom: 2.6rem;
        position: relative;
        grid-area: title;
        max-width: 52.0rem;
    } 
    
    @media (min-width: 600px) {

        align-items: center;

        >p {
            font-size: 38px;
            max-width: 42rem;
        }
        #category-diversos {
            align-self: flex-start;
        }
        
        #category-cinema {
            align-self: flex-start;
        }
        
    }   

    @media (min-width: 1100px) {
        
        gap: 0.6rem 0.6rem;
        margin-top: -22px;
        display: grid;
        grid-template-rows: 1fr 1fr ;
        grid-template-columns: 2fr 1fr 2fr;
        grid-template-areas: 

        "logo diversos cinema "
        "esportes geografia title";    
    
        > img{
            position: absolute;
            width: 32.0rem;
            height: 14.0rem;
            left: 8.3rem;
            grid-area: logo;
        }

        > p{
            width: 49.2rem;
            height: 11.4rem;

            font-style: normal;
            font-weight: 500;
            font-size: 38px;
            line-height: 57px;
         }
       
    }
`;



export const Background = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    background: url(${background}) no-repeat;
    background-position: bottom right 50%;
    background-size: cover;
    z-index: -1;

    @media (min-width: 900px) {
        background-position: bottom right -7.6rem;
    }
`;

export const con = styled.div`
`;

