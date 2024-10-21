import React from 'react';
import Header from '../Components/Header';
import Main from '../Components/Main';
import Category from '../Components/Category';
import Popular from '../Components/Popular';
import Services from '../Components/Services';

const Home = () => {
  return (
    <div>
        <Header />
        <Main />
        <Category />
        <Popular />
        <Services />
       

    </div>
  )
}

export default Home