import React from 'react'
import Header from '../components/User/Header'

import Footer from '../components/User/Footer'
import Contact from '../components/Contact'

function Detail() {
  return (
    <div>
        <Header/>
        <div style={{marginTop:'-250px'}}>
        <Contact/>
        <Footer/></div>
    </div>
  )
}

export default Detail