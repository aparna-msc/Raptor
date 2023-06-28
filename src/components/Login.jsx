import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router";

const Login = () => {
  const [Input, setInput] = useState({
    username: "",
    password: "",
  });
const navigate = useNavigate()
  const [formErrors, setformErrors] = useState({})
  const [isSubmit, setIssubmit] = useState(false)

  const inputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInput({ ...Input, [name]: value });
   
  };

  const validate = (values)=>{
    var error = {}
    if(!values.username){
      error.username ="Enter Username"
    }
    if(!values.password){
      error.password ="Enter Password"
    }
    return error
  }

  const validation = (e)=>{
    console.log(Input);
    e.preventDefault()
    setformErrors(validate(Input))
    setIssubmit(true)
    if(Object.keys(formErrors).length === 0 && isSubmit){
      axios.post(`http://127.0.0.1:8000/api/Log`,Input).then((response)=>{
        console.log(response.data);
        
        if (response.data.success === true) {
          if (response.data.data.role === "user") {
            localStorage.setItem("name", response.data.data.username)
            localStorage.setItem("login_id", response.data.data.login_id)
            localStorage.setItem("role", response.data.data.role)
            localStorage.setItem("user_id", response.data.data.user_id)
              sessionStorage.setItem("currentloggedin", response.data.username);
              navigate('/userhome')
          }
          else if (response.data.data.role === "police") {
            localStorage.setItem("name", response.data.data.username)
            localStorage.setItem("login_id", response.data.data.login_id)
            localStorage.setItem("role", response.data.data.role)
            localStorage.setItem("policestation_id", response.data.data.user_id)
            sessionStorage.setItem("currentloggedin", response.data.username);
              navigate('/police')
          }   
        
      }
      }).catch((err)=>{
        console.log(err);
      })
    }
  }
  return (

     
    <div className='signin'>
      <>
  <meta charSet="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="description" content="" />
  <meta
    name="author"
    content="Mark Otto, Jacob Thornton, and Bootstrap contributors"
  />
  <meta name="generator" content="Hugo 0.104.2" />
  <title>Signin Template · Bootstrap v5.2</title>
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
  <form onSubmit={validation}>
      
      <img className="mb-4" src="img/user.png" alt="" width={72} height={57} />
      <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
      <div className="form-floating">
      <span style={{color:"red"}} > {formErrors.username? formErrors.username :""}</span>
        <input
          type="text"
          onChange={inputChange}
          onClick={()=>{setformErrors({...formErrors,username:""})}}
          className="form-control"
          
          placeholder="username"
          name="username"
          style={{marginBottom:'20px'}}
        />
        <label htmlFor="floatingInput">User name</label>
      </div>
      <div className="form-floating">
      <span style={{color:"red"}} > {formErrors.password? formErrors.password :""}</span>
        <input
          type="password"
          onChange={inputChange}
          onClick={()=>{setformErrors({...formErrors,password:""})}}
          className="form-control"
          
          placeholder="Password"
          name="password"
        />
        <label htmlFor="floatingPassword">Password</label>
      </div>
      <div className="checkbox mb-3">
        <label>
          <input type="checkbox" defaultValue="remember-me" /> Remember me
        </label>
      </div>
      <button className="w-100 btn btn-lg btn-primary" type="submit">
        Sign in
      </button>
      <p className="mt-5 mb-3 text-muted">© 2017–2022</p>
    </form>
  </main>
</>

    </div>
  )
}

export default Login
