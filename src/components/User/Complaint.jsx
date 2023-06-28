import React, { useState } from "react";
import axios from 'axios'
import {toast,ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Complaint = () => {
    const user_id = localStorage.getItem('user_id')
    const [isSubmit, setIssubmit] = useState(false)
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
    // const Submit = (event) => {
    //   event.preventDefault();
  
     
  
    //   console.log("data",inputs);
    // };
    const registerSubmit = (event) => {
      console.log(inputs);
      event.preventDefault();
     
    
    
   
      axios.post('http://127.0.0.1:8000/api/complaint',inputs).then((data)=>{
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
    <div className="complaint">
         <main className="app-content">
 
 
 <div className="row">
   <div className="col-md-20">
     <div className="tile">
       <h3 className="tile-title"></h3>
       <div className="tile-body">
       <ToastContainer />
       <form  onSubmit={registerSubmit} style={{marginLeft:'10px',marginBottom:'20px',marginRight:'20px',marginTop:'30px'}}>
           <h3 style={{textAlign:'center',}}>User Complaint</h3>
       <div className="form-group">
             <label className="control-label">Name</label>
             <input
                             
                             type="text"

             name="name"
              value={inputs.name|| ""}
              onChange={setRegister}
               className="form-control"
               
               
             />
           </div>
          
           <div className="form-group">
             <label className="control-label">Complaints</label>
             <textarea 
             name="Complaints"
             rows={4}
             value={inputs.Complaints|| ""}
             onChange={setRegister}
               className="form-control"
               type="complaints"
               placeholder="Enter the complaints"
             />
           </div>
       
           <div className="form-group">
             <label className="control-label">Date</label>
             <input
                             
                             type="date"

             name="date"
              value={inputs.date|| ""}
              onChange={setRegister}
               className="form-control"
               
               
             />
           </div>
           <div className="form-group">
  <div className="row">
    <div className="col">
      <button className="btn btn-primary btn-block" type="submit" style={{marginBottom:'20px',marginTop:'20px'}}>
        <i className="fa fa-fw fa-lg fa-check-circle" />
        Submit
      </button>
    </div>
   
  </div>
</div>

         </form>
       </div>
       
     </div>
   </div>
 
   <div className="clearix" />
   
  
 </div>
</main>
    </div>
  )
}

export default Complaint