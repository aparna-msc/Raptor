
import React, { useState } from "react";
import axios from 'axios'
import {toast,ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Register() {
  const [inputs, setInputs] = useState({
    fullname:"",
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
    if(!values.fullname){
      error.fullname ="Enter fullname"
    }
    if(!values.place){
      error.place ="Enter place"
    }
    if(!values.email){
      error.email ="Enter email"
    }
    if(!values.phone_number){
      error.phone_number ="Enter phone_number"
    }
    if(!values.username){
      error.username ="Enter username"
    }
    if(!values.password){
      error.password ="Enter password"
    }
    return error
  }

  // console.log("value==>", inputs);


    const setRegister = (event) => {
  
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
    axios.post('http://127.0.0.1:8000/api/UserRegister',inputs).then((data)=>{
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
      // toast(err.response.data.message, {
      //   position: "bottom-center",
      //   autoClose: 5000,
      //   hideProgressBar: false,
      //   closeOnClick: true,
      //   pauseOnHover: true,
      //   draggable: true,
      //   progress: undefined,
      //   theme: "light",
      //   });
    })
  }
  };
  return (
    <div className='signup' style={{marginTop:'100px'}}> 
    
  <meta charSet="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="description" content="" />
  <meta
    name="author"
    content="Mark Otto, Jacob Thornton, and Bootstrap contributors"
  />
  <meta name="generator" content="Hugo 0.104.2" />
  <title>Signup Template · Bootstrap v5.2</title>
  <link
    rel="canonical"
    href="https://getbootstrap.com/docs/5.2/examples/sign-in/"
  />
  <link
    href="/docs/5.2/dist/css/bootstrap.min.css"
    rel="stylesheet"
    integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
    crossOrigin="anonymous"
  />
  {/* Favicons */}
  <link
    rel="apple-touch-icon"
    href="/docs/5.2/assets/img/favicons/apple-touch-icon.png"
    sizes="180x180"
  />
  <link
    rel="icon"
    href="/docs/5.2/assets/img/favicons/favicon-32x32.png"
    sizes="32x32"
    type="image/png"
  />
  <link
    rel="icon"
    href="/docs/5.2/assets/img/favicons/favicon-16x16.png"
    sizes="16x16"
    type="image/png"
  />
  <link rel="manifest" href="/docs/5.2/assets/img/favicons/manifest.json" />
  <link
    rel="mask-icon"
    href="/docs/5.2/assets/img/favicons/safari-pinned-tab.svg"
    color="#712cf9"
  />
  <link rel="icon" href="/docs/5.2/assets/img/favicons/favicon.ico" />
  <meta name="theme-color" content="#712cf9" />
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n      .bd-placeholder-img {\n        font-size: 1.125rem;\n        text-anchor: middle;\n        -webkit-user-select: none;\n        -moz-user-select: none;\n        user-select: none;\n      }\n\n      @media (min-width: 768px) {\n        .bd-placeholder-img-lg {\n          font-size: 3.5rem;\n        }\n      }\n\n      .b-example-divider {\n        height: 3rem;\n        background-color: rgba(0, 0, 0, .1);\n        border: solid rgba(0, 0, 0, .15);\n        border-width: 1px 0;\n        box-shadow: inset 0 .5em 1.5em rgba(0, 0, 0, .1), inset 0 .125em .5em rgba(0, 0, 0, .15);\n      }\n\n      .b-example-vr {\n        flex-shrink: 0;\n        width: 1.5rem;\n        height: 100vh;\n      }\n\n      .bi {\n        vertical-align: -.125em;\n        fill: currentColor;\n      }\n\n      .nav-scroller {\n        position: relative;\n        z-index: 2;\n        height: 2.75rem;\n        overflow-y: hidden;\n      }\n\n      .nav-scroller .nav {\n        display: flex;\n        flex-wrap: nowrap;\n        padding-bottom: 1rem;\n        margin-top: -1px;\n        overflow-x: auto;\n        text-align: center;\n        white-space: nowrap;\n        -webkit-overflow-scrolling: touch;\n      }\n    "
    }}
  />
  {/* Custom styles for this template */}
  <link href="css/login.css" rel="stylesheet" />
  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
    rel="stylesheet"
  />
  <main className="form-signin w-100 m-auto">
  <ToastContainer />
  <form onSubmit={registerSubmit}>
      <img className="mb-4" src="img/user.png" alt="" width={72} height={57} />
      <h1 className="h3 mb-3 fw-normal">Please sign up</h1>
      
      <div className="form-floating"  style={{marginBottom:'10px'}}>
      <span style={{color:"red"}} > {formErrors.fullname? formErrors.fullname :""}</span>
        <input
          type="text"
          className="form-control"
          name="fullname"
          value={inputs.fullname || ""}
          onChange={setRegister}
          onClick={()=>{setformErrors({...formErrors,fullname:""})}}
        />
        
        <label>Fullname</label>
    
      </div>
      <div className="form-floating"  style={{marginBottom:'10px'}}>
      <span style={{color:"red"}} > {formErrors.place? formErrors.place :""}</span>
        <input
          type="text"
          className="form-control"
          name="place"
          value={inputs.place || ""}
          onChange={setRegister}
          onClick={()=>{setformErrors({...formErrors,place:""})}}
        />
        <label>Place</label>
       
      </div>
      <div className="form-floating"  style={{marginBottom:'10px'}}>
      <span style={{color:"red"}} > {formErrors.email? formErrors.email:""}</span>
        <input
          type="email"
          className="form-control"
          name="email"
          value={inputs.email || ""}
          onChange={setRegister}
          onClick={()=>{setformErrors({...formErrors,email:""})}}
        />
        <label>Email</label>
       
      </div>
      <div className="form-floating"  style={{marginBottom:'10px'}}>
      <span style={{color:"red"}} > {formErrors.phone_number? formErrors.phone_number:""}</span>
        <input
          type="text"
          className="form-control"
          
          
          name="phone_number"
          value={inputs.phone_number || ""}
          onChange={setRegister}
          onClick={()=>{setformErrors({...formErrors,phone_number:""})}}
        />
        <label>PhoneNumber</label>
        </div>
      <div className="form-floating"  style={{marginBottom:'10px'}}>
      <span style={{color:"red"}} > {formErrors.username? formErrors.username:""}</span>
        <input
          type="text"
          className="form-control"
        
         
          name="username"
          value={inputs.username || ""}
          onChange={setRegister}
          onClick={()=>{setformErrors({...formErrors,username:""})}}
        />
           <label>UserName</label>
        
      </div>
      <div className="form-floating" style={{marginBottom:'10px'}}>
      <span style={{color:"red"}} > {formErrors.place? formErrors.password:""}</span>
        <input
          type="password"
          className="form-control"
          name="password"
          value={inputs.password || ""}
          onChange={setRegister}
          onClick={()=>{setformErrors({...formErrors,password:""})}}
        />
        <label>password</label>
       
      </div>
     
      <button className="w-100 btn btn-lg btn-primary" type="submit" style={{marginBottom:'10px'}}>
        Sign up
      </button>
      {/* <p className="mt-5 mb-3 text-muted">© 2017–2022</p> */}
    </form>
  </main>

    </div>
  )
}

export default Register