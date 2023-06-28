import axios from "axios";
import React, { useEffect, useState } from "react";


const Police_status = () => {
  const [inputs, setInputs] = useState([]);
  useEffect(() => {
   
    axios
      .get(
        `http://127.0.0.1:8000/api/usercrimereport`
      )
      .then((response) => {
        if (response.data.success === true) {
          setInputs(response.data.data);
        }
      });
  }, []);
  console.log("data", inputs);
  return (
    
    <div style={{marginTop:'150px',marginLeft:'20px',marginRight:'20px'}}>
       
 <table className="table table-bordered">
  <thead>
  <tr class="table-primary">
      <th scope="col">SlNo</th>
      <th scope="col"> Incident Type</th>
      <th scope="col">Date</th>
      <th scope="col">Location</th>
      <th scope="col">Describe</th>
      <th scope="col">Involved people</th>
      <th scope="col">Status</th>
      
    

    </tr>
  </thead>
  <tbody>
  {inputs.map((data,key)=>(
  <tr class="table-info">
      <th scope="row">{key+1}</th>
      <td>{data.incidenttype}</td>
      <td>{data.date}</td>
      <td>{data.location}</td>
      <td>{data.describe}</td>
      <td>{data.involvedpeople}</td>
      <td>{data.status==0?"Need to take action": data.status==1 ? "In Progress" : "Completed"}</td>
      
    

      
    </tr>
    
   
    ))}
  </tbody>
  
</table>

      
    </div>
  )
}

export default Police_status