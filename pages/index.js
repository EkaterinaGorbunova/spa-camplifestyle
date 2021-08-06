// https://colinhacks.com/essays/building-a-spa-with-nextjs

import React from 'react';
import { TopNavbar } from '../components/TopNavbar';
import { Banner } from '../components/Banner'
import { About } from '../components/About';
import { Relax } from '../components/Relax';
import { DeStress } from '../components/DeStress';
import { Roadmap } from '../components/Roadmap';
import { Team } from '../components/Team';
import Footer from '../components/Footer';

export default function App() {
  return (
    <>
      <TopNavbar />
      <Banner />
      <About />
      <Relax />
      <DeStress />
      <Roadmap />
      <Team />
      <Footer />      
    </>
  );
}
