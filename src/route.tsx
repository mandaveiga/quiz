import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Questions from './pages/Questions';
import Sucess from './pages/Sucess';


function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Landing} />

            <Route path="/questions/:category" component={Questions} />

            <Route path="/sucess" component={Sucess} />

        </BrowserRouter>
    )
}

export default Routes;