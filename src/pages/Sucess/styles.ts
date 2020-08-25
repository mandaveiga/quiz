import styled from 'styled-components';

import background from '../../assets/images/background.svg';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;

    >img:first-child {
        width: 6rem;
        height: 6rem;
    }    

    > img:last-of-type{
        width: 17.73rem;
        height: 7.8rem;
        margin: 40px;        
    }
    #sucess {
        width: 0rem;
        height: 0rem;
    }
    @media (min-width: 800px) {
        align-content: center;
        align-items: baseline;

        > img:last-of-type{
            margin: 0px 40px;
        }
    }

    @media (min-width: 1050px) {
        justify-content: space-around;
        
        #sucess {
            width: 50rem;
            height: 40rem;
            margin-left: -179px;
            align-self: center;
        }
        >img:first-child {
            align-self: self-end;
            margin: 20px;
        }  

        > img:last-of-type{
            order: 3;
            align-self: flex-end;
            margin: 5px;
            width: 12rem;
            height: 5.3rem;
        } 
    }
`;

export const BoxCategory = styled.div`
    width: 26.2rem;
    height: 8rem;
    background: #fff;
    border-radius: 25px;
    margin-bottom: 20px;
    display: flex;
    align-items: center;

    img {
        height: 91%;
        width: 30%
    }

    p {
        font-family: Poppins;
        font-size: 3.2rem;
        color: #1091C8;
    }
`;
export const BoxQuestion = styled.article`
    width: 51.6rem;
    height: 47.6rem;
    background: #fff;
    border-radius: 25px;
    box-shadow: 0px 5px 25px rgba(0, 0, 0, 0.2);

    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-flow: column;

    >h2{
        font-family: Poppins;
        font-style: normal;
        font-weight: 600;
        font-size: 46px;
        line-height: 72px;
        color: rgba(239, 107, 123, 0.78);
    }

    >p{
        font-family: Poppins;
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        line-height: 32px;
        margin: 10px 0px;
        color: #B1B1B1;
    }

    @media (min-width: 800px) {
        align-self: center;

        >p{
            font-size: 30px;
            line-height: 45px;
        }
    }    
`;


export const Result = styled.section`
    width: 90%;
    height: 40%;
    background: #fff;
    border-radius: 25px;
    margin-bottom: 20px;
    box-shadow: 0px 5px 25px rgba(0, 0, 0, 0.1);
    
    display: flex;
    justify-content: space-evenly;

    img {
        position: absolute;
        margin-top: 5%;
    }

    >div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;

        h2{
            z-index: 2;
            font-family: Poppins;
            font-style: normal;
        }

        h2:first-child {
            font-weight: 300;
            font-size: 20px;
            line-height: 36px;
            color: #22985F;
        }

        h2:last-of-type{
            font-weight: 600;
            font-size: 40px;
            line-height: 72px;
            color: #39E492;
        }
    }

    >div:first-child {
        margin-top: 1rem;
        h2{
            color: #B1B1B1;
        }

        h2:first-child {
            color: #987422;
        }
    }

    >div:last-of-type {
        margin-top: 1rem;
        h2{
            color: #C54444;
        }

        h2:first-child {
            color: #983722;
        }
    }
    @media (min-width: 800px) {
        >div h2:first-child {
            font-size: 24px;
        }
        img {
            margin-top: 2%;
        }
    }
`;

export const Background = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    background: url(${background}) no-repeat;
    background-position: bottom right 100%;
    background-size: cover;
    z-index: -1;
`;

