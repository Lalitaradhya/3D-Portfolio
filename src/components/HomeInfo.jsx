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
    <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-2 px-6 text-white mx-5 font-medium'>
      💩 Hey there!👋🏼<br />
      Click ⬅️ ➡️  or  🖱️ / 👆🏾 to rotate 🚗, 🔊 for Audio <br />
      and learn more about me. <br />
    </h1>
   
  ),
  2: (
    <InfoBox 
    text ="Which came first, the chicken or the egg? If the chicken came first, it must have hatched from an egg. If the egg came first, it must have been laid by a creature that was not quite a chicken. "
    link = "/about"
    btnText="My Resume"/>
  ),
  3: (
    <InfoBox 
    text ="If you remove one grain of sand from a heap, it's still a heap. If you repeat this process, when does it stop being a heap? This paradox explores the concept of vagueness."
    link = "https://ai.aradhya3d.com/"
    btnText="Article Summarizer"/>
  ),
  4: (
    <InfoBox 
    text ="In Plato's dialogue Meno, Socrates raises the question of how one can seek knowledge about something if they don't already know what it is. It challenges the nature of learning and the acquisition of knowledge."
    link = "/contact"
    btnText="Let's Talk"/>
  ),
}


const HomeInfo = ({currentStage}) => {
  return renderContent[currentStage] || null
}

export default HomeInfo