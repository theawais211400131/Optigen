import React from 'react';
import "./Ourprojects.css";
import proj1 from "../assets/Pics/proj-1.jpg";
import proj2 from "../assets/Pics/proj-2.jpeg";
import proj3 from "../assets/Pics/proj-3.jpg";
import proj4 from "../assets/Pics/proj-4.jpg";
import proj5 from "../assets/Pics/proj-5.jpg";

function Ourprojects() {
  return (
    <div className="container">
      <h1 className='headin'>Our Projects</h1>
      <div className="row">
        <div className="col-4">
          <img src={proj1} alt="proj1" className='proj1'/>
        </div>
        <div className="col-4">
          <img src={proj2} alt="proj2" className='proj2'/>
          <img src={proj3} alt="proj3" className='proj3'/>
        </div>
        <div className="col-4">
          <img src={proj4} alt="proj4" className='proj4'/>
          <img src={proj5} alt="proj5" className='proj5'/>
        </div>
      </div>
    </div>
  );
}

export default Ourprojects;
