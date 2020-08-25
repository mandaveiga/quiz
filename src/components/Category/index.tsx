import React from 'react';
import categories from '../../data/categories';
import { Container } from './styles';

interface CategoryProps {
    name: string;
}

const Category: React.FC<CategoryProps> = ({ name }) => {

    return (
        <Container to={`/questions/${name}`} id={`category-${name}`}>
            <img src={categories[name].image} alt="Category" />
            <p style={{ color: categories[name].color }} >{categories[name].title}</p>
        </Container>
    )
}

export default Category;
