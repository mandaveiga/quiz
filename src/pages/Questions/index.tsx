import React from 'react';
import { Link, useParams } from 'react-router-dom';

import logo from '../../assets/images/logo.png';
import voltarImg from '../../assets/images/voltar.png';
import unansweredImg from '../../assets/images/question-unanswered.svg';
import correctImg from '../../assets/images/question-correct.svg';
import incorrectImg from '../../assets/images/question-incorrect.svg';

import categories from '../../data/categories';

import { Container, Background, BoxQuestion, BoxCategory } from './styles';

const Questions: React.FC = () => {

    let { category } = useParams();

    return (
        <>
            <Container>
                <Link to="/">
                    <img src={voltarImg} alt="" />
                </Link>

                <img src={logo} alt="" />

                <BoxCategory color={categories[category].color}>
                    <img src={categories[category].image} alt="" />
                    <p>{categories[category].title}</p>
                </BoxCategory>

                <BoxQuestion >
                    <header>
                        <img src={incorrectImg} alt="" />
                        <img src={correctImg} alt="" />
                        <img src={correctImg} alt="" />
                        <img src={correctImg} alt="" />
                        <img src={unansweredImg} alt="" />
                        <img src={unansweredImg} alt="" />

                        <p>06</p>
                    </header>

                    <article>
                        <p>{categories[category].questions[0].title}</p>
                    </article>

                    {categories[category].questions[0].answers.map((answer) =>
                        <Link to="/sucess">
                            <p key={answer.label}>{answer.label}</p>
                        </Link>
                    )}
                </BoxQuestion>

            </Container>
            <Background />
        </>
    );
}

export default Questions;