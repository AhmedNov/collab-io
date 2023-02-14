import React from 'react'
import bracketup from '../assets/img/brackets.svg'
import bracketdown from '../assets/img/brackets2.svg'
import stars from '../assets/img/stars.svg'

import '../styles/StyleBubbleJob.css'

const BubbleJob = () => {
  return (
    <div className='BubbleJob'>
        <h1>Hear what teams around the world <br /> saying about Collab</h1>
        <div>
            <img className='bracket1' src={bracketup} alt="" />
            <div>
                <img src={stars} alt="" />
                <h1>I want my team to spend time thinking about high level UX problems, rather than mindlessly repeating busy work. Collab helps them do that.</h1>
                <p>Robert Mayar -</p>
            </div>
            <img className='bracket2' src={bracketdown} alt="" />
        </div>
        <div>
            <img className='' src="" alt="" />

            <button>sol</button>
            <button>sag</button>
        </div>
    </div>
  )
}

export default BubbleJob