
import React, { useState } from "react";
import axios from 'axios'
import {toast,ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Police_register = () => {
  const [inputs, setInputs] = useState({
    name:"",
    place:"",
    email: "",
    phone_number: "",
    username:"",
    password:"",
    
  
  });
  const [formErrors, setformErrors] = useState({})
  const [isSubmit, setIssubmit] = useState(false)
 
  const validate = (values)=>{
    var error = {}
    if(!values.name){
      error.name ="Enter name"
    }
    if(!values.place){
      error.place ="Enter place"
    }
    if(!values.email){
      error.email ="Enter  email"
    }
    if(!values.phone_number){
      error.phone_number ="Enter Your phone_number"
    }
    if(!values.username){
      error.username ="Enter username"
    }
    if(!values.password){
      error.password ="Enter password"
    }
    return error
  }
  const setPolice_register = (event) => {
    
      const name = event.target.name;
      const value = event.target.value;   
      setInputs({...inputs, [name]: value });
      console.log(inputs);
    };
   
    const registerSubmit = (event) => {
      console.log(inputs);
      event.preventDefault();
     
      setformErrors(validate(inputs))
    setIssubmit(true)
    if(Object.keys(formErrors).length === 0 && isSubmit){
      axios.post('http://127.0.0.1:8000/api/policestation',inputs).then((data)=>{
        console.log(data);
        // console.log(data.response.data.message);
        toast(data.data.message, {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
        
       
      }).catch((err)=>{
        console.log(err);
        toast(err.response.data.message, {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
      })
    }
    };
    return (
      <div className="policestation">
        <div id='left'>
        <div className="row px-xl-5">
    <div className="col-lg-7 mb-5">
      <div className="contact-form">
        <div id="success" />
        <ToastContainer />
      
        <form onSubmit={registerSubmit}>
        <img className="mb-4" src="img/user.png" alt="" width={72} height={57} />
      <h1 className="h3 mb-3 fw-normal">Please sign up</h1>
          <div className="control-group">
          <span style={{color:"red"}} > {formErrors.name? formErrors.name :""}</span>
            <input
              type="text" 
              onChange={setPolice_register}
              onClick={()=>{setformErrors({...formErrors,name:""})}}
              className="form-control"
              name="name"
              placeholder="name"
            />
            <p className="help-block text-danger" />
          </div>
          
          <div className="control-group">
          <span style={{color:"red"}} > {formErrors.place? formErrors.place :""}</span>
            <input
              type="text"
              className="form-control"
              name="place"
              placeholder="Place"
              value={inputs.place || ""}
              onChange={setPolice_register}
              onClick={()=>{setformErrors({...formErrors,place:""})}}
            />
            <p className="help-block text-danger" />
          </div>
          <div className="control-group">
          <span style={{color:"red"}} > {formErrors.email? formErrors.email :""}</span>
            <input
              type="email"
              className="form-control"
              name="email"
              placeholder="email"
              value={inputs.email || ""}
              onChange={setPolice_register}
              onClick={()=>{setformErrors({...formErrors,email:""})}}
            />
            <p className="help-block text-danger" />
          </div>
        
          <div className="control-group">
          <span style={{color:"red"}} > {formErrors.phone_number? formErrors.phone_number:""}</span>
            <input
              type="text"
              className="form-control"
              name="phone_number"
              placeholder="Phone Number"
              value={inputs.phone_number || ""}
              onChange={setPolice_register}
              onClick={()=>{setformErrors({...formErrors,phone_number:""})}}
            />
            <p className="help-block text-danger" />
          </div>
          <div className="control-group">
          <span style={{color:"red"}} > {formErrors.username? formErrors.username :""}</span>
            <input
              type="text"
              className="form-control"
              name="username"
              placeholder="username"
              value={inputs.username || ""}
              onChange={setPolice_register}
              onClick={()=>{setformErrors({...formErrors,username:""})}}
            />
            <p className="help-block text-danger" />
          </div>
          <div className="control-group">
          <span style={{color:"red"}} > {formErrors.password? formErrors.password :""}</span>
             <input
              type="password"
              className="form-control"
              name="password"
              placeholder="password"
              
              value={inputs.password || ""}
              onChange={setPolice_register}
              onClick={()=>{setformErrors({...formErrors,password:""})}}
            />
            <p className="help-block text-danger" />
          </div>
       
          <div>
          <button
  className="btn lg btn-primary py-2 px-4"
  type="submit"
  id="RegisterButton"
  style={{ width: "150px", height: "70px" }} // Adjust the width and height values as needed
>
  Register
</button>

          </div>
        </form>
      </div>
    </div>
   </div>
  </div>
  
      </div>
    )
  
}

export default Police_register