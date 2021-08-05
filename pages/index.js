// https://colinhacks.com/essays/building-a-spa-with-nextjs

import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';
import { TopNavbar } from '../components/TopNavbar';
import Footer from '../components/Footer';
import { TraitsAndSpecies } from '../components/TraitsAndSpecies';
import { About } from '../components/About';
import { Community } from '../components/Community';
import { Roadmap } from '../components/Roadmap';
import { Team } from '../components/Team';
import ScrollToTop from '../components/ScrollToTop';

import TestMenu from "../components/TestMenu";

export default function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <TopNavbar />
        {/* <TestMenu /> */}
        <Switch>
          <Route path='/team' exact component={Team} />
          <Route path='/roadmap' exact component={Roadmap} />
          <Route path='/community' exact component={Community} />
          <Route path='/traitsandspecies' exact component={TraitsAndSpecies} />
          <Route path='/about' exact component={About} />
          <Route path='/' exact component={Home} />
        </Switch>
      </Router>
   
      <Footer />
    </>
  );
}
