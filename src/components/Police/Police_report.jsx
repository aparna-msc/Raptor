import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const Police_report = () => {
  const { id } = useParams();
  const [inputs, setInputs] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/singlecrimereport/${id}`)
      .then(({ data }) => {
        if (data.success === true) {
          setInputs(data.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const update = () => {
    axios
      .post(`http://127.0.0.1:8000/api/crimestatus/${id}`)
      .then(() => {
        navigate(`/Crimestatus1`);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="dx" style={{ marginBottom: "20px" }}>
      <div>
        <div className="card" style={{ width: "0rem" }}>
          {inputs.image && (
            <img
              className="card-img-top"
              src={`http://127.0.0.1:8000/${inputs.image}`}
              alt="Card image cap" 
            />
          )}
          <div className="card-body">
            <h5 className="card-title">CRIME REPORT </h5>
            <h6 className="card-subtitle mb-2 text-muted">
              <u>{inputs.incidenttype}</u>
            </h6>
            <p className="card-text">{inputs.describe}</p>
            <>
              {/* Add your desired content here */}
            </>
            <div>
              <button onClick={update} className="btn btn-primary">
                <i className="fa fa-fw fa-lg fa-check-circle" />
                UPDATE CRIME STATUS
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Police_report;
