import React from 'react'
import { Link } from 'react-router-dom'

const CTA = () => {
  return (
 <section className='cta'>
    <p className='cta-text'>Want to work together?🔥 </p>
    <Link to='/contact' className='btn'>
        Lets GO! 😼
    </Link>

 </section>
  )
}

export default CTA