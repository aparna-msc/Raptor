import React from 'react'
import Userhome from '../../pages/Userhome'
import Policehome from '../../pages/Policehome'
import {Routes,Route} from 'react-router-dom'
import Crimereport from '../../pages/Crimereport'
import Crimestatus from '../../pages/Crimestatus'
import Criminalrecord from '../../pages/Criminalrecord'
import Contact from '../../pages/Contact'
import About from '../../pages/About'
import Reg from '../../pages/Reg'
import Log from '../../pages/Log'
import Crimereport1 from '../../pages/Crimereport1'
import Publicuser from '../../pages/Publicuser'
import Crimestatus1 from '../../pages/Crimestatus1'
import Logout from '../../pages/Logout'
import Reg1 from '../../pages/Reg1'
import Usercomplaint from '../../pages/Usercomplaint'
import Table from '../../pages/Table'

import Policereplay from '../../pages/Policereplay'
import Policecomplaint from '../../pages/Policecomplaint'

import Userviewreplay from '../../pages/Userviewreplay'

function Mainrouter() {
  return (
    <div>
        <Routes>
            <Route path='userhome' element={<Userhome/>}/>
            <Route path='/police' element={<Policehome/>}/>
             <Route path='/crimereport' element={<Crimereport/>}/>
             <Route path='/crimereport1/:id' element={<Crimereport1/>}/>
             <Route path='/crimestatus' element={<Crimestatus/>}/>
            <Route path='/crimestatus1' element={<Crimestatus1/>}/>
            <Route path='/criminalrecord' element={<Criminalrecord/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/logout' element={<Logout/>}/>
            <Route path='/reg' element={<Reg/>}/>
            <Route path='/' element={<Publicuser/>}/>
            <Route path='/Log' element={<Log/>}/>
            <Route path='/Reg1' element={<Reg1/>}/>
            <Route path='/usercomplaint' element={<Usercomplaint/>}/>
            <Route path='/table' element={<Table/>}/>
            <Route path='/policecomplaint' element={<Policecomplaint/>}/>
            <Route path='/policereplay/:id' element={<Policereplay/>}/>
            <Route path='/userviewreplay' element={<Userviewreplay/>}/>

          
    
        </Routes>
    </div>
  )
}

export default Mainrouter