/*
 * Copyright (c) 2021, MarcusSlover All rights reserved.
 */

import '../style/Font.css'

import Header from '../main/Header';
import Footer from "../main/Footer";
import React from "react";
import Body from "../main/Body";
import ThankYouPurchase from "../main/body/ThankYouPurchase";

const SuccessfulPurchase = () => {
    return <div id="SuccessfulPurchase">
        <Header/>
        <Body>
            <ThankYouPurchase/>
        </Body>
        <Footer/>
    </div>;
};

export default SuccessfulPurchase;
