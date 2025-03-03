import React from 'react';
import Navbar from './navbar'
import Header from './header'
import Drive from './Drive'
import Collabration from './Collabration'
import Chancelight from './chancelight';
import Dependability from './dependability';
import Feature from './feature';

function Main(props) {
    return (
        <>
        <Navbar/>
        <Header/>
        <Drive/>
        <Collabration/>
        <Chancelight/>
        <Dependability/>
        <Feature/>
        </>
    );
}

export default Main;