import React from 'react';
import Header from '../../components/Header/Header';
import { Outlet } from 'react-router-dom';
import FeaturedBooks from '../../components/featureBooks/featureBooks';

const Home = () => {
  return (
    <main>
        <Header />
        <Outlet />
        <FeaturedBooks/>
    </main>
  )
}

export default Home
