import React from 'react'
import './midsection.css'
import people from '../../assest/people working.png'
const Midsection = () => {
  return (
      <>
    <div className='container'>
        <h1><b>more than just shorter links</b></h1>
    </div>
    <div className='image'>
        <img src={people} alt="" />
    </div>
    </>

  )
}

export default Midsection