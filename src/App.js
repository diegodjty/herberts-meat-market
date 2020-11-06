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

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  return (
    <Router>
      <MobileHeader />
      <Switch>
          <Route exact path="/" component={Homepage}/>
          <Route exact path="/specials" component={Specials}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/meatgrades" component={MeatGrades}/>
          <Route exact path="/gallery" component={Gallery}/>
          <Route exact path="/contact" component={Contact}/>
      </Switch>
      <Comments />
      <Footer />
    </Router>
    
    
   )
}
export default App;
