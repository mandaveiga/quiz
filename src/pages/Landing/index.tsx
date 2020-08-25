import React from 'react';

import logo from '../../assets/images/logo.png';
import Category from '../../components/Category';

import { Container, Background } from './styles';

const Landing: React.FC = () => {
    return (
        <>
            <Container>
                <img src={logo} alt="logo" />

                <p>Para iniciar, escolha uma categoria</p>

                <Category name="geografia" />
                <Category name="cinema" />
                <Category name="diversos" />
                <Category name="esportes" />
            </Container>

            <Background />
        </>
    );
}

export default Landing;