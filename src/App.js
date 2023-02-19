
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


function App() {
  useEffect(() =>{
    AOS.init({duration:2000})
  }, [])

  return (
    <>
    
      <Navbar  />

    <FreeTrial />
    
    <Template />
    
    <Collab/> 

    {/* <BubbleJob/>  */}

    <Integrates/>

    

    
    
    </>
  );
}

export default App;

