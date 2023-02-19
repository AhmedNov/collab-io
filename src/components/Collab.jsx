import React from 'react'

import '../styles/StyleCollab.css'

import CollabCard from './CollabCard'
import collab from '../collab.json'

const Collab = () => {
  return (
    <div className='collab'data-aos="fade-down">
               <h1>Collab is simple, fast and fun</h1> 

    
    <div>
        {
          collab.map(coll => (
            <CollabCard shekil= {coll.image} basliq={coll.title} govde={coll.body}/>
            
          ))    

          
        }
        
    </div>
    </div>
  )
}

export default Collab