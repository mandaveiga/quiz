import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/images/logo.png';
import voltarImg from '../../assets/images/voltar.png';
import geografiaImg from '../../assets/images/geografia.png';
import sucessImg from '../../assets/images/lime-success.png';
import star from '../../assets/images/star.svg';

import { Container, Background, BoxQuestion, BoxCategory, Result } from './styles';

const Sucess: React.FC = () => {
    return (
        <>
            <Container>

                <Link to="/">
                    <img src={voltarImg} />
                </Link>

                <img id="sucess" src={sucessImg} />
                <img src={logo} />

                <BoxQuestion >

                    <BoxCategory>
                        <img src={geografiaImg} />
                        <p>Geografia</p>
                    </BoxCategory>

                    <h2>Parabens!</h2>
                    <p>Aqui está o seu desenpenho</p>

                    <Result>
                        <div>
                            <h2>Total</h2>
                            <h2>06</h2>
                        </div>
                        <div>
                            <h2>Acertos</h2>
                            <img src={star} />
                            <h2>04</h2>
                        </div>
                        <div>
                            <h2>Incorretos</h2>
                            <h2>01</h2>
                        </div>
                    </Result>

                </BoxQuestion>

            </Container>
            <Background />
        </>
    );
}

export default Sucess;