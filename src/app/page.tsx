import React from 'react'
import Img from '/img.jpeg'

import type { AppProps } from 'next/app';
import Navbar from './components/NavBar';

const Home: React.FC = () => {
  return (
    <div>
      <Navbar />
    </div>
  );
};

export default Home