import React from 'react'
import "./Intro.css"
import LocalActivityIcon from '@mui/icons-material/LocalActivity';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import pic1 from "../assets/Pics/1.png"
function Intro() {
  return (
    <div className="container">
     <div className="row">
        <div className="col-10">
            <h3 className='tex'>The Creative Agency <span className='ele'>Design <br /> to </span> Accelerate <span className='ele'>Business<br /></span>
            Growth</h3>
        </div>
     </div>
     <div className="row">
      <div className="col-4">
        <h2 className='rate'>4.9 <p className='text'>(2.5k+
          Reviews)</p> </h2>
          <LocalActivityIcon className='icon' /> < LocalActivityIcon className='icon'/>< LocalActivityIcon className='icon' />< LocalActivityIcon  className='icon'/>< LocalActivityIcon  className='icon'/>
      <p className='text2'>Average rating based on<br/>
      client feedback</p> </div>
      <div className="col-1 verticle-line"></div>
      <div className="col-6">
        <p className='text3'>We are a dynamic creative agency dedicated to delivering exceptional results through a wide range of innovative services. Our expertise spans multiple areas, including Website Design, Website Development, all aimed at enhancing the quality and effectiveness of your business.</p>
    <button className='btn1'> <FiberManualRecordIcon fontSize='small'/>let's talk</button>
      </div>
     </div>
     <div className="row">
      <div className="col-10">
        <img src={pic1} alt="pic1" className='pic' />
      </div>
     </div>
    </div>
  )
}

export default Intro