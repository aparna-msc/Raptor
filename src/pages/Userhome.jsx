import React from 'react'
import Header from '../components/User/Header'
import Footer from '../components/User/Footer'
import Frm from '../components/Frm'
import Slider from '../components/User/Slider'


function Userhome() {
  return (
    <div className='userhome'>
      <Header/>
      <Slider /> 
      <Frm/>
      <Footer/>
    </div>
  )
}

export default Userhome