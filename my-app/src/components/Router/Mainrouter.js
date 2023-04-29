import React from 'react'
import Userhome from '../../pages/Userhome'
import Policehome from '../../pages/Policehome'
import {Routes,Route} from 'react-router-dom'
import Crimereport from '../../pages/Crimereport'
import Crimestatus from '../../pages/Crimereport'
import Criminalrecord from '../../pages/Criminalrecord'
import Contact from '../../pages/Contact'
import About from '../../pages/About'
import Register from '../../pages/Register'
import Login from '../../pages/Login'


function Mainrouter() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Userhome/>}/>
            <Route path='/police' element={<Policehome/>}/>
             <Route path='/crimereport' element={<Crimereport/>}/>
            <Route path='/crimestatus' element={<Crimestatus/>}/>
            <Route path='/criminalrecord' element={<Criminalrecord/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
             <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
        </Routes>
    </div>
  )
}

export default Mainrouter