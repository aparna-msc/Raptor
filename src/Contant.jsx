import React from 'react'

function Contant() {
  return (
    <div>
    
       <section id="about-us" className="about-us padd-section">
  <div className="container" data-aos="fade-up">
    <div className="row justify-content-center">
      <div className="col-md-5 col-lg-3">
        <dir className='img'></dir>
        <img
          src="img/859674-75199-axhywvjxyg-1511960362.jpg"
          alt="About"
          data-aos="zoom-in"
          data-aos-delay={800}
        />
      </div>
      <div className="col-md-7 col-lg-5">
        <div
          className="about-content"
          data-aos="fade-left"
          data-aos-delay={100}
        >
          <h2>
            <span>RAPTOR</span>{" "}
          </h2>
           <p>
          Raptor website store data's of criminals,policestations.we can identify a criminal by using the face detection detals
          of a criminal,which is stored in a police station database.This helps us to identify the criminals around us 
          </p>
          {/* <ul className="list-unstyled">
            <li>
              <i className="vi bi-chevron-right" />
              Creative Design
            </li>
            <li>
              <i className="vi bi-chevron-right" />
              Retina Ready
            </li>
            <li>
              <i className="vi bi-chevron-right" />
              Easy to Use
            </li>
            <li>
              <i className="vi bi-chevron-right" />
              Unlimited Features
            </li>
            <li>
              <i className="vi bi-chevron-right" />
              Unlimited Features
            </li>
          </ul> */} 
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default Contant