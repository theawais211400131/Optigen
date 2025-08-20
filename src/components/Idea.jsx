import React from 'react'
import "./Idea.css"
import bulb from "../assets/Pics/bulb.png"
function Idea() {
  return (
    <div className="container">
      <div className="something">
        <div className="row">
        <div className="col-8"><p className='let'>Let's make something <br/>together</p>
        <button className='btn11'>let's talk</button></div>
        <div className="col-4"><img src={bulb} alt="bulb" className='bulb' /></div>
        </div>
      </div>

    </div>
  )
}

export default Idea