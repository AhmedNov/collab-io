import React from 'react'
import Template from './TemplatesData'
import tempData from '../template.json'
import  Template2 from  "./Template2"

const Templates = () => {

  return (
    
   <div className='main-temp' >
    {
      tempData.map(work => work.id%2 ? (

        <Template basliq={work.first_title} mid={work.mid_title} bottom1={work.bottom_title1} bottom2={work.bottom_title2} bottom3={work.bottom_title3}
         imgLink = {work.img_link}/>
      ) : <Template2 basliq={work.first_title} mid={work.mid_title} bottom1={work.bottom_title1} bottom2={work.bottom_title2} bottom3={work.bottom_title3}
      imgLink = {work.img_link} ppimg = {work.pp_img} /> )

      
    }
   </div>
        
    
  )
}

export default Templates