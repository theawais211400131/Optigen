import React from 'react'
import "./Customertestominals.css"
import feedback1 from "../assets/Pics/Feedback-1.png"
import feedback2 from "../assets/Pics/Feedback-2.png"
import feedback3 from "../assets/Pics/Feedback-3.png"
import feedback4 from "../assets/Pics/Feedback-4.png"
import feedback5 from "../assets/Pics/Feedback-5.png"
import feedback6 from "../assets/Pics/Feedback-6.png"
import feedback7 from "../assets/Pics/Feedback-7.png"
function Customertestominals() {
  return (
    <div className="container">
        <h1 className='heading'>Customer Testimonials</h1>
        <div className="row cus">
         <div className="col-4"><img src={feedback1} alt="feedback1" className='feedback1'/><img src={feedback2} alt="feedback2" className='feedback2'/></div>
         <div className="col-4"><img src={feedback3} alt="feedback3" className='feedback3'/><img src={feedback4} alt="feedback4"className='feedback4' /></div>
         <div className="col-4"><img src={feedback5} alt="feedback5"className='feedback5' /><img src={feedback6} alt="feedback6" className='feedback6'/><img src={feedback7} alt="feedback7" className='feedback7'/></div>

        </div>
    </div>
  )
}

export default Customertestominals