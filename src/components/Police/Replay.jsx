import React, { useState } from "react";
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useParams } from "react-router-dom";

const Replay = () => {
  const { id } = useParams();
  const complaint_id = localStorage.getItem('complaint_id');
  const [isSubmit, setIssubmit] = useState(false);
  const [inputs, setInputs] = useState({
    complaint_id: complaint_id,
  });

  const setRegister = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs({ ...inputs, [name]: value });
  };

  const registerSubmit = (event) => {
    event.preventDefault();
  
    axios.post(`http://127.0.0.1:8000/api/Replay/${id}`, inputs)
      .then((data) => {
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
      })
      .catch((err) => {
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
      });
  };

  return (
    <div className="policereplay">
      <main className="app-content">
        <div className="row">
          <div className="col-md-6">
            <div className="tile">
              <h3 className="tile-title">Replay</h3>
              <div className="tile-body">
                <ToastContainer />
                <form onSubmit={registerSubmit}>
                  <div className="form-group">
                    {/* <label className="control-label">Replay</label> */}
                    <input
                      type="text"
                      name="replay"
                      value={inputs.replay || ""}
                      onChange={setRegister}
                      className="form-control"
                      placeholder="Enter the message"
                    />
                  </div>
                  <div className="form-group">
                    <button
                      className="btn btn-primary"
                      type="submit"
                      style={{ marginTop: "20px" }}
                    >
                      <i className="fa fa-fw fa-lg fa-check-circle" />
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Replay;
