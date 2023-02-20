
import React, {useEffect} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'
import './App.css';
import AOS from 'aos'
import 'aos/dist/aos.css'
import  FreeTrial  from './components/FreeTrial';
import Template from './components/Templates'

import  Navbar  from './components/Navbar';

import Collab from './components/Collab';
import BubbleJob from './components/BubbleJob';
import Integrates from './components/İntegrates'
import Footer from './components/Footer'
import Singin from './components/page/SignIn'
import { Routes,   Route , Link } from 'react-router-dom';
import SignIn, {SingIn }from './components/page/SignIn';


function App() {
  useEffect(() =>{
    AOS.init({duration:2000})
  }, [])

  return (
    <>
    
      

       <Navbar  />
        
        
        <Routes>
         
              <Route path='/signin ' element = {SignIn} /> 
        </Routes>
      

    <FreeTrial />
    
    <Template />
    
    <Collab/> 

    <BubbleJob/> 

    <Integrates/>

    <Footer />

    
  
    
    
    </>
  );
}

export default App;

