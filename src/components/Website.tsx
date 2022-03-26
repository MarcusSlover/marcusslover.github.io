/*
 * Copyright (c) 2021, MarcusSlover All rights reserved.
 */
import React from 'react';
import {Route, Switch} from 'react-router-dom';
import App from "./app/App";
import SuccessfulPurchase from "./app/SuccessfulPurchase";

const Website = () => {
    return (
        <Switch> {/* The Switch decides which component to show based on the current URL.*/}
            <Route exact path='/' component={App}/>
            <Route exact path='/successfulPurchase' component={SuccessfulPurchase}/>
        </Switch>
    );
};

export default Website;
