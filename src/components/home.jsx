import React from 'react';
import Body from './body/body';
import Footer from './footer/footer';
import Header from './header/header';
import Signup from './signup/signup';

const Home = props => {
    return (
        <>
            <Header/>
            <Body/>
            <Footer/>
            <Signup/>
        </>
    )
};

export default Home;