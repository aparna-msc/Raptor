
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Viewcomplaint = () => {
  const [inputs, setInputs] = useState([]);
  useEffect(() => {
   
    axios
      .get(
        `http://127.0.0.1:8000/api/viewcomplaint`
      )
      .then((response) => {
        if (response.data.success === true) {
          setInputs(response.data.data);
        }
      });
  }, []);
  console.log("data", inputs);
  return (
    <div className="policecomplaint">
      <main className="app-content">
  
  <div className="row">

    <div className="col-md-12">
    <h3 style={{textAlign:'center',}}>Complaint</h3>
      <div className="tile">
     
        <div className="tile-body">
          <div className="table-responsive">
            <table
              className="table table-hover table-bordered"
              id="sampleTable"
              style={{marginLeft:'20px',marginRight:'20px',marginTop:'20px',marginBottom:'20px',width:'95%'}}
              
            >
              
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Date</th>
                  <th>Complaints</th>
                  <th>Replay</th>
                  <th>Action</th>
                  
                </tr>
              </thead>
              <tbody>
              {inputs.map((data,key)=>(
                <tr>
                  <td>{data.name}</td>
                  <td>{data.date}</td>
                  <td>{data.Complaints}</td>
                  <td>{data.replay}</td>
                  <td><Link to={`/policereplay/${data.id}`}><button className="btn btn-primary" type="VIEW">
      <i className="fa fa-fw fa-lg fa-check-circle"/>
      REPLAY
      </button></Link>

      
    
      </td>
                
                </tr>
                 ))}
              </tbody>
             
            </table>
          </div>
        </div>
      </div>
    </div>
   
  </div>
</main>

    </div>
  )
}

export default Viewcomplaint