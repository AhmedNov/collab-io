import React from 'react'

import '../styles/StyleCollabCard.css'

const CollabCard = ({shekil, govde, basliq}) => {
  return (
    <div className='collabcard col-12 col-md-4 col-lg-3'data-aos="fade-donw">
        <img src={shekil}  className="img-fluid" alt="" />
        <h1>{basliq}</h1>
        <p>{govde}</p>
    </div>
  )
}

export default CollabCard