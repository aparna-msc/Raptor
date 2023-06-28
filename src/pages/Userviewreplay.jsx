import React from 'react'

import Viewreplay from '../components/User/Viewreplay'
import Footer from '../components/User/Footer'
import Header from '../components/User/Header'

function Userviewreplay() {
  return (
    <div>
      <Header/>
      <Viewreplay/>
      <div style={{marginTop:'150px'}}>
        <Footer/>
        </div>
    </div>
  )
}

export default Userviewreplay