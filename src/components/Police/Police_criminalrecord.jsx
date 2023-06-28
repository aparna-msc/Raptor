import React, { useState } from "react";
import axios from 'axios'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Police_criminalrecord = () => {
    const policestation_id = localStorage.getItem('policestation_id')
    const [isSubmit, setIssubmit] = useState(false)
    const [img, setImg] = useState()
    const [inputs, setInputs] = useState({

        policestationid: policestation_id,
      


    });
    const setRegister = (event) => {
        console.log(event.target);
        const name = event.target.name;
        const value = event.target.value;
        setInputs({ ...inputs, [name]: value });
        console.log(inputs);
    };



    const registerSubmit = (event) => {
        console.log(inputs);
        event.preventDefault();

        const formData = new FormData()
        formData.append('image', inputs.image)
        formData.append('name', inputs.name)
        formData.append('address', inputs.address)
        formData.append('age', inputs.age)
        formData.append('gender', inputs.gender)
        formData.append('dateofbirth', inputs.dateofbirth)
        formData.append('hight', inputs.hight)
        formData.append('weight', inputs.weight)
        formData.append('nationality', inputs.nationality)
        formData.append('occuption', inputs.occuption)
        formData.append('placeofarrest', inputs.placeofarrest)
        formData.append('dateofarrest', inputs.dateofarrest)
        formData.append('time', inputs.time)
        formData.append('scarsandmark', inputs.scarsandmark)
        formData.append('typeofcrime', inputs.typeofcrime)
       formData.append('policestation_id', inputs.policestationid)




        axios.post('http://127.0.0.1:8000/api/criminalsrecord', formData).then((data) => {
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


        }).catch((err) => {
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
        <div className="criminal">
            <ToastContainer />
          

                <section id="contact" className="padd-section">
                    <div className="container" data-aos="fade-up">

                        <div
                            className="row justify-content-center"
                            data-aos="fade-up"
                            data-aos-delay={100}
                        >
                            <div className="col-lg-3 col-md-4">


                            </div>
                            <div className="col-lg-8 col-md-8">
                                <div className="form" style={{border:'2px solid black'}}>
                                    <form
                                        onSubmit={registerSubmit} encType="multipart/form-data"
                                        style={{marginLeft:'10px',marginRight:'10px',marginTop:'10px',marginBottom:'10px'}}
                                    >
                                                   <h3 style={{textAlign:'center',}}>Police Criminal Record</h3>

                                        <div className="col-sm-0"> Name  </div>
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                name="name"
                                                value={inputs.name || ""}
                                                onChange={setRegister}
                                                className="form-control"
                                                id=""
                                                placeholder=""
                                                required=""
                                            />

                                        </div>

                                        <div className="col-sm-0">Address </div>
                                        <div className="form-group mt-3">
                                            <input
                                                type=""
                                                className="form-control"
                                                name="address"
                                                value={inputs.address || ""}
                                                onChange={setRegister}
                                                id=""
                                                placeholder=" "
                                                required=""
                                            />
                                        </div>
                                        <div className="col-sm-0">Age</div>
                                        <div className="form-group mt-3">
                                            <input
                                                type=""
                                                className="form-control"
                                                name="age"
                                                value={inputs.age || ""}
                                                onChange={setRegister}
                                                id=""
                                                placeholder=" "
                                                required=""
                                            />
                                        </div>

                                        <div className="col-sm-0">Gender </div>
                                        <div className="form-group mt-3">
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="gender"
                                                value={inputs.gender || ""}
                                                onChange={setRegister}
                                                id="subject"
                                                placeholder=""
                                                required=""
                                            />
                                        </div>

                                        <div className="col-sm-0">Date of birth  </div>
                                        <div className="form-group mt-3">
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="dateofbirth"
                                                value={inputs.dateofbirth || ""}
                                                onChange={setRegister}
                                                id="subject"
                                                placeholder=""
                                                required=""
                                            />
                                        </div>
                                        <div className="col-sm-0"> Hight </div>
                                        <div className="form-group mt-3">
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="hight"
                                                value={inputs.hight || ""}
                                                onChange={setRegister}
                                                id="subject"
                                                placeholder=""
                                                required=""
                                            />
                                        </div>
                                        <div className="col-sm-0">Weight </div>
                                        <div className="form-group mt-3">
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="weight"
                                                value={inputs.weight || ""}
                                                onChange={setRegister}
                                                id="subject"
                                                placeholder=""
                                                required=""
                                            />
                                        </div>

                                        <div className="col-sm-0">Nationality </div>
                                        <div className="form-group mt-3">
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="nationality"
                                                value={inputs.nationality || ""}
                                                onChange={setRegister}
                                                id="subject"
                                                placeholder=""
                                                required=""
                                            />
                                        </div>
                                        <div className="col-sm-0">Accuption </div>
                                        <div className="form-group mt-3">
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="occuption"
                                                value={inputs.occuption || ""}
                                                onChange={setRegister}
                                                id="subject"
                                                placeholder=""
                                                required=""
                                            />
                                        </div>
                                        <div className="col-sm-0">Place of arrest </div>
                                        <div className="form-group mt-3">
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="placeofarrest"
                                                value={inputs.placeofarrest || ""}
                                                onChange={setRegister}
                                                id="subject"
                                                placeholder=""
                                                required=""
                                            />
                                        </div>
                                        <div className="col-sm-0">Date of arrest </div>
                                        <div className="form-group mt-3">
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="dateofarrest"
                                                value={inputs.dateofarrest || ""}
                                                onChange={setRegister}
                                                id="subject"
                                                placeholder=""
                                                required=""
                                            />
                                        </div>
                                        <div className="col-sm-0">Time</div>
                                        <div className="form-group mt-3">
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="time"
                                                value={inputs.time || ""}
                                                onChange={setRegister}
                                                id="subject"
                                                placeholder=""
                                                required=""
                                            />
                                        </div>


                                        <div className="col-sm-0">Scars and mark </div>
                                        <div className="form-group mt-3">
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="scarsandmark"
                                                value={inputs.scarsandmark || ""}
                                                onChange={setRegister}
                                                id="subject"
                                                placeholder=""
                                                required=""
                                            />

                                        </div>
                                        <div className="col-sm-0">Type of crime </div>
                                        <div className="form-group mt-3">
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="typeofcrime"
                                                value={inputs.typeofcrime || ""}
                                                onChange={setRegister}
                                                id="subject"
                                                placeholder=""
                                                required=""
                                            />
                                        </div>

                                        <div className="col-sm-0">Image </div>
                                      
                                        <input className="form-control" type="file" name="image" onChange={(e) => setInputs({ ...inputs, image: e.target.files[0] })} />
                                        {/* <div className="my-3">
          <div className="loading">Loading</div>
          <div className="error-message" />
          <div className="sent-message">
            Your message has been sent. Thank you!
          </div>
        </div> */}
                                        <div className="text-center">
                                        <button className="btn btn-primary btn-block" type="submit" style={{marginBottom:'20px',marginTop:'20px'}}>
        <i className="fa fa-fw fa-lg fa-check-circle" />
        Submit
      </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

        
        </div>
    )
}

export default Police_criminalrecord