import React from 'react'
import "./Ourteam.css"
import team1 from "../assets/Pics/team-1.jpeg"
import team2 from "../assets/Pics/team-2.jpeg"
import team3 from "../assets/Pics/team-3.jpeg"
function Ourteam() {
  return (
    <div className="container">
        <h1 className='heading'>Meet our team</h1>
        <div className="row">
            <div className="col-4"><img src={team1} alt="team1" className='team'/><h6 className='aa'>Muhammad Awais</h6><p className='bb'>Frontend Develper</p></div>
            <div className="col-4"><img src={team2} alt="team2" className='team'/><h6 className='aa'>Zain Tariq</h6><p className='bb'>Backend Develper</p></div>
            <div className="col-4"><img src={team3} alt="team3" className='team'/><h6 className='aa'>Suleman Khan</h6><p className='bb'>Project Manager</p></div>
        </div>
    </div>
  )
}

export default Ourteam