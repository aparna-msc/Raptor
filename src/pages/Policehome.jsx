import React from 'react'
import Footer from '../components/User/Footer'
import Policeheader from '../components/Police/Policeheader'
import Frm from '../components/Frm'

import Policesliders from '../components/Police/Policesliders'

function Policehome() {
  return (
    <div>
     
       
        <Policeheader/>
        <Policesliders />
        <Frm/>
        <Footer/>
      
    </div>
  )
}
 
export default Policehome