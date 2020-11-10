import React from 'react'

import MobileHeader from './components/mobile/MobileHeader'
import Comments from './components/Comments'
import Footer from './components/Footer'


import Homepage from './pages/Homepage';
import Specials from './pages/Specials';
import About from './pages/About';
import MeatGrades from './pages/MeatGrades';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Header from './components/Header';

import ScrollToTop from './components/ScrollToTop';
import {


  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <MobileHeader />
      <Switch>
          <Route  path="/" exact component={Homepage}/>
          <Route  path="/specials" component={Specials}/>
          <Route  path="/about" component={About}/>
          <Route  path="/meatgrades" component={MeatGrades}/>
          <Route  path="/gallery" component={Gallery}/>
          <Route  path="/contact" component={Contact}/>
      </Switch>
      <Comments />
      <Footer />
    </Router>
    
    
   )
}
export default App;
