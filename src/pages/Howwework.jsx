import React from 'react'
import "./Howwework.css"
import DescriptionIcon from '@mui/icons-material/Description';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import RecyclingIcon from '@mui/icons-material/Recycling';
import FlagIcon from '@mui/icons-material/Flag';

const steps = [
    { icon: <DescriptionIcon />, title: "Briefing", description: "Summary of information or instructions given before a project." },
    { icon: <LightbulbIcon />, title: "Idea", description: "Generated through brainstorming, research, and observation." },
    { icon: <RecyclingIcon />, title: "Processing", description: "Set of actions that transform inputs into desired output requiring planning." },
    { icon: <FlagIcon />, title: "Finishing", description: "The final stage of a process is where the product or outcome is completed." },
  ];
function Howwework() {
  return (
    <div className="howwework">
        <h1 className='head'>How do we work?</h1>
        <div className="steps-container">
            {steps.map((step,index)=>(
                <div className="step" key={index}>
                    <div className="step-icon">{step.icon}</div>
                    {index < steps.length - 1 }
                   <h3>{step.title}</h3>
                   <p>{step.description}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Howwework