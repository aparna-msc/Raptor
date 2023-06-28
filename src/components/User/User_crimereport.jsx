import React, { useState } from "react";
import axios from 'axios'
import {toast,ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const User_crimereport = () => {
  const user_id = localStorage.getItem('user_id')
  const [isSubmit, setIssubmit] = useState(false)
  const [img, setImg] = useState()
  const [inputs, setInputs] = useState({

    userid:user_id,
    
    
  });
  const setRegister = (event) => {  
    console.log(event.target);
    const name = event.target.name;
    const value = event.target.value;   
    setInputs({...inputs, [name]: value });
    console.log(inputs);
  };
  
  
 
  const registerSubmit = (event) => {
    console.log(inputs);
    event.preventDefault();
   
  const formData = new FormData()
  formData.append('image',inputs.image)
  formData.append('incidenttype',inputs.incidenttype)
  formData.append('date',inputs.date)
  formData.append('location',inputs.location)
  formData.append('describe',inputs.describe)
  formData.append('involvedpeople',inputs.involvedpeople)
  formData.append('userid',inputs.userid)

  
 
    axios.post('http://127.0.0.1:8000/api/crimereport',formData).then((data)=>{
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
  
  };
  return (
    <div className='crimereport'>
     <ToastContainer />
        <form  onSubmit={registerSubmit} encType="multipart/form-data" className="crimereport2">
      <div className="tile">
          <h3 className="tile-title"><u>Crime Report</u></h3></div><br/>
  <div className="form-group row">
    <label className="col-sm-2 col-form-label">
      Incident type*
    </label>
    <div className="col-sm-8" style={{marginBottom:'10px'}}
>
      <input
        type="text"
        name="incidenttype"
        value={inputs.incidenttype|| ""}
        onChange={setRegister}
        className="form-control"
       
        placeholder=""
      />
    </div>
  </div>
  <div className="form-group row">
    <label className="col-sm-2 col-form-label">
      Date*
    </label>
    <div className="col-sm-4" style={{marginBottom:'10px'}}>
    <input
                              
                              type="date"

              name="date"
               value={inputs. date||""}
               onChange={setRegister}
                className="form-control"
                
                
              />
    </div>
  </div>
  <br/>
  <div className="form-group row" >
    <label htmlFor="" className="col-sm-2 col-form-label">
      Location of incident*
    </label>
    <div className="col-sm-8" style={{marginBottom:'10px'}}>
      <input
        type="text"
        name="location"
        value={inputs.location|| ""}
        onChange={setRegister}
        className="form-control"
        id=""
        placeholder=""
      />
    </div>
  </div>
  <div className="form-group row">
              <label className="control-label col-md-2">Please describe the incident</label>
                <div className="col-md-8" style={{marginBottom:'10px'}}>
                  <textarea
                   name="describe"
                   value={inputs.describe|| ""}
                   onChange={setRegister}
                    className="form-control"
                    rows={4}
                    placeholder=""
                    defaultValue={""}
                  />
                </div>
              </div>
              <br/>
              <div className="form-group row">
    <label htmlFor="" className="col-sm-2 col-form-label">
    Involved people*
    </label>
    <div className="col-sm-8" style={{marginBottom:'10px'}}>
      <input
        type="text"
        name="involvedpeople"
                   value={inputs.involvedpeople|| ""}
                   onChange={setRegister}
        className="form-control"
        id=""
        placeholder=""
      />
    </div>
  </div>
 
 

  <div className="form-group row">
                <label className="control-label col-md-2">Identity Proof</label>
                <div className="col-md-8">
                  <input className="form-control" type="file" name="image" onChange={(e)=>setInputs({...inputs,image:e.target.files[0]})} />
                </div>
              </div>
              <div className="form-group row">
                <div className="col-md-8 col-md-offset-3">
                  <div className="form-check">
                    <label className="form-check-label"style={{marginLeft:'200px',marginTop:'20px',marginBottom:'20px'}}> 
                      <input className="form-check-input" type="checkbox" />
                      accept the terms and conditions
                    </label>
                  </div>
                </div>
              </div>
  <div className="form-group row">
    <div className="col-sm-10">
      <button type="submit" className="btn btn-primary" style={{marginBottom:'20px'}}>
        SUBMIT
      </button>
    </div>
  </div>
</form>

    </div>
  )
}

export default User_crimereport