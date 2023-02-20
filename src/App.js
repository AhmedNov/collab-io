
import React, {useEffect,useState} from 'react';

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

import { Routes,   Route , Link } from 'react-router-dom';
import SignIn from './components/page/SignIn';
import About from './components/page/About';
import PreLoader from './components/PreLoader';

function App() {
  const [loading,setLoading] = useState(false);
  useEffect(()=>{
    setLoading(true);
    setTimeout(()=>{
        setLoading(false)
    },2000);
  }, [])
  useEffect(() =>{
    AOS.init({duration:1500})
  }, [])

  
  return (
    <>

      {
        loading 
        ? <PreLoader/>
         
        :
         <>
          
          <Navbar/>
       
        
        
        <Routes>
                <Route path='/' element={App}/>
              <Route path='/signin ' element = {<SignIn/>} />
              <Route path='* '  element={<About/>}/> 
         </Routes>
      

    <FreeTrial />
    
    <Template />
    
    <Collab/> 

    <BubbleJob/> 

    <Integrates/>

    <Footer /> 
    </>
          
      }
         
  
    
    
    </>
  );
}

export default App;

