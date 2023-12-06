import React from 'react'
import { Link } from 'react-router-dom'
import {arrow} from '../assets/icons'

const InfoBox = ({text, link, btnText}) => (
  <div className='info-box'>
    <p className='font-medium sm:text-xl text-center'>{text}</p>
    <Link to={link} className='neo-brutalism-white neo-btn'>
      {btnText}
      <img src = {arrow} className='w-4 h-4 object-contain' />
    </Link>
  </div>
)

const renderContent = {
  1: (
    <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-2 px-6 text-white mx-5'>
      💩 Hey there!👋🏼<br />
      Click ⬅️ ➡️  or  🖱️ / 👆🏾 to rotate 🚗, 🔊 for Audio <br />
      and learn more about me. <br />
    </h1>
   
  ),
  2: (
    <InfoBox 
    text ="Art is the silent poetry of depth, creativity the language it speaks, and perception the silent audience that interprets the profound verses of the human experience."
    link = "/about"
    btnText="My Resume"/>
  ),
  3: (
    <p className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-2 px-6 text-white mx-5'>
     "In the tapestry of time, carbon fiber weave strength,<br /> steel stands resilient, and stone bears witness. <br />  Together, they embody the enduring essence of evolution, <br /> reflecting the transformative journey of moments <br /> passing through the fabric of existence."
    </p>
  ),
  4: (
    <InfoBox 
    text ="In the canvas of life, art is the brush that paints depth into existence, perception is the lens revealing hidden nuances, and creativity is the divine alchemy that turns imagination into a masterpiece."
    link = "/contact"
    btnText="Let's Talk"/>
  ),
}


const HomeInfo = ({currentStage}) => {
  return renderContent[currentStage] || null
}

export default HomeInfo